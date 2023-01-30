import React from 'react';

export const Todo = (props) => {

    const {userId, id, title, completed} = props;

    return (
        <div>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
            <hr/>
        </div>
    );
};

