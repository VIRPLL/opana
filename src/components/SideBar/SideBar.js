import React from 'react';
import {NavLink} from "react-router-dom";

import './SideBar.stayle.css';


export const SideBar = () => {

    return (

        <div className={'sideBar'}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>

    );
};

