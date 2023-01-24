import React, {useEffect, useState} from 'react';

import {userService} from "../../axiosSerice";
import {UserDetails} from "../UserDetails/UserDetails";


export const SingleUser = ({userId}) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        userService.getById(userId).then(value => value.data).then(value => setUser(value))
    },[userId])

    return (

        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

