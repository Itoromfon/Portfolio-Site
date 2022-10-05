import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    console.log(memeImage)
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        // memesArray[randomNumber].url
    }
    return (
        <main>
            <div className="form">
                <p></p>
                <div className="inputs">
                    <input
                        className="input" 
                        type="text" 
                        placeholder="Top text"
                    />
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Bottom text"
                    />
                </div>
                <a onClick={getMemeImage} className="meme-btn" href="#">
                    Get a new meme image
                </a>
            </div>
            <div className="img-div">
                <img src={memeImage} className="meme--image" href="./#" />
            </div>
        </main>
    )
}