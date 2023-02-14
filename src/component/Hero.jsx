import React from "react";
import cyber from "../assets/cyber-bg.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudArrowUp,faDatabase,faServer,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  return (
    <>
      <div className=" bg-zinc-200 w-full h-screen flex flex-col   justify-between" id="home">
        <div className="grid md:grid-cols-2  max-w-[1050px]  m-auto items-center">
          <div className="md:text-left mt-2 text-center ">
            <h2 className="text-xl font-bold">
              Unique Sequencing & Production
            </h2>
            <h1 className="text-3xl md:text-5xl  font-bold my-2">Cloud Management</h1>
            <h3 className="text-2xl capitalize font-bold my-2">
              This is our Tech Brand
            </h3>
            <button className="btn2 md:mx-0 ">Get Started</button>
          </div>
          <div>
            <img src={cyber} alt="" />
          </div>
         
        </div>
          <div className=" bg-zinc-300 md:py-8 md:mt-[-180px] z-[0] md:mb-5 w-[80%] mt-[-105px] drop-shadow-lg  md:w-[750px] text-center rounded-lg mx-auto">
            <h1 className="text-2xl font-bold my-2">Data Services</h1>
            <ul className="md:flex md:justify-center gap-5">
              <h3 className="text-[1.2rem]"> <FontAwesomeIcon icon={faCloudArrowUp} className='text-indigo-800' /> App Security</h3>
              <h3 className="text-[1.2rem]"> <FontAwesomeIcon icon={faServer} className='text-indigo-800' /> Dashboard Design</h3>
              <h3 className="text-[1.2rem]"> <FontAwesomeIcon icon={faDatabase} className='text-indigo-800'  /> Cloud Data</h3>
              <h3 className="text-[1.2rem]"> <FontAwesomeIcon icon={faPaperPlane} className='text-indigo-800' />   API</h3>
            </ul>
          </div> 
      </div>
       
    </>
  );
};

export default Hero;
