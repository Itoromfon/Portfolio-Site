import React from "react"
import logo from "../images/react-logo.png";

export default function Header() {
    return (
    <header>
        <nav className="nav">
           {/* <img className="nav-logo" src="react-logo.png" alt="nav-logo" /> */}
           <img src={logo} className="nav-logo" alt="nav-logo" />

            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>   
    )
}