import React from "react"
import droplet from "../images/droplet.png"


export default function Main(props) {
    return (
        <main className="main">
            <img src={props.imageUrl} className="main-img" alt="mountain" />
            <div>
                <div className="map">
                    <img src={droplet} className="droplet" alt="droplet" />
                    <h4 className="main-h4">{props.location} <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" rel="noreferrer" className="googlemaps">{props.googleMapsUrl}</a></h4>              
                </div>
                <h1 className="main-h1">{props.title}</h1>
                <h3 className="main-h3">{props.startDate} {props.endDate}</h3>
                <p className="main-p">{props.description}</p>
            </div>
        </main>
    )
}