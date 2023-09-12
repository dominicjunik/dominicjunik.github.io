import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Home, Menu } from "react-feather";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <nav className="w-screen bg-gradient-to-br from-slate-600/90 to-black/60 rounded-b-3xl text-2xl">
      <ul className="sm:flex flex-row items-center  justify-around p-1 hidden">
        <li>
          <Link to="/" className="hover:underline flex items-center group">
            <Home className="group-hover:text-white" />{" "}
            <div className="group-hover:text-white">Home</div>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:underline flex items-center group group-hover:text-white"
          >
            <Briefcase className="group-hover:text-white" />{" "}
            <div className="group-hover:text-white">Projects</div>
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
