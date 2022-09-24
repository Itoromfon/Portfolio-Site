import React from "react"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import Contact from "./components/Contact"
// import diver from "./images/diver.png"
// import pink from "./images/pink.jpg"
// import itoro from "./images/itoro.jpg"
// import image24 from "./images/image 24.png"

import Joke from "./components/Joke"


export default function App() {
    return (
        <div className="container">
            {/* <Navbar />
            <Hero />
            <Card /> */}
            {/* <Contact
                img={diver}
                name="Mr Itoro Mfon"
                phone="08109595025"
                email="itoromfon746@gmail.com"
            />
            <Contact 
                img={pink}
                name="Mr Charles Mfon"
                phone="08109595025"
                email="itoromfon746@gmail.com"
            />
            <Contact 
                img={itoro}
                name="Mr Frank Mfon"
                phone="08109595025"
                email="itoromfon746@gmail.com"
            />
            <Contact 
                img={image24}
                name="Mr Jeff Mfon"
                phone="08109595025"
                email="itoromfon746@gmail.com"
            /> */}
            <Joke 
                Setup=" I got my daughter a fridge for her birthday."
                Punchline="I can't wait to see her face light up when she opens it"
            />
            <Joke 
                Setup=" I got my daughter a fridge for her birthday."
                Punchline="I can't wait to see her face light up when she opens it"
            />
            <Joke 
                Setup="How did the hacker escape the police?"
                Punchline="He just ransomware!"
            />
            <Joke 
                Setup="Why don't pirates travel on mountain roads?"
                Punchline="Scurvy."
            />
            <Joke 
                Setup="Why do bees stay in the hive in the winter?"
                Punchline="Swarm."
            />
            <Joke 
                Setup="What's the best thing about Switzerland?"
                Punchline="I don't know, but the flag is a big plus!"
            />
        </div>
    )
}
