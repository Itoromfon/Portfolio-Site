import React, {useEffect, useState} from "react";
import StartQuiz from "./components/StartQuiz";
import Question from "./components/Question";
import {shuffle} from "lodash";
import { nanoid } from "nanoid";

export default function App() {
    const [startquiz, setStartquiz] = useState(false)
    const [quiz, setQuiz] = useState([])
    const [checkResult, setCheckResult] = useState(false)
    const [displayScore, setDisplayScore] = useState(false)
    const [reset, setReset] = useState(false)
    const [score, setScore] = useState(0)

    // useEffect(() => {
    //     async function getQuestions() {
    //         const res = await fetch("https://opentdb.com/api.php?amount=5&category=13&difficulty=medium&type=multiple")
    //         const data = await res.json()
    //         setQuiz(data.results)
    //     }
    //     getQuestions()
    // }, [])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=13&difficulty=medium&type=multiple")
        .then(response => response.json())
        .then(data => {
            const apiQuiz = data.results
            console.log(apiQuiz)
            if (apiQuiz && apiQuiz.length > 0) {
                const formatedQuiz = apiQuiz.map((q) => {
                    const arrayOfOptions = [q.correct_answer, ...q.incorrect_answers]
                    const shuffledArray = shuffle(arrayOfOptions)
                    const newOptions = shuffledArray.map((item) => {
                        return {
                            value: item,
                            id: nanoid(),
                            isHeld: false,
                            correctAnswer: item === q.correct_answer ? true : false
                        }
                    })
                    const question = {
                        question: q.question,
                        options: newOptions
                    }
                    return question
                })
                setQuiz(formatedQuiz)
            }
        });
    }, [reset])

    function startButton() {
        setStartquiz(prevStartquiz => !prevStartquiz)
    }

    function checkAnswer() {
        setCheckResult(true)
        setDisplayScore(true)
    }

    function playAgain() {
        setStartquiz(false)
        setCheckResult(false)
        setDisplayScore(false)
        setReset(!reset)
        setScore(0)
    }

    // const quizElements = quiz.map((q) => {
    //     return <Question 
    //                 key={q.question} 
    //                 question={q.question} 
    //                 options={q.options}
    //                 checkResult={checkResult}
    //                 setScore={setScore}
    //             />
    // })

    return (
        <>
            {!startquiz && <StartQuiz startButton={startButton} />}
            {startquiz && quiz && quiz.length > 0 && quiz.map((q) => {
                return <Question 
                    key={q.question} 
                    question={q.question} 
                    options={q.options}
                    checkResult={checkResult}
                    setScore={setScore}
            />
            })}
        <div className="check-button">
            {startquiz && !displayScore && <button className="check-btn" onClick={checkAnswer}>Check Answer</button>}
            {displayScore && <div className="display--score">
                <h3 className="correct-answers">You scored {score}/5 correct answers</h3>
                <button onClick={playAgain} className="check-btn">Play Again</button>
            </div>}
        </div>         
        </>
    );
}


































































































































// {/* {
//             !startquiz ?
//             <StartQuiz startButton={startButton} />
//             :
//             <>
//                 <div className="question">
//                     {quizElements}
//                 </div>
//                 <div className="check-button">
//                     {
//                         !startquiz ? 
//                         <div className="restart-quiz">
//                             <h2>You scored 3/5 correct answers</h2>
//                             <button className="check-btn">Restart quiz</button>
//                         </div> 
//                         :
//                         <button className="check-btn">
//                             Check answers
//                         </button>   
//                     }
//                 </div>
//             </>
//             } */}


























































































































































































































// import React, {useState, useEffect} from "react"
// // import useWindowSize from "react-use-window-size"
// import Die from "./components/Die"
// import {nanoid} from "nanoid"
// import Confetti from "react-confetti"

// export default function App() {
//     const [dice, setDice] = useState(allNewDice())
//     console.log(dice)
//     const [tenzies, setTenzies] = useState(false)
//     // const { width, height } = useWindowSize()

//     useEffect(() => {
//         const allHeld = dice.every(diceItem => diceItem.isHeld)
//         const firstValue = dice[0].value
//         const allSameValue = dice.every(diceItem => diceItem.value === firstValue)
//         if (allHeld && allSameValue) {
//             setTenzies(true)
//             console.log("You won")
//         }
//     }, [dice])

