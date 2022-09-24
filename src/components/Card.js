import React from "react"
import star from "../images/Star 1.png"

export default function Card() {
    return (
        <div className="card">
            <div id="diver">
                <a href="https://my-airbnbproject.netlify.app/" className="diver-link">SOLD OUT</a>
            </div>
            <div className="star-usa">
                <img src={star} className="star" alt="star" />
                <p className="star-p">5.0 <span className="usa-span">(6).USA</span></p>
            </div>
            <p className="life-lesson">Life lessons with Katie Zaferes</p>
            <p className="person"><span className="bold">From $136</span> / person</p>
        </div>
    )
}