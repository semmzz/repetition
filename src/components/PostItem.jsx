import React from 'react';
import cl from './PostItem.module.css'

const PostItem = ({player, ...props}) => {

    const deletePost = _ => {
        props.deletePlayer(player)
    }

    return (
        <div className={cl.post}>
            <div>
                <div className={cl.title}>{props.index}. {player.title}</div>
                <div className={cl.description}>Description: {player.body}</div>
            </div>

            <button
                className={cl.buttonDelete}
                onClick={deletePost}>Delete
            </button>

        </div>
    );
};

export default PostItem;