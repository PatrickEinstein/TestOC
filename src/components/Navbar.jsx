import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import { BsSearch } from 'react-icons/bs'




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
    {/* Begin Navbar */}
        <nav className="bg-blue-500">
          <div className="max-w-7xl px-1 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="ml-0 top-0">
              <Link to='/'>
              <img src={Logo} alt="Logo" />
              </Link>
            </div>
           {/* SearchPage */}
            <div className=" flex items-center justify-center gap-4 bg-[#F1F3F8] rounded-full w-[433px]">

           <BsSearch className="ml-5" /> <input type="search" placeholder="Search" className="w-full rounded-full outline-none border-none p-1 bg-[#F1F3F8]" />
            </div>

                   {/* NavLink */}
            <div className="flex items-center justify-items-end gap-4 text-white font-semibold">
            <Link to='/'  className=" hover:text-[#FF006B] cursor-pointer">Home</Link>
            <Link to='/about' className=" hover:text-[#FF006B] cursor-pointer">About</Link>
            <Link to='/course' className=" hover:text-[#FF006B] cursor-pointer">Course</Link>
            <Link to='/blog' className=" hover:text-[#FF006B] cursor-pointer">Blog</Link>
            <Link to='/contact' className=" hover:text-[#FF006B] cursor-pointer">Contact Us</Link>
            </div>
            <div className="flex items-center w-fit gap-3">
              <Link to='/SignIn'>
              <button className="bg-[#FF006B] text-white p-1.5 rounded-lg ease-out 200ms">Sign In</button>
              </Link>
              <Link to='/SignUp'>
              <button className="bg-[#0F2F8C] text-white p-1.5 rounded-lg ease-out 200ms">Sign Up</button>
              </Link>
            </div>
          </div>
          </div>
        
        </nav>
        {/* End of Navbar */}


        </>
      );
    };
    
   
 
  export default Navbar;
