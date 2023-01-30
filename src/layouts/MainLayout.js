import React from 'react';

import {SideBar} from "../components";
import './MainLayout.style.css'
import {Outlet} from "react-router-dom";

export const MainLayout = () => {

    return(

        <div className={'mainCont'}>
            <SideBar/>
            <Outlet/>
        </div>

    );
};