//     function generateNewDie() {
//         return {
//             value: Math.ceil(Math.random() * 6),
//             isHeld: false,
//             id: nanoid()
//         }
//     }

//     function allNewDice() {
//         const numArray = []
//         for (let i = 0; i < 10; i++) {
//             numArray.push(generateNewDie())
//         }
//         return numArray
//     }

//     function holdDice(id) {
//         // console.log(id)
//         setDice(prevDice => prevDice.map(diceItem => {
//             return diceItem.id === id ?
//                 {...diceItem, isHeld: !diceItem.isHeld} :
//                 diceItem
//         }))
//     }

//     function rollDiceButton() {
//         if (!tenzies) {
//             setDice(prevDice => prevDice.map(diceItem => {
//                 return diceItem.isHeld ?
//                     diceItem :
//                     generateNewDie()
//             }))
//         } else {
//             setTenzies(false)
//             setDice(allNewDice())
//         }
//     }

//     const diceElements = dice.map(diceItem =>  (
//         <Die
//             key={diceItem.id}
//             value={diceItem.value}
//             isHeld={diceItem.isHeld}
//             holdDice={() => holdDice(diceItem.id)}
//         />
//         )
//     )

//     return (
//         <main>
//             {tenzies && <Confetti className="confetti" />}
//             <h1 className="title">Tenzies</h1>
//             <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
//             <div className="dice-container">
//                 {diceElements}
//             </div>
//             <button className="roll-dice" onClick={rollDiceButton}>{tenzies ? "New Game" : "Roll"}</button>
//         </main>
//     )
// }






















































































































































































































// import React, {useState, useEffect} from "react"
// import Sidebar from "./components/Sidebar"
// import Editor from "./components/Editor"
// import { data } from "./data"
// import Split from "react-split"
// import {nanoid} from "nanoid"

// export default function App() {
//     const [notes, setNotes] = useState(
//        () => JSON.parse(localStorage.getItem("notes")) || []
//     )
//     const [currentNoteId, setCurrentNoteId] = React.useState(
//         (notes[0] && notes[0].id) || ""
//     )

//     useEffect(() => {
//         localStorage.setItem("notes", JSON.stringify(notes))
//     }, [notes])

//     function createNewNote() {
//         const newNote = {
//             id: nanoid(),
//             body: "# Type your markdown note's title here"
//         }
//         setNotes(prevNotes => [newNote, ...prevNotes])
//         setCurrentNoteId(newNote.id)
//     }

//     function updateNote(text) {
//         setNotes(oldNotes => {
//             const newArray = []
//             for(let i = 0; i < oldNotes.length; i++) {
//                 const oldNote = oldNotes[i]
//                 if(oldNote.id === currentNoteId) {
//                     newArray.unshift({ ...oldNote, body:text})
//                 } else {
//                     newArray.push(oldNote)
//                 }
//             }
//             return newArray
//         })
//     }

//     function deleteNote(event, noteId) {
//         event.stopPropagation()
//         console.log("Delete Note", noteId)
//         setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
//     }

//     function findCurrentNote() {
//         return notes.find(note => {
//             return note.id === currentNoteId
//         }) || notes[0]
//     }

//     return (
//         <main>
//         {
//             notes.length > 0
//             ?
//             <Split
//                 sizes={[30, 70]}
//                 direction="horizontal"
//                 className="split"
//             >
//                 <Sidebar
//                     notes={notes}
//                     currentNote={findCurrentNote()}
//                     setCurrentNoteId={setCurrentNoteId}
//                     newNote={createNewNote}
//                     deleteNote={deleteNote}
//                 />
//                 {
//                     currentNoteId &&
//                     notes.length > 0 &&
//                     <Editor
//                         currentNote={findCurrentNote()}
//                         updateNote={updateNote}
//                     />
//                 }
//             </Split>
//             :
//             <div className="no-notes">
//                 <h1>You have no notes</h1>
//                 <button
//                     className="first-note"
//                     onClick={createNewNote}
//                 >
//                     Create one now
//                 </button>
//             </div>

//         }
//         </main>
//     )
// }


































