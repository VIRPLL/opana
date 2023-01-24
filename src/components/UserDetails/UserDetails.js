import React from 'react';

export const UserDetails = ({user}) => {

    const {id, name, username, email, phone} = user;

    return (

        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>User Name: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
        </div>
    );
};

