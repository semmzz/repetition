import PostItem from "./PostItem";

const PostList = ({posts, ...props}) => {

    if (!posts.length){
        return (
            <h1>Posts weren't found</h1>
        )
    }

    return (
        <div>
            {posts.map((pl, i) =>
                <PostItem
                    player={pl}
                    index={i + 1}
                    deletePost={props.deletePost}
                    key={pl.id}
                />
            )}
        </div>
    );
};

export default PostList;