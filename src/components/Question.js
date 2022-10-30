import React, {useState, useEffect} from "react";
import { decode } from "html-entities"

export default function Question(props) {
    const [selectedId, setSelectedId] = useState();

    useEffect(() => {
        if (props.checkResult) {
            props.options.map((item) => {
                if(item.isHeld && item.correctAnswer) {
                    props.setScore(prevScore => prevScore+1)
                }
            })
        }
    },[props.checkResult])
    
    return (
            <div className="question-section">
                <h2 className="question-h2">{decode(props.question)}</h2>
                <div>
                {
                    !props.checkResult && <div className="question-btn">
                    {props.options.map(item => ( 
                            <button
                                key={item.id}
                                onClick={() => {
                                    setSelectedId(item.id)
                                }}
                                className={selectedId === item.id ? "choice" : "options"}
                            >
                                {selectedId === item.id ? item.isHeld = true : item.isHeld}
                                {selectedId !== item.id && item.isHeld ? item.isHeld = false : item.isHeld}
                                {item.value}
                            </button>
                        ))
                    }
                        </div>
                    }
                
                {props.checkResult && <div className="question-btn">
                    {props.options.map((item) => {
                        return <button 
                            style={item.correctAnswer ? 
                                {
                                    backgroundColor: "#94D7A2",
                                    color: "#293264",
                                    borderRadius: "7.94239px",
                                    marginRight: "12px",
                                    marginTop: "4px"
                                } : null}
                                key={item.id}
                                className={item.isHeld && !item.correctAnswer ? "wrong" : "options"}
                            >
                            {item.value}
                        </button>
                    })}
                </div>}
                </div>
                <hr className="horizontal-line" />
            </div>
    )
}