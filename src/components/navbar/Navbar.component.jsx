import React, { useState } from "react";
import './Navbar.styles.scss'


const Navbar = () => {

    function handleClick(event) {
        event.target.nextElementSibling.classList.toggle("open");
    }


    return (
        <nav>
            <div className="hamburger" onClick={handleClick}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul className="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Reach me</a></li>
            </ul>
        </nav>

    )
}

export default Navbar

