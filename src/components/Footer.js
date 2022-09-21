import React from "react"
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter} className="twitter" alt="twitter" />
            <img src={facebook} className="facebook" alt="facebook" />
            <img src={instagram} className="instagram" alt="instagram" />
            <img src={github} className="github" alt="github" />
        </div>
    )
}