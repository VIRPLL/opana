import React, {useEffect, useState} from 'react';

import {Comments} from "../../components";
import {Outlet} from "react-router-dom";
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
            <Comments comments={comments}/>

        </div>
    );
};

