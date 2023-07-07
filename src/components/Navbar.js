import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs"

export default function Navbar(props) {
  return (
    <nav className='flex justify-between py-10 '>
        <h1 className='dark:text-white text-2xl font-MyFont md:text-3xl'>MyPortfolio</h1>
        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill
                   onClick={props.handleClick}
                   className='dark:text-white cursor-pointer text-2xl' 
                />
            </li>
            <li>
          <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1qPL0_URisnRUdP4HE60XimklYltyPYyY/view?usp=drive_link' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-lg px-4 py-2 rounded-lg ml-3 md:ml-8 cursor-pointer'>Resume</a>
            </li>
        </ul>
    </nav>
  )
}
































































































