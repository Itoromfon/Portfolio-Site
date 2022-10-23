import React from "react";
import Question from "./Question";

export default function StartQuiz(props) {
    return (
        <div className="startquiz-container">
            <h1 className="startquiz-h1">Quizzical</h1>
            <p className="startquiz-p">Some description if needed</p>
            <button 
                className="startquiz-btn"
                onClick={() => props.startButton(<Question />)}
            >
                Start quiz
            </button>
        </div>
    )
}