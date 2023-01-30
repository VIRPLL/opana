import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import './PostByIdPage.style.css'


export const PostByIdPage = () => {

    const [post, setPost]= useState(null);

    const {postById} = useParams();
    useEffect(()=>{
        if (postById) {
            postService.postById(postById).then(({data})=>setPost({...data}))
        }
    },[postById])

    if(!post) return null;

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Post</h1>
            <div className={'post'}>
                <div>UserId: {post.userId}</div>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
            </div>
        </div>

    );
};

