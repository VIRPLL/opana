import React from 'react';

import './SideBar.stayle.css';
import {NavLink} from "react-router-dom";

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

