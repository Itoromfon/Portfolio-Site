import React from "react"
// import Joke from "./components/Joke"
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
                    rating="5.0" 
                    reviewCount={6}
                    location="Switzerland"
                    title="Life lessons with Katie Zaferes"
                    price="136"
                />
            </div>
        </div>
    )
}

            // <Joke 
            //     setup="I got my daughter a fridge for her birthday."
            //     punchline="I can't wait to see her face light up when she opens it."
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?"
            //     punchline="He just ransomware!"
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?"
            //     punchline="Scurvy."
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?"
            //     punchline="Swarm."
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?"
            //     punchline="I don't know, but the flag is a big plus!"
            // />

