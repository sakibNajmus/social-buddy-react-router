import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="head-logo">
                <h3>Nice Book</h3>
            </div>

            <div className="head-menu">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Public</a>
                <a href="">Posts</a>
            </div>
        </div>
    );
};

export default Header;