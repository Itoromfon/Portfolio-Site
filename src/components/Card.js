import React from "react"
import star from "../images/Star 1.png"
// import diver from "../images/diver.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} className="card-img" alt="card-img" />
            <div className="star-usa">
                <img src={star} className="star" alt="star" />
                <p className="star-p">5.0 <span className="usa-span">(6).USA</span></p>
            </div>
            <p className="life-lesson">Life lessons with Katie Zaferes</p>
            <p className="person"><span className="bold">From $136</span> / person</p>
        </div>
    )
}