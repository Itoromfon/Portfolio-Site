import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs"

export default function Navbar(props) {
  return (
    <nav className='flex justify-between py-10 mb-10'>
        <a 
         className='dark:text-white text-rose-500 text-2xl font-bold font-MyFont md:text-3xl'
        href='https://itoromfon-portfolio.vercel.app/'
        >
          MyPortfolio
        </a>
        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill
                   onClick={props.handleClick}
                  className='dark:text-white cursor-pointer text-2xl' 
                />
            </li>
            <li>
          <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1Z1CGTfXwYloJsoPFrC0pzaVm7CWzieqN/view?usp=sharing' className='dark:bg-teal-500 bg-rose-400 hover:bg-teal-600 text-white font-bold text-lg px-4 py-2 rounded-lg ml-3 md:ml-8 cursor-pointer'>Resume</a>
            </li>
        </ul>
    </nav>
  )
}
































































































