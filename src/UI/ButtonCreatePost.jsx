import React from 'react';
import cl from './ButtonCreatePost.module.css'

const ButtonCreatePost = ({setModalActive}) => {
    return (
        <div>
            <button className={cl.glowOnHover}
                onClick={_=>setModalActive(true)}>Create Post</button>

        </div>
    );
};

export default ButtonCreatePost;