import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs"

export default function Navbar(props) {
  return (
    <nav className='flex justify-between py-10 '>
        <h1 className='dark:text-white text-3xl font-MyFont'>MyPortfolio</h1>
        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill
                   onClick={props.handleClick}
                   className='dark:text-white cursor-pointer text-2xl' 
                />
            </li>
            <li>
                <a href='https://itoromfon-portfolio.netlify.app/' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8 cursor-pointer'>Resume</a>
            </li>
        </ul>
    </nav>
  )
}