import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './PostList.css'
import Load from "./Load";

const PostList = ({posts, isPostsLoading, postsError,deletePost}) => {

    if (isPostsLoading){
        return (
            <Load/>
        )
    }

    if (postsError){
        return <h1>Err or!: {postsError}</h1>
    }

    if (!posts.length) {
        return (
            <h1>Posts weren't found</h1>
        )
    }



    return (
        <div>
            <TransitionGroup>
                {posts.map((pl, i) =>
                    <CSSTransition
                        key={pl.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            post={pl}
                            index={i + 1}
                            deletePost={deletePost}

                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;