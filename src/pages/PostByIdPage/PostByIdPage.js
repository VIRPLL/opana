import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";

export const PostByIdPage = () => {

    const [post, setPost]= useState({});

    const {userId, id, title, body} = post

    const {postById} = useParams();
    useEffect(()=>{
        postService.postById(postById).then((data)=>setPost(data))
    },[postById])

    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

