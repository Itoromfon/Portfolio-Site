import React from "react"
import star from "../images/Star 1.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} className="card-img" alt="card-img" />
            <div className="star-card">
                <img src={star} className="star" alt="star" />
                <p className="star-p">{props.rating} 
                    <span className="usa-span">
                        ({props.reviewCount}).{props.location}
                    </span>
                </p>
            </div>
            <p className="life-lesson">{props.title}</p>
            <p className="person"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}