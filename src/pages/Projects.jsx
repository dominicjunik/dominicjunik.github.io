import React from 'react'
import mod1 from '../assets/mod1.jpg'
import mod2 from '../assets/mod2.jpg'
import mod3 from '../assets/mod3.jpg'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:mt-20 min-h-full min-w-full text-green-100'>
        
            <h1 className='text-6xl'>Projects</h1>
            <h2 className='mb-2 sm:mb-10 text-xl'>Titles for Repo, Images for Live</h2>
            <div className='flex flex-col w-2/3 p-2 sm:flex-row '>
                <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                   <a href='https://github.com/dominicjunik/mod1-project' className='text-2xl hover:text-blue-400'>Memory Game</a><a href="https://dominicjunik.github.io/mod1-project/"><img src={mod1} alt="memory game" className='rounded-3xl w-48 border-2 border-transparent hover:border-blue-400'/></a> 
                </div>
                <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                   <a href='https://github.com/dominicjunik/mod2-project' className='text-2xl hover:text-blue-400'>React D&D API</a><a href="https://magnificent-zuccutto-9e11d8.netlify.app/"><img src={mod2} alt="DND API" className='rounded-3xl w-48 border-2 border-transparent hover:border-blue-400'/></a> 
                </div>
                <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                   <a href='https://github.com/dominicjunik/mod3-project' className='text-2xl hover:text-blue-400'>Trick or Tweet</a><a href="https://trick-or-tweet-frontend.onrender.com/posts"><img src={mod3} alt="Trick or Tweet" className='rounded-3xl w-72 border-2 border-transparent hover:border-blue-400'/></a> 
                </div>
            </div>
           
           
            
       
    </div>
  )
}

export default Projects