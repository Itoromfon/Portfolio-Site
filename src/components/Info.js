import React from "react"
import infoImage from "../images/itoro.jpg"
import email from "../images/email-icon.png"
import linkedin from "../images/linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <img src={infoImage} className="info-img" alt="info-img" /> 
            <h1 className="info-h1">Itoro Mfon Emmanuel</h1>
            <h3 className="info-h3">Frontend Developer</h3>
            <h5 className="info-h5">Itoromfon.website</h5>
            <div className="buttons">
                <a href="https://www.gmail.com" target="_blank" rel="noreferrer" className="info-email-btn">
                    <div className="info-image-text">
                        <img src={email} className="email-icon" alt="email-icon" />
                        <p className="info-text-email">Email</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/itoro-mfon-emmanuel-3867991aa/" target="_blank" rel="noreferrer" className="info-link-btn">
                    <div className="info-image-text">
                        <img src={linkedin} className="linkedin-icon" alt="linkedin-icon" />
                        <p className="info-text-linkedin">LinkedIn</p>
                    </div>
                </a>
            </div>
        </div>
    )
}


























































































