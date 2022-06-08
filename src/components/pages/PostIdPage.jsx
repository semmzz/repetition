import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Load from "../Load";
import Comment from "./Comment";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, errorPost] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getComments(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div>
            <h1>You opened post's page of post ID: {post.id}</h1>
            {isLoading
                ? <Load/>
                : <div>
                    <h3>TITLE:</h3> {post.title}
                    <h4>BODY:</h4> {post.body}
                </div>}
            <h2>Comments: </h2>
            {isComLoading
                ? <Load/>
                : (errorCom ? <div><h3>Error comments:</h3> {errorCom}</div>
                    : comments.map(comm => (
                        <Comment key={comm.id} comm={comm}/>
                    )))
            }


        </div>
    );
};

export default PostIdPage;