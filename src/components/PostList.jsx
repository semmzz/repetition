import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './PostList.css'

const PostList = ({posts, ...props}) => {

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
                            player={pl}
                            index={i + 1}
                            deletePost={props.deletePost}

                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;