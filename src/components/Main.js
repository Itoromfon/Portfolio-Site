import React from 'react'
import {
 AiFillTwitterCircle, 
 AiFillLinkedin,
 AiFillFacebook,
 AiFillGithub,
 AiFillHtml5
} from "react-icons/ai"
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io"
import { SiTailwindcss } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import itoromfon from "../images/itoromfon.png"
import recipe from "../images/recipe.png"
import techfirm from "../images/techfirm.png"
import quizzical from "../images/quizzical.png"
import tenzies from "../images/tenzies.png"
import passwordgen from "../images/Password-Gen.png"
import memegen from "../images/meme-gen.png"


export default function Main() {
  return (
    <>
        <div className='text-center'>
            <h2 className='dark:text-teal-400 text-teal-600 text-3xl font-medium md:text-6xl'>Itoro Mfon Emmanuel</h2>
            <h3 className='dark:text-white text-2xl py-2 md:text-3xl'>Software Engineer / Frontend Developer</h3>
            <p className='dark:text-white text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto'>My main aim is to contribute to the growth and development 
                of any company/organization am working with and offer the best services to 
                the development of the organization.
            </p>
        </div>
        <div className='text-4xl flex justify-center gap-14 px-4 py-3 text-gray-600 md:text-6xl md:gap-10'> 
            <a href='https://twitter.com/praiztech' target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className='dark:text-white' />
            </a>
            <a href='https://m.facebook.com/praise.mfon.73?eav=AfbRlvWHn1qfEDaq26JlDXb2gHH6uk2oMrOGQvUM3NZ5fmR3oEZDb4B3k8EXDvUnaXQ&paipv=0' target="_blank" rel="noreferrer">
              <AiFillFacebook className='dark:text-white' />
            </a>
            <a href='https://www.linkedin.com/in/itoro-mfon-emmanuel-3867991aa/' target="_blank" rel="noreferrer">
              <AiFillLinkedin className='dark:text-white' />
            </a>
            <a href='https://github.com/Itoromfon?tab=repositories' target="_blank" rel="noreferrer">
              <AiFillGithub className='dark:text-white' />
            </a>
          </div>
          <div className="mx-auto rounded-full flex justify-center mt-10 w-80 h-80 md:h-96 md:w-96">
            <img src={itoromfon} alt="itoromfon" className="rounded-full mb-8 " />
          </div>
          <div className='text-center text-gray-600'>
            <h3 className='dark:text-white text-3xl font-medium'>Skills I offer</h3>
            <p className='dark:text-white text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto'>
                My name is Itoro Mfon Emmanuel and am Frontend Developer
                My Skills includes: React JS, Next JS, HTML, CSS, Javascript, Tailwind css, Typescript, Redux.
            </p>
            <div className='dark:text-white text-6xl flex px-4 pt-4 justify-center gap-14 text-gray-600'>
                <AiFillHtml5 className='' />
                <IoLogoCss3 />
                <IoLogoJavascript />
                <FaReact />
                <SiTailwindcss />
            </div>
          </div>
          <div className='text-center mt-10'>
            <h3 className='dark:text-white font-medium text-3xl'>Portfolio</h3>
            <p className='dark:text-white text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto'>My Portfolio includes projects that I have worked on which includes
                React JS project, Next JS project and also Javascript Project and
                I have build project using tailwind CSS. here are some of my Projects. 
                Please You can check it out:
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href='https://my-recipesapp.netlify.app' target="_blank" rel="noreferrer">
                <img src={recipe} alt="recipe" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
              <div className='m-5 text-center text-white'>
                <a className='dark:text-teal-500 text-gray-600 font-bold underline md:text-2xl' href='https://my-recipesapp.netlify.app' target="_blank" rel="noreferrer">https://my-recipesapp.netlify.app</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://technology-firm.netlify.app' target="_blank" rel="noreferrer">
                <img src={techfirm} alt="techfirm" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
              <div className='m-5 text-center text-white'>
                <a className='dark:text-teal-500 text-gray-600 font-bold underline md:text-2xl' href='https://technology-firm.netlify.app' target="_blank" rel="noreferrer">https://technology-firm.netlify.app</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://myquizzical-app.netlify.app' target="_blank" rel="noreferrer">
                <img src={quizzical} alt="quizzical" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
              <div className='m-5 text-center text-white'>
                <a className='dark:text-teal-500 text-gray-600 font-bold underline md:text-2xl' href='https://myquizzical-app.netlify.app' target="_blank" rel="noreferrer">https://myquizzical-app.netlify.app</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://my-tenziesgame.netlify.app' target="_blank" rel="noreferrer">
                <img src={tenzies} alt="tenzies" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
              <div className='m-5 text-center text-white'>
                <a className='dark:text-teal-500 text-gray-600 font-bold underline md:text-2xl' href='https://my-tenziesgame.netlify.app' target="_blank" rel="noreferrer">https://my-tenziesgame.netlify.app</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://itoromfon.github.io/Password-Generator/' target="_blank" rel="noreferrer">
                <img src={passwordgen} alt="passwordgen" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
              <div className='m-5 text-center text-white'>
                <a className='dark:text-teal-500 text-gray-600 font-bold underline md:text-2xl' href='https://itoromfon.github.io/Password-Generator/' target="_blank" rel="noreferrer">https://itoromfon.github.io/Password-Generator/</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://my-memegeneratorproject.netlify.app' target="_blank" rel="noreferrer">
                <img src={memegen} alt="memegen" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
              <div className='m-5 text-center text-white'>
                <a className='dark:text-teal-500 text-gray-600 font-bold underline md:text-2xl' href='https://my-memegeneratorproject.netlify.app' target="_blank" rel="noreferrer">https://my-memegeneratorproject.netlify.app</a>
              </div>
            </div>
          </div>
    </>
  )
}
