import React from 'react';
import cl from './PostItem.module.css'

const PostItem = ({post, ...props}) => {


    return (
        <div className={cl.post}>
            <div>
                <div style={{fontWeight: 800}}
                     className={cl.title}>{props.index}. {post.title}</div>
                <div className={cl.description}>Description: {post.body}</div>
            </div>

            <button
                className={cl.buttonDelete}
                onClick={_ => props.deletePost(post)}>Delete
            </button>

        </div>
    );
};

export default PostItem;