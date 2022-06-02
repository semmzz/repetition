import './App.css';
import PostList from "./components/PostList";
import {useState} from "react";
import CreatePostForm from "./components/CreatePostForm";
import MyModal from "./UI/MyModal";
import ButtonCreatePost from "./UI/ButtonCreatePost";
import SelectSort from "./UI/SelectSort";

function App() {


    const [posts, setPosts] = useState([
        {id: 6546645, title: 'Dendi', body: "Navi"},
        {id: 4323312, title: 'zzMiracle', body: "zAOG"},
        {id: 5435433, title: 'MYatoro', body: "Team Spirit"},
        {id: 6211326, title: 'Doxalk', body: "BetBoom"},
        {id: 8444337, title: 'KuroKy', body: "Nigma"},
    ])

    const deletePost = (player) => {
        setPosts(posts.filter(pl => player.id !== pl.id))
    }

    const addPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const [modalActive, setModalActive] = useState(false);

    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) =>a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">

                    <ButtonCreatePost
                        setModalActive={setModalActive}
                    />

                    <SelectSort
                        defaultValue="Сортировать:"
                        options={[
                            {value: 'title', name: 'По названию'},
                            {value: 'body', name: 'По описанию'},
                        ]}
                        value={selectedSort}
                        onChange={sortPosts}
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
                        posts={posts}
                        deletePost={deletePost}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
