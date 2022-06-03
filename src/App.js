import './App.css';
import PostList from "./components/PostList";
import {useMemo, useState} from "react";
import CreatePostForm from "./components/CreatePostForm";
import MyModal from "./components/UI/MyModal";
import ButtonCreatePost from "./components/UI/ButtonCreatePost";
import SelectSort from "./components/UI/SelectSort";
import InputFind from "./components/UI/InputFind";
import SelectFind from "./components/UI/SelectFind";

function App() {


    const [posts, setPosts] = useState([
        {id: 6546645, title: 'Dendi', body: "Liquid"},
        {id: 4323312, title: 'zzMiracle', body: "zAOG"},
        {id: 5435433, title: 'MYatoro', body: "Cis Reject"},
        {id: 6211326, title: 'Doxalk', body: "BetBoom"},
        {id: 8444337, title: 'KuroKy', body: "Detchland"},
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

    }

    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));

        }
        return posts;
    }, [selectedSort, posts])

    const [selectedFind, setSelectedFind] = useState('all')

    const sortedAndSearchedPosts = useMemo(() => {
        // eslint-disable-next-line default-case
        switch (selectedFind) {
            case 'all':
                return sortedPosts.filter(el => el.title.toLowerCase().includes(searchQuery.toLowerCase())
                    || el.body.toLowerCase().includes(searchQuery.toLowerCase()))
            case 'title':
                return sortedPosts.filter(el => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
            case 'body':
                return sortedPosts.filter(el => el.body.toLowerCase().includes(searchQuery.toLowerCase()))

        }


    }, [searchQuery, sortedPosts, selectedFind]);


    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">

                    <ButtonCreatePost
                        setModalActive={setModalActive}
                    />

                    <InputFind
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />

                    <SelectFind
                        value={selectedFind}
                        setValue={setSelectedFind}

                        options={[
                            {value: 'all', name: 'Везде'},
                            {value: 'title', name: 'В названии'},
                            {value: 'body', name: 'В описании'},
                        ]}
                    />
                    <br/>

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
                        posts={sortedAndSearchedPosts}
                        deletePost={deletePost}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
