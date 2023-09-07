import React from 'react'
import headshot from '../assets/Headshotcropped.png'
import { FileText, GitHub, Linkedin } from 'react-feather'
import Pdf from '../assets/resume.pdf'

const Index = () => {
  return (
    <div className='flex justify-center sm:mt-20'>
        <div className='text-green-100 mt-10'>
            <h1 className='text-6xl '>Dominic Junik</h1>
            <h2 className='text-2xl italic'>Junior Software Engineer</h2>
            <div className='flex'>
                <a href="https://github.com/dominicjunik/" className='hover:text-blue-500 pr-2'><GitHub/></a>
                <a href="https://www.linkedin.com/in/dominic-junik/" className='hover:text-blue-500 pr-2'><Linkedin/></a>
                <a href={Pdf} target="_blank" className='hover:text-blue-500 pr-2'><FileText/></a>
            </div>
        </div>
        <img src={headshot} alt="face" className='h-auto w-1/5'/>
           
        
       
        
    </div>
  )
}

export default Index