import React from 'react';
import cl from './PostItem.module.css'
import {Link, Navigate} from "react-router-dom";


const PostItem = ({post, ...props}) => {


    return (
        <div className={cl.post}>
            <div>
                <div style={{fontWeight: 800}}
                     className={cl.title}>{post.id}. {post.title}</div>
                <div className={cl.description}>Description: {post.body}</div>
            </div>

            <div className={cl.postBtns}>
                {/*<button className={cl.btnOpen}*/}
                {/*    onClick={_=> <Navigate to='/about' />}*/}
                {/*>Open</button>*/}

                <Link to={`/posts/${post.id}`} className={cl.btnOpen}>Open</Link>
                <button
                    className={cl.buttonDelete}
                    onClick={_ => props.deletePost(post)}>Delete
                </button>
            </div>

        </div>
    );
};

export default PostItem;