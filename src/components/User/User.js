import React from 'react';

export const User = ({user}) => {

    const {id,name,username,email,phone} = user;

    return (
        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>User name - {username}</div>
            <div>Email - {email}</div>
            <div>Phone - {phone}</div>
            <hr/>
            <hr/>
        </div>
    );
};

