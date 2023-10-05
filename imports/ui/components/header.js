import React, {Component} from 'react';
import Accounts from "./accounts";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const onBinClick = (e) => {
        e.preventDefault();
        Meteor.call('bins.insert', (err, bin) => {
            navigate(`bins/${bin}`);
        });
    }

    return (
        <nav className="nav navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Markbin</Link>
            </div>
            <ul className="nav navbar-nav">
                <li><Accounts/></li>
                <li><a href="#" onClick={onBinClick}>Create bin</a></li>
                <li><Link to="links">Link</Link></li>
            </ul>
        </nav>
    );

}

export default Header;