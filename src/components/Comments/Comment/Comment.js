import React from 'react';

import './Comment.style.css'

export const Comment = ({comment, navigate}) => {

    const {postId, id, name, email, body} = comment


    return (
        <div className={'comment'}>
            <div>Post Id: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <button className={'btn'} onClick={()=>navigate(postId.toString())}>Post details</button>
        </div>
    );
};

