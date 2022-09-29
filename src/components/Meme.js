import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div className="inputs">
                    <input className="input" type="text" />
                    <input className="input" type="text" />
                </div>
                <a className="meme-btn" href="https://technology-firm.netlify.app/#" target="_blank" rel="noreferrer">
                    Get a new meme image
                </a>
            </form>
        </main>
    )
}