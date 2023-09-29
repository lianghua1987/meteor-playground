import React from 'react';
import Header from "./components/header";
import LinkCreate from "./components/link_create";
import LinkList from "./components/link_list";

export const App = () => (
    <div>
        <Header/>
        <LinkCreate/>
        <LinkList/>
    </div>
);
