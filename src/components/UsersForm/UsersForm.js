import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";

export const UsersForm = ({setUsers}) => {

    const {register, handleSubmit,reset} = useForm({
        mode: 'all'
    })

    const submit  = async (data) => {
        await userService.createUser(data).then(({data}) => setUsers((prevState)=>[...prevState, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            <input type={"text"} placeholder={'username'} {...register('username')}/>
            <input type={"text"} placeholder={'email'} {...register('email')}/>
            <input type={"number"} placeholder={'phone'} {...register('phone')}/>
            <button>Create new user</button>
        </form>
    );
};

