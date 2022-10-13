import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}

















































































































































































































// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
    
//     /**
//      * Challenge: Combine `count` with the request URL
//      * so pressing the "Get Next Character" button will
//      * get a new character from the Star Wars API.
//      * Remember: don't forget to consider the dependencies
//      * array!
//      */
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch(`https://swapi.dev/api/people/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }






















































































































































































































































































































































// import React from "react"

// export default function App() {
//     const [formData, setFormData] = React.useState(
//         {
//             email: "",
//             password: "",
//             confirmpassword: "",
//             okayToEmail: true
//         }
//     )
//    console.log(formData)

//     function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name] : type === "checkbox" ? checked : value
//             }
//         })
//     }

//     function handleSubmit(event) {
//         event.preventDefault()
//         // console.log(formData)
//         console.log(formData.password === formData.confirmpassword ? "Successfully signed up" : "Passwords does not match")
//         console.log(formData.okayToEmail && "Thanks for signing up to our news letter")
//     }

//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email address"
//                     className="form--input"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="form--input"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm password"
//                     className="form--input"
//                     name="confirmpassword"
//                     value={formData.confirmpassword}
//                     onChange={handleChange}
//                 />

//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"
//                         name="okayToEmail"
//                         onChange={handleChange}
//                         checked={formData.okayToEmail}
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
//             </form>
//         </div>
//     )
// }

















































