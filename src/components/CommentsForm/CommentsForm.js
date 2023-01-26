import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../services";

export const CommentsForm = ({setComments}) => {

    const {register, handleSubmit, reset} = useForm({
        mode: "all"
    })

    const submit = async (data) => {
        commentsService.createComment(data).then(({data}) => setComments((prevState)=> [...prevState, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'name of comment'} {...register('name')}/>
            <input type={"text"} placeholder={"email"} {...register("email")}/>
            <input type={"text"} placeholder={"body"} {...register("body")}/>
            <button>Create new comment</button>
        </form>
    );
};

