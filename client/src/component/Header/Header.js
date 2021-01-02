import React from 'react';
import "./Header.css";

const num = 5;
function Header() {
    return (
        <div className="header">
            <div className="header_right">
                <p>I am a Header {num}</p> 
            </div>
            <div className="header_center">
                <p>Center Header</p>
            </div>
            <div className="header_left">
                <p>Left Header</p>
            </div>
        </div>
    )
}

export default Header

