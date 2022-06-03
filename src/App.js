import './App.css';
import PostList from "./components/PostList";
import {useEffect, useMemo, useState} from "react";
import CreatePostForm from "./components/CreatePostForm";
import MyModal from "./components/UI/MyModal";
import ButtonCreatePost from "./components/UI/ButtonCreatePost";
import PostFilter from "./components/PostFilter";

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

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        // eslint-disable-next-line default-case
        switch (filter.find) {
            case 'all':
                return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase())
                    || el.body.toLowerCase().includes(filter.query.toLowerCase()))
            case 'title':
                return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase()))
            case 'body':
                return sortedPosts.filter(el => el.body.toLowerCase().includes(filter.query.toLowerCase()))
        }
    }, [filter.query, sortedPosts, filter.find]);


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
