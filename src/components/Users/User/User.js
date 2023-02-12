import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../../redux";

export const User = ({user}) => {

    const {id, name, username, email} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>User name: {username}</div>
            <div>Email: {email}</div>
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))}>Select</button>
            <hr/>
        </div>
    );
};