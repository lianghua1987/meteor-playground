import React from 'react';
import {Outlet} from "react-router-dom"
import Header from "./components/header";

export const App = () => (
    <div>
        <Header/>
        <Outlet/>
    </div>
);
