import './App.css';
import PostList from "./components/PostList";
import {useState} from "react";
import CreatePostForm from "./components/CreatePostForm";
import MyModal from "./UI/MyModal";
import ButtonCreatePost from "./UI/ButtonCreatePost";

function App() {


    const [posts, setPosts] = useState([
        {id: 6546645, title: 'Dendi', body: "Navi"},
        {id: 4323312, title: 'Miracle', body: "OG"},
        {id: 543543, title: 'Yatoro', body: "Team Spirit"},
    ])

    const deletePlayer = (player) => {
        setPosts(posts.filter(pl => player.id !== pl.id))
    }

    const addPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">

                    <ButtonCreatePost
                    setModalActive={setModalActive}
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
                        deletePlayer={deletePlayer}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
