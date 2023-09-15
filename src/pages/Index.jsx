import React from 'react'
import headshot from '../assets/Headshotcropped.png'
import { FileText, GitHub, Linkedin } from 'react-feather'
import Pdf from '../assets/resume.pdf'

const Index = () => {
  return (
    <div className='flex justify-center sm:mt-20 flex-col-reverse sm:flex-row'>
        <div className=' mt-10'>
            <h1 className='text-6xl '>Dominic Junik</h1>
            <h2 className='text-2xl italic'>Junior Software Engineer</h2>
            <div className='flex'>
                <a href="https://github.com/dominicjunik/" target="_blank" className='hover:text-blue-500 pr-2' title='GitHub'><GitHub/></a>
                <a href="https://www.linkedin.com/in/dominic-junik/" target="_blank" className='hover:text-blue-500 pr-2' title='LinkedIn'><Linkedin/></a>
                <a href={Pdf} target="_blank" className='hover:text-blue-500 pr-2 animate-bounce' title='Resume'><FileText/></a>
            </div>
            <p className='w-full sm:w-96'>Entry level software engineer with experience in full-stack JavaScript web development. Transitioning from a long-term involvement in competitive gaming, possesses a deep passion for coding and its combination of creativity and logical analysis to solve problems.</p>
        </div>
        <div className='max-w-96 sm:max-w-lg'>
            <img src={headshot} alt="face" className='object-contain'/>
        </div>
       
    </div>
  )
}

export default Index