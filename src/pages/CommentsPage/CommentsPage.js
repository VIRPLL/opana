import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import {commentsService} from "../../services";

export const CommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments([...data]))
    },[])

    return (
        <div>
            <Outlet />
            <hr/>
            <hr/>
            <h1 style={{textAlign:"center"}}>Comments</h1>
            <Comments comments={comments}/>

        </div>
    );
};

