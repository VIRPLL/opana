import React, {useEffect, useState} from 'react';

import {userService} from "../../axiosSerice";
import {SingleUser} from "../SingleUser/SingleUser";
import {User} from "../User/User";


export const Users = () => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
            userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    },[])

    return (

        <div>
            <h1>User Details</h1>
            {userId && <SingleUser userId={userId}/>}

            <hr/>

            <h1>Users</h1>
            {users.map(user=><User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};
