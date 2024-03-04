import React from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Start Bootstrap</div>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}
