import React from "react"
import star from "../image/Star 1.png"

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} className="card-img" alt="card-img" />
            <div className="star-card">
                <img src={star} className="star" alt="star" />
                <p className="star-p">{props.stats.rating} 
                    <span className="usa-span">
                        ({props.stats.reviewCount}).{props.location}
                    </span>
                </p>
            </div>
            <p className="life-lesson">{props.title}</p>
            <p className="person"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}