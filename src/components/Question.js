import React from "react";

export default function Question() {
    return (
            <div className="question-section">
                <h2 className="question-h2">How would one say goodbye in Spanish?</h2>
                <div className="question-btn">
                    <button>Adios</button>
                    <button>Hola</button>
                    <button>Au Revoir</button>
                    <button>Salir</button>
                </div>
                <hr className="horizontal-line" />
            </div>
    )
}