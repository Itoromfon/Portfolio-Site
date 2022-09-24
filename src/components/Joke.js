import React from "react"

export default function Joke(props) {
    console.log(props.isPun)
    return (
        <div>
                {props.Setup && <h3>Setup: {props.Setup}</h3>}
                <p>Punchline: {props.Punchline}</p>
                <hr />
        </div>
    )
}