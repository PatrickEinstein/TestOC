import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from '../assets/hero_img.png'
import HeroImage2 from '../assets/AimImage1.png'
import SupportImage1 from '../assets/SupportImage1.png'
import SupportImage2 from '../assets/SupportImage2.png'
import SupportImage3 from '../assets/SupportImage3.png'
import AimImage2 from '../assets/AimImage2.png'
import AimImage3 from '../assets/AimImage3.png'
import Partner1 from '../assets/Partner1.png'
import Partner2 from '../assets/Partner2.png'
import Partner3 from '../assets/Partner3.png'
import EventPic1 from '../assets/EventPic1.png'
import EventPic2 from '../assets/EventPic2.png'
import EventPic3 from '../assets/EventPic3.png'
import ComingSoon1 from '../assets/ComingSoon1.png'
import ComingSoon2 from '../assets/ComingSoon2.png'
import Rectangle3703 from '../assets/Rectangle3703.png'


const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>

     {/* Begin of Hero */}
    
     <div data-aos="zoom-out" data-aos-duration="1000" className="flex justify-evenly items-center px-4 py-32">
     <div className="flex flex-col items-start pt-3 pb-3">
       <h1 className="text-[#0F2F8C] font-bold text-3xl mr-2 my-4">Empowering the future of Africa</h1>
     
       <p className="text-2xl text-[#000000]">Octave Incorporations is on a mission <br /> to advance digitalization in Nigeria <br /> and Africa at large.</p>
     
          <div className="w-fit flex items-center justify-start my-4">
          <button className="bg-[#0F2F8C] text-white text-center rounded-lg font-semibold px-4 py-2">
         Learn more
         </button>
       </div>
     </div>
     <div className="w-fit ml-0">
       <img src={HeroImage} alt="AimImage1" className="w-[700px] h-[480px] " />
     </div>
   </div>

   {/* Hero2Page */}
   <div data-aos="flip-left" data-aos-duration="1000" className="flex justify-evenly items-center mx-auto py-12">
     <div className="flex flex-col items-start h-auto">
     <div className=" outline outline-offset-1 outline-blue-500 p-14">
       <h2 className="font-bold text-[#0F2F8C]">Training and mentorship</h2>
       <p className="py-5 font-semibold text-[#333333]">With experienced tutors who wil not only <br /> teach you practically, but would also <br /> mentor you through</p>
     </div>
     </div>

     <div className="flex flex-col items-start h-auto">
     <div className="outline outline-offset-1 outline-pink-500 p-14">
       <h2 className="font-bold text-[#0F2F8C]">Training and mentorship</h2>
       <p className="py-5 font-semibold text-[#333333]">With experienced tutors who wil not only <br /> teach you practically, but would also <br /> mentor you through</p>
     </div>
     </div>
     <div className="flex flex-col items-start h-auto">
     <div className="outline outline-offset-1 outline-blue-500 p-14">
       <h2 className="font-bold text-[#0F2F8C]">Training and mentorship</h2>
       <p className="py-5 font-semibold text-[#333333]">With experienced tutors who wil not only <br /> teach you practically, but would also <br /> mentor you through</p>
     </div>
     </div>
     </div >

     {/* Hero3Page */}
      <section data-aos="fade-up" data-aos-duration="1000" className="bg-cover bg-center bg-[#0F2F8C] mx-auto">
     <div className="flex justify-evenly items-center px-4 py-32">
     <div className="flex flex-col items-start pt-3 pb-3">
       <h1 className="text-white font-bold text-3xl mr-2 my-4">Be an Octavian today</h1>
     
       <p className="text-white">Join a community of tech talents who are solving complex problems <br /> in Africa, thereby advancing digitalization and transforming lives.</p>
     
          <div className="w-fit flex items-center justify-start my-4">
          <button className="bg-[#FF006B] text-white text-center rounded-lg font-semibold px-4 py-2">
         Join Now
         </button>
       </div>
     </div>
     <div className="w-fit ml-0">
       <img src={ SupportImage1 } alt="AimImage1" />
     </div>
   </div>

   <div className="flex justify-evenly items-center px-4 py-32">
     <div className="flex flex-col items-start pt-3 pb-3">
       <h1 className="text-white font-bold text-3xl mr-2 my-4">Connect to limitless oppourtunities </h1>
     
       <p className="text-white">Octave talents help connect skilled tech professionals to top-paying <br /> jobs and lucrative clients, enabling them to reach their full potential <br /> and drive their careers forward.</p>
     
          <div className="w-fit flex items-center justify-start my-4">
          <button className="bg-[#FF006B] text-white text-center rounded-lg font-semibold px-4 py-2">
         Join Now
         </button>
       </div>
     </div>
     <div className="w-fit ml-0">
       <img src={ SupportImage2 } alt="AimImage1" />
     </div>
   </div>

   <div className="flex justify-evenly items-center px-4 py-32">
     <div className="flex flex-col items-start pt-3 pb-3">
       <h1 className="text-white font-bold text-3xl mr-2 my-4">Learn with the best experience</h1>
     
       <p className="text-white">Choose from our courses uniquely designed to help build value-adding <br /> skills and enroll for free virtual internships that will help you gain real <br /> work experience.
    ( Bootcamps, Self-paced course, Projects, Virtual Internships ).</p>
     
          <div className="w-fit flex items-center justify-start my-4">
          <button className="bg-[#FF006B] text-white text-center rounded-lg font-semibold px-4 py-2">
         Join Now
         </button>
       </div>
     </div>
     <div className="w-fit ml-0">
       <img src={ SupportImage3 } alt="AimImage1" />
     </div>
   </div>
   </section>

   {/* Hero4Page */}
     <div data-aos="zoom-out" data-aos-duration="1000" className='flex justify-evenly items-center mx-auto gap-4 py-16'>
      <div className='flex flex-col items-center justify-between'>
       <div className='w-fit'>
       <img src={HeroImage2} alt="" />
       </div>
       <div className='ml-5'>
       <h2 className='font-bold text-4xl py-4 text-center text-black'>Octave Digital University</h2>
       <p className='py-4 font-semibold text-black'>This is dedicated to empowering the next generation of tech <br /> entrepreneurs, providing them with skills and knowledge they <br /> need to succeed in the digital world.</p>
       </div>
      </div>
  

      <div className='flex flex-col justify-between items-center'>
       <div className='w-fit'>
       <img src={AimImage2} alt="" />
       </div>
       <div className='ml-3'>
       <h2 className='text-2xl text-black font-bold py-6 text-center'>Unleasing the tech <br />
        entrepreneurs of tomorrow
        </h2>
       <p className='text-black font-semibold py-1'>This is dedicated to empowering the next <br /> generation of tech <br /> entrepreneurs, providing <br /> them with skills and knowledge they <br /> need to <br /> succeed in the digital world.</p>
       </div>
      </div>
  

 
      <div className='flex flex-col justify-between items-center'>
       <div className='w-fit'>
       <img src={AimImage3} alt="" />
       </div>
       <div className='mr-5'>
       <h2 className='text-black font-bold py-4 text-center'>Scale your business with AI</h2>
       <p className='text-black font-semibold py-4'>Melody AI is an MLOps platform that will help you scale your <br /> business to new heights with AI-powered solutions.</p>
       </div>
      </div>
     </div>

     {/* Partners */}

     <div data-aos="slide-right" data-aos-duration="1000" className='text-center py-20'>
      <h1 className='text-black font-bold text-5xl'>Partners and Trusted by</h1>
     </div>

      <div className='flex items-center justify-evenly mx-auto gap-4'>
        <div className='flex flex-col items-start'>
          <img src={Partner1} alt="Omedena" />
          <h1 className='text-black text-3xl font-bold py-3'>Omedana</h1>
        </div>

        <div className='flex flex-col items-start'>
          <img src={Partner2} alt="Omedena" />
          <h1 className='text-black text-3xl font-bold py-3'>Metroeyes</h1>
        </div>

        <div className='flex flex-col items-start'>
          <img src={Partner3} alt="Omedena" />
          <h1 className='text-black text-3xl font-bold py-3'>Nitda Unilag</h1>
        </div>
      </div>

      {/* HeroPage5 */}

      <div className='text-center py-36'>
        <h1 className='text-black font-bold text-5xl'>Pictures from some of our Events</h1>
      </div>

      <div className='flex flex-wrap gap-8 justify-center items-center mx-auto'>
        <figure>
        <img src={EventPic1} alt="" />
        </figure>
        <figure>
        <img src={EventPic2} alt="" />
        </figure>
        <figure>
        <img src={EventPic3} alt="" />
        </figure>
      </div>

      {/* Programmes */}
      <div className='text-center py-36'>
        <h1 className='text-black font-bold text-5xl'>Our Programmes</h1>
      </div>

      <div className='flex justify-center '>
        <img src={Rectangle3703} alt="Rectangle3703" />
      </div>

      {/* ComingSoon */}

      <div data-aos="flip-right" data-aos-duration="1000" className='text-center py-20'>
      <h1 className='text-black font-bold text-5xl'>Coming Soon...</h1>
     </div>

      <div className='flex items-center justify-evenly mx-auto gap-4'>
        <div className='flex flex-col items-center'>
          <img src={ComingSoon1} alt="Octave Metaverse" />
          <h1 className='text-black text-3xl font-bold py-3'>Octa Metaverse</h1>
        </div>

        <div className='flex flex-col items-center'>
          <img src={ComingSoon2} alt="Octa Coin" />
          <h1 className='text-black text-2xl font-bold py-3'>Octa Coin</h1>
        </div>

      
      
      </div>

   </>
  
  )
}

export default Home
