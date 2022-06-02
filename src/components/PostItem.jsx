import React from 'react';
import cl from './PostItem.module.css'

const PostItem = ({player, ...props}) => {


    return (
        <div className={cl.post}>
            <div>
                <div className={cl.title}>{props.index}. {player.title}</div>
                <div className={cl.description}>Description: {player.body}</div>
            </div>

            <button
                className={cl.buttonDelete}
                onClick={_=> props.deletePost(player)}>Delete
            </button>

        </div>
    );
};

export default PostItem;