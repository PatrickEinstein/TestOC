import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

    
    const Footer = () => {
        return (
          <section className='pt-36'>
        <footer className="bg-[#A9A8A8] min-h-[50vh] bg-cover bg-center px-4 lg:px-16 pt-4">
          <div>
            <Link to="/">
              <img src={Logo} alt="Octave Incorporations"/>
            </Link>
          </div>
          <div className="flex justify-between px-16 my-8">
            <ul>
              <li className="text-[#111AE6] text-lg font-bold">Company</li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/careers" className='text-[#2B2929]'>Careers</Link>
              </li>
              <li>
                <Link to="/blog" className='text-[#2B2929]'>Blogs</Link>
              </li>
              <li>
                <Link to="/affiliate" className='text-[#2B2929]'>Affiliate</Link>
              </li>
            </ul>
            <ul>
              <li className="text-[#111AE6] text-lg font-bold">Community</li>
              <li>
                <Link to="" className='text-[#2B2929]'>Refer a Friend</Link>
              </li>
              <li>
                <Link to="" className='text-[#2B2929]'>Octa Metaverse</Link>
              </li>
              <li>
                <Link to="" className='text-[#2B2929]'>Octa coin</Link>
              </li>
              <li>
                <Link to="" className='text-[#2B2929]'>Scholarship</Link>
              </li>
              <li>
                <Link to="/courses" className='text-[#2B2929]'>Free Courses</Link>
              </li>
            </ul>
            <ul>
              <li className="text-[#111AE6] text-lg font-bold">Tutoring</li>
              <li>
                <Link to="/become" className='text-[#2B2929]'>Become a Tutor</Link>
              </li>
              <li>
                <Link to="/tutor" className='text-[#2B2929]'>Tutor handbook</Link>
              </li>
              <li>
                <Link to="/partner" className='text-[#2B2929]'>Partnerships</Link>
              </li>
            </ul>
            <ul>
              <li className="text-[#111AE6] text-lg font-bold">Support</li>
              <li>
                <Link to="/support" className='text-[#2B2929]'v>Support</Link>
              </li>
              <li>
                <Link to="/contact" className='text-[#2B2929]'>Contact Us</Link>
              </li>
              <li>
                <Link to="/site" className='text-[#2B2929]'>Site Feedback</Link>
              </li>
              <li>
                <Link to="/scholarship" className='text-[#2B2929]'>Scholarships</Link>
              </li>
              <li>
                <Link to="/free" className='text-[#2B2929]'>Free Courses</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-8 justify-center">
            <div className="mr-8 text-[#2B2929]">2023 OctaveInc. &copy; All Rights Reserved</div>
            <div className="flex gap-1 ml-8">
              <a href=""></a>
            </div>
          </div>
        </footer>
        </section>
  )
}

export default Footer
