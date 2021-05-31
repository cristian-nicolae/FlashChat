import React from 'react';
import './navbar.scss';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar__title">FlashChat</div>
            <div className="navbar__separator"></div>
            <div className="navbar__welcome">Welcome, @{props.nickname}</div>
        </div>
    );
}

export default Navbar;