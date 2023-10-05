import React from 'react';
import {createRoot} from 'react-dom/client';
// import {Router, IndexRoute, browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {App} from '/imports/ui/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Links from "../imports/ui/components/link/links";
import BinsMain from "../imports/ui/components/bins/bins_main";
import BinsList from "../imports/ui/components/bins/bins_list";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<BinsList/>}/>
                <Route path="bins/:binId" element={<BinsMain/>}/>
                <Route path="links" element={<Links/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container);
    root.render(routes);
});
