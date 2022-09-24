import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import diver from "./images/diver.png"
import wedding from "./images/wedding.png"
import bike from "./images/mountain-bike.png"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="card-component">
                <Card
                    img={diver}
                />
                <Card 
                    img={wedding}
                />
                <Card 
                    img={bike}
                />
            </div>
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
            {/* <Joke
                Punchline="I can't wait to see her face light up when she opens it"
                isPun={true}
            />
            <Joke 
                Setup=" I got my daughter a fridge for her birthday."
                Punchline="I can't wait to see her face light up when she opens it"
                isPun={false}
            />
            <Joke 
                Setup="How did the hacker escape the police?"
                Punchline="He just ransomware!"
                isPun={true}
            />
            <Joke 
                Setup="Why don't pirates travel on mountain roads?"
                Punchline="Scurvy."
                isPun={false}
            />
            <Joke 
                Setup="Why do bees stay in the hive in the winter?"
                Punchline="Swarm."
                isPun={true}
            />
            <Joke 
                Setup="What's the best thing about Switzerland?"
                Punchline="I don't know, but the flag is a big plus!"
                isPun={false}
            /> */}
        </div>
    )
}
