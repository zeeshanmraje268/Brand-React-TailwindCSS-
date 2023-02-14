import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX,faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [nav,setNav]=useState(false);
  const handleNav=()=>{
    setNav(!nav);
  }
  return (
    <>
        <div className="bg-zinc-300 fixed h-[75px] z-[5] w-full drop-shadow-lg" >
          <div className="flex px-4 justify-between items-center h-full max-w-[1250px] mx-auto ">
            <div className='flex items-center '>
              <a href="#home"><h2 className='md:text-4xl text-2xl font-bold mr-4 '>BRAND.</h2></a>
              <ul className='md:flex hidden'>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#support"><li>Support</li></a>
                <a href="#platform"><li>Platform</li></a>
                <a href="#pricing"><li>Pricing</li></a>
              </ul>
            </div>
            <div className='md:flex hidden'>
              <button className='btn1' ><a href="#footer">Sign In</a></button>
              <button className='btn2' ><a href="#footer">Sign Up</a></button>
            </div>
            <div onClick={handleNav} className='md:hidden text-[1.2rem]'>
              {!nav ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faX} /> }
            </div>
          </div>
          <div className={!nav ? 'hidden' : "absolute bg-zinc-300 w-full h-screen z-1 p-3" } onClick={()=>{setNav(false)}}>
          <ul className='md:hidden text-center'>
                <a href="#home"><li className='text-4xl py-5'>Home</li></a>
                <a href="#hero"><li className='text-4xl py-5'>About</li></a>
                <a href="#support"><li className='text-4xl py-5'>Support</li></a>
                <a href="#platform"><li className='text-4xl py-5'>Platform</li></a>
                <a href="#pricing"><li className='text-4xl py-5'>Pricing</li></a>
                <button className='btn1 w-full border-2 border-indigo-300'>Sign In</button>
                <button className='btn2 w-full mx-0 my-2'>Sign Up</button>
              </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar