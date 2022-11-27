import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  function handleClick() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    console.log("This is the darkmode version")
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='dark:bg-gray-900 min-h-screen px-20 pb-20'>
          <Navbar 
            handleClick={handleClick}
          />
          <Main />
      </div>
    </div>
  )
}
























































































































































































































// import React, {useEffect, useState} from "react";
// import StartQuiz from "./components/StartQuiz";
// import Question from "./components/Question";
// import {shuffle} from "lodash";
// import { nanoid } from "nanoid";

// export default function App() {
//     const [startquiz, setStartquiz] = useState(false)
//     const [quiz, setQuiz] = useState([])
//     const [checkResult, setCheckResult] = useState(false)
//     const [displayScore, setDisplayScore] = useState(false)
//     const [reset, setReset] = useState(false)
//     const [score, setScore] = useState(0)

//     useEffect(() => {
//         fetch("https://opentdb.com/api.php?amount=5&category=13&difficulty=medium&type=multiple")
//         .then(response => response.json())
//         .then(data => {
//             const apiQuiz = data.results
//             console.log(apiQuiz)
//             console.log(apiQuiz)
//             if (apiQuiz && apiQuiz.length > 0) {
//                 const formatedQuiz = apiQuiz.map((q) => {
//                     const arrayOfOptions = [q.correct_answer, ...q.incorrect_answers]
//                     const shuffledArray = shuffle(arrayOfOptions)
//                     const newOptions = shuffledArray.map((item) => {
//                         return {
//                             value: item,
//                             id: nanoid(),
//                             isHeld: false,
//                             correctAnswer: item === q.correct_answer ? true : false
//                         }
//                     })
//                     const question = {
//                         question: q.question,
//                         options: newOptions
//                     }
//                     return question
//                 })
//                 setQuiz(formatedQuiz)
//             }
//         });
//     }, [reset])

//     function startButton() {
//         setStartquiz(prevStartquiz => !prevStartquiz)
//     }

//     function checkAnswer() {
//         setCheckResult(true)
//         setDisplayScore(true)
//     }

//     function playAgain() {
//         setStartquiz(false)
//         setCheckResult(false)
//         setDisplayScore(false)
//         setReset(!reset)
//         setScore(0)
//     }

//     return (
//         <>
//             {!startquiz && <StartQuiz startButton={startButton} />}
//             {startquiz && quiz && quiz.length > 0 && quiz.map((q) => {
//                 return <Question 
//                     key={q.question} 
//                     question={q.question} 
//                     options={q.options}
//                     checkResult={checkResult}
//                     setScore={setScore}
//             />
//             })}
//         <div className="check-button">
//             {startquiz && !displayScore && <button className="check-btn" onClick={checkAnswer}>Check Answer</button>}
//             {displayScore && <div className="display--score">
//                 <h3 className="correct-answers">You scored {score}/5 correct answers</h3>
//                 <button onClick={playAgain} className="check-btn">Play Again</button>
//             </div>}
//         </div>         
//         </>
//     );
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


































