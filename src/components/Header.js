import React from "react"
import face from "../images/Meme Face.png"

export default function Header() {
    return(
        <header className="header">
            <img src={face} className="meme-face" alt="troll face" />
            <h2 className="header-h2">Meme Generator</h2>
            <h4 className="header-h4">React Course - Project 3</h4>
        </header>
    )
}