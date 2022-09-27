// import React from "react"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import data from "./data"
// console.log(data)

// export default function App() {
//     const cards = data.map(item => 
//         <Card 
//             key={item.id}
//             // img={item.coverImg}
//             // rating={item.stats.rating}
//             // reviewCount={item.stats.reviewCount}
//             // location={item.location}
//             // title={item.title}
//             // price={item.price}
//             // openSpots={item.openSpots}
//             {...item}
//         />
//     )
//     return (
//         <div className="container">
//             <Navbar />
//             <Hero />
//             <section className="card-component">
//                 {cards }
//             </section>
//         </div>
//     )
// }

import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

export default function App() {
    const mainData = data.map((item) => {
        return <Main 
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
        />
    })
    return (
        <div>
            <Navbar />
            {mainData}
        </div>
    )
}


































































































































































































            