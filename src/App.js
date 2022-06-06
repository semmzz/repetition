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




function App() {

    const [posts, setPosts] = useState([]);

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    });

    useEffect(() => {
        fetchPosts()
    }, [])

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const addPost = (newPost) => {
        setPosts([...posts, newPost])
    }

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
                </div>
            </div>
        </div>
    );
}

export default App;
