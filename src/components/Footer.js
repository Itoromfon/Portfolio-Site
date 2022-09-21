import React from "react"
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://mobile.twitter.com/praiztech" target="_blank" rel="noreferrer"><img src={twitter} className="twitter" alt="twitter" /></a>
            <a href="https://m.facebook.com/praise.mfon.73?eav=AfbRlvWHn1qfEDaq26JlDXb2gHH6uk2oMrOGQvUM3NZ5fmR3oEZDb4B3k8EXDvUnaXQ&paipv=0" target="_blank" rel="noreferrer"><img src={facebook} className="facebook" alt="facebook" /></a>
            <a href="https://www.instagram.com/praiztech/" target="_blank" rel="noreferrer"><img src={instagram} className="instagram" alt="instagram" /></a>
            <a href="https://github.com/Itoromfon?tab=repositories" target="_blank" rel="noreferrer"><img src={github} className="github" alt="github" /></a>
        </div>
    )
}