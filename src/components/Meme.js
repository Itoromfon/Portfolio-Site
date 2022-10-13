import React, {useState, useEffect} from "react"

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    console.log(meme)

    function handleChange(event) { 
        const {name, value} = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value
            }
        ))
    }

    const [allMemes, setAllMemes] = useState([])
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    console.log(allMemes)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme((prevMeme) =>  (
            {
                ...prevMeme,
                randomImage: url
            }
        ))
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
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <a onClick={getMemeImage} className="meme-btn" href="./#">
                    Get a new meme image
                </a>
            </div>
            <div className="img-div">
                <img src={meme.randomImage} className="meme--image" alt="meme-img" href="./#" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}