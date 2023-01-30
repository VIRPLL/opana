import React from 'react';
import {Outlet} from "react-router-dom";

import {SideBar} from "../components";
import './MainLayout.style.css'


export const MainLayout = () => {

    return(

        <div className={'mainCont'}>
            <SideBar/>
            <Outlet/>
        </div>

    );
};

