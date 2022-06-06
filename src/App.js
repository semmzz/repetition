import './App.css';
import PostList from "./components/PostList";
import {useEffect, useState} from "react";
import CreatePostForm from "./components/CreatePostForm";
import MyModal from "./components/UI/MyModal";
import ButtonCreatePost from "./components/UI/ButtonCreatePost";
import PostFilter from "./components/PostFilter";
import usePosts from "./components/hooks/usePosts";
import PostService from "./components/API/PostService";
import {useFetching} from "./components/hooks/useFetching";
import {getPagesArray, getPagesCount} from "./components/utils/page";
import Pagination from "./components/UI/Pagination";


function App() {

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

    const postsInPageArray = [
        {value: 3, name: "Posts in page: 3"},
        {value: 5, name: "Posts in page: 5"},
        {value: 7, name: "Posts in page: 7"},
        {value: 10, name: "Posts in page: 10"},
        {value: 15, name: "Posts in page: 15"},
    ]

    const [filter, setFilter] = useState({sort: '', query: '', find: 'all'});
    const [modalActive, setModalActive] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter);


    return (
        <div className="App">
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
                        postsInPageArray={postsInPageArray}
                        setCurrentPage={setCurrentPage}
                        setLimit={setLimit}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
