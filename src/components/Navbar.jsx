import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Home, Menu } from "react-feather";
import signature from '../assets/signature2.png'

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <nav className="w-screen bg-transparent border-b-2  shadow-2xl rounded-b-sm text-2xl font-mono">
      <ul className="sm:flex flex-row items-center  justify-around p-1 hidden">
        <li>
          <Link to="/" className="hover:underline flex items-center group">
            {/* <img src={signature}/> */}
            <Home className="group-hover:text-blue-500" />{" "}
            <div className="group-hover:text-blue-500">Home</div>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:underline flex items-center group group-hover:text-blue-500"
          >
            <Briefcase className="group-hover:text-blue-500" />{" "}
            <div className="group-hover:text-blue-500">Projects</div>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col items-end sm:hidden pr-2">
        <Menu onClick={() => setHamOpen((prevState) => !prevState)} />
        <li>
          <Link
            to="/"
            className={`${hamOpen ? `flex` : `hidden`} items-center `}
          >
            <Home /> <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`${hamOpen ? `flex` : `hidden`} items-center `}
          >
            <Briefcase /> <div>Projects</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
// className={`${hamOpen ? `flex` : `hidden`} items-center `}
