import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
console.log(data)

export default function App() {
    const cards = data.map(item => 
        <Card 
            key={item.id}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
            {...item}
        />
    )
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-component">
                {cards }
            </section>
        </div>
    )
}

            