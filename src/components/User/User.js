import React from 'react';

export const User = ({user, setUserId}) => {

    const {id,name,username} = user;

    return (

        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>User name - {username}</div>
            <button onClick={()=>{setUserId(id)}}>More</button>
        </div>
    );
};

