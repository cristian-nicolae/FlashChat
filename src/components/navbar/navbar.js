import React from 'react';
import './navbar.scss';

const Navbar = React.forwardRef((props, ref) => {
    return (
        <div className="navbar" ref={ref}>
            <div className="navbar__title">FlashChat</div>
            <div className="navbar__separator"></div>
            <div className="navbar__welcome">Welcome, @{props.nickname}</div>
        </div>
    );
})

export default Navbar;