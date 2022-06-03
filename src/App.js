import './App.css';
import PostList from "./components/PostList";
import {useEffect, useMemo, useState} from "react";
import CreatePostForm from "./components/CreatePostForm";
import MyModal from "./components/UI/MyModal";
import ButtonCreatePost from "./components/UI/ButtonCreatePost";
import PostFilter from "./components/PostFilter";
import {usePosts} from "./components/hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 6546645, title: 'B', body: "Z"},
        {id: 4323312, title: 'Z', body: "C"},
        {id: 5435433, title: 'A', body: "B"},
        {id: 6211326, title: 'C', body: "D"},
        {id: 8444337, title: 'H', body: "A"},
    ])

    const deletePost = (player) => {
        setPosts(posts.filter(pl => player.id !== pl.id))
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
                        posts={sortedAndSearchedPosts}
                        deletePost={deletePost}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
