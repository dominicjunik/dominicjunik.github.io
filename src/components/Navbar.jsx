import React from 'react'
import { Link } from "react-router-dom";
import { Briefcase, Home } from 'react-feather';


const Navbar = () => {
  return (
    <nav className='w-screen bg-gradient-to-br from-slate-600/90 to-black/60 rounded-b-3xl text-2xl'>
        <ul className="flex flex-row items-center  justify-around p-1">
            <li>
            <Link to="/" className="hover:underline flex items-center group">
            <Home className='group-hover:text-white'/> <div className='group-hover:text-white'>Home</div>
          </Link>
            </li>
            <li>
            <Link to="/projects" className="hover:underline flex items-center group group-hover:text-white">
            <Briefcase className='group-hover:text-white'/> <div className='group-hover:text-white'>Projects</div>
          </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar