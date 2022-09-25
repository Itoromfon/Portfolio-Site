import React from "react"
import image28 from "../image/image 28.png"
import image30 from "../image/image 30.png"
import image26 from "../image/image 26.jpg"
import image27 from "../image/image 27.png"
import image29 from "../image/image 29.png"
import image22 from "../image/image 22.png"
import image23 from "../image/image 23.png"
import image25 from "../image/image 25.png"
import image24 from "../image/image 24.png"

export default function Hero() {
    return (
        <>
            <div className="hero">
                <img src={image28} className="image28" alt="image28" />
                <div className="img-3026">
                    <img src={image30} className="image30" alt="image30" />
                    <img src={image26} className="image26" alt="image26" />
                </div>
                <div className="img-2729">
                    <img src={image27} className="image27" alt="image27" />
                    <img src={image29} className="image29" alt="image29" />
                </div>
                <div className="img-2223">
                    <img src={image22} className="image22" alt="image22" />
                    <img src={image23} className="image23" alt="image23" />
                </div>
                <div className="img-2524">
                    <img src={image25} className="image25" alt="image25" />
                    <img src={image24} className="image24" alt="image24" />
                </div>
            </div>
            <div className="hero-text">
                <h1 className="hero-h1">Online Experiences</h1>
                <p className="hero-p">Join unique interactive activities led
                    by one-of-a-kind hosts-all without leaving
                    home.
                </p>
            </div>
        </>
    )
}