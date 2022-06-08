import React, {useEffect, useState} from "react";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPagesArray, getPagesCount, getPostsCountInPage} from "../utils/page";
import usePosts from "../hooks/usePosts";
import ButtonCreatePost from "../UI/ButtonCreatePost";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal";
import CreatePostForm from "../CreatePostForm";
import PostList from "../PostList";
import Pagination from "../UI/Pagination";


function Posts() {

    const [posts, setPosts] = useState([]);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, currentPage);
        setPosts(response.data);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    const pagesArray = getPagesArray(totalPages);

    useEffect(() => {
        fetchPosts()
    }, [currentPage, limit])

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const addPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const postsCountInPageArray = getPostsCountInPage()

    const [filter, setFilter] = useState({sort: '', query: '', find: 'all'});
    const [modalActive, setModalActive] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter);


    return (
        <div className="Posts">
            <div className="wrapper">
                <div className="content">
                    <ButtonCreatePost
                        setModalActive={setModalActive}
                    />

                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />

                    <MyModal
                        active={modalActive}
                        setActive={setModalActive}
                    >
                        <CreatePostForm
                            setModalActive={setModalActive}
                            addPost={addPost}
                        />
                    </MyModal>

                    <PostList
                        postsError={postsError}
                        isPostsLoading={isPostsLoading}
                        posts={sortedAndSearchedPosts}
                        deletePost={deletePost}
                    />

                    <Pagination
                        pagesArray={pagesArray}
                        currentPage={currentPage}
                        limit={limit}
                        postsInPageArray={postsCountInPageArray}
                        setCurrentPage={setCurrentPage}
                        setLimit={setLimit}
                    />
                </div>
            </div>
        </div>
    );
}

export default Posts;
