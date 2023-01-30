import React from 'react';

import './Todo.style.css'

export const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div className={'todo'}>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};

