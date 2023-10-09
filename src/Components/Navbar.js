import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoChevronDown } from 'react-icons/go'
import { BiSearchAlt2 } from 'react-icons/bi'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="max-w-screen overflow-x-hidden font-poppins ">
      <nav className="bg-[#12406F] fixed px-2   sm:h-[auto] sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400">
        {/* dektop nav */}
        <div className="max-w-screen-xl flex  items-center justify-between mx-auto sm:p-4 pb-2 sm:ml-10 md:ml-0">


          <h2 className="text-xl font-semibold text-white" >LOGO</h2>


          <div className="flex">
            <ul className="sm:flex  hidden ">

              <li className="p-2 mr-2 text-white hover:text-blue-400 cursor-pointer flex justify-center">
                <a to="/">Qualifications</a>
                <GoChevronDown className="w-8 h-4 text-center mt-[6px]" />
              </li>
              <li className="p-2 mr-2 text-white hover:text-blue-400 cursor-pointer flex justify-center">
                <a to="/">Organizations</a>
                <GoChevronDown className="w-8 h-4 text-center mt-[6px]" />
              </li>
              <li className="p-2 mr-2 text-white hover:text-blue-400 cursor-pointer flex justify-center">
                <a to="/">Research & Analysis</a>
                <GoChevronDown className="w-8 h-4 text-center mt-[6px]" />
              </li>
              <li className="p-2 mr-2 text-white hover:text-blue-400 cursor-pointer flex justify-center ">
                <a to="/">Lorem ipsum</a>
                <GoChevronDown className="w-8 h-4 text-center mt-[6px]" />
              </li>
              <li className="p-2 mr-2 text-white hover:text-blue-400 cursor-pointer flex justify-center ">
                <a to="/">Lorem ipsum
                </a>
                <GoChevronDown className="w-8 h-4 text-center mt-[6px]" />
              </li>

              <div className="flex items-center space-x-2">
                <BiSearchAlt2 className="h-6 w-6 text-white" />
                <div className="bg-white rounded">
                  <button className="text-[#12406F] py-2 px-3 md:px-2">Enrolment</button>
                </div>
              </div>
            </ul>
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-white/70" />
            </button>

          </div>
        </div>

        {/* desktop nav end */}
        <div className={`${open ? null : "hidden"} h-[23rem]`}>
          <ul>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 pt-6">
              <addEventListener to="/">Qualifications</addEventListener>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <addEventListener to="/about">Organizations</addEventListener>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <a to="/services">Research & Analysis</a>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <a to="/portfolio">Lorem ipsum</a>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <a to="/blog">Lorem ipsum</a>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <a to="/contact">Enrolment</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
