import React, {useState} from 'react';
import cl from './CreatePostForm.module.css'

const CreatePostForm = ({addPost, setModalActive}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        if (title && body) {
            const newPost = {id: Date.now(), title, body}
            addPost(newPost)
            setTitle('')
            setBody('')
            setModalActive(false)
        }
    }

    return (

        <form className={cl.blockForm}>
            <input className={cl.inputInForm}
                   placeholder='Enter Title'
                   value={title}
                   onChange={e => setTitle(e.target.value)}
            />
            <input className={cl.inputInForm}
                   placeholder='Enter Description'
                   value={body}
                   onChange={e => setBody(e.target.value)}
            />
            <div className={cl.buttonCreate}>
                <button style={{color: "black"}}
                        onClick={addNewPost}
                >Add post
                </button>
            </div>
        </form>

    );
};

export default CreatePostForm;