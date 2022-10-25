import React from "react";

export default function Question(props) {
    return (
            <div className="question-section">
                <h2 className="question-h2">{props.question}</h2>
                <div className="question-btn">
                    <button onClick={props.questionsButton}></button>
                    <button onClick={props.questionsButton}></button>
                    <button onClick={props.questionsButton}></button>
                    <button onClick={props.questionsButton}></button>
                </div>
                <hr className="horizontal-line" />
            </div>
    )
}