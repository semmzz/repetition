import React from 'react';

const Comment = ({comm}) => {
    return (
        <div style={{margin:20, border: '2px solid black', padding:'0 0 0 10px'}}>
            <h4> Name: {comm.name.split(' ')[0].replace(comm.name.split(' ')[0][0], comm.name.split(' ')[0][0].toUpperCase())}</h4>
            <h4>Email: {comm.email}</h4>
            <h5>Text: {comm.body}</h5>

        </div>
    );
};

export default Comment;