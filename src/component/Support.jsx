import React from "react";
import SupportImage from "../assets/support.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhone,
  faGlobe,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
const Support = () => {
  return (
    <>
      <div className="w-full h-screen "  id="support">
        <div className="w-full h-[700px] bg-gray-900/60 absolute z-[-1]">
          <img className="w-full h-full object-cover mix-blend-overlay" src={SupportImage} alt="" />
        </div>
        <div className="text-center md:pt-40 pt-5 text-white max-w-[1050px] mx-auto">
          <h3 className="text-white md:text-5xl text-3xl uppercase">Support</h3>
          <h2 className="md:text-7xl text-5xl font-bold my-5">Finding the right team</h2>
          <p className="md:font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis expedita quod nemo pariatur eaque fugit provident,
            cumque nam maiores nobis adipisci doloribus, ipsam reprehenderit
            magni corrupti nihil eius. Aperiam corporis vitae consequuntur
            consectetur fuga, consequatur ipsa odio quos voluptates tempore!
          </p>
        </div>
        <div className="md:flex justify-center items-center gap-8  max-w-[1000px] md:mt-10  mx-auto">
          <div className="bg-white shadow-2xl w-[80%] my-8 mx-auto rounded-2xl">
            <div className="p-4">
            <FontAwesomeIcon icon={faPhone} className='p-4 text-2xl bg-indigo-600 text-white rounded-2xl mt-[-35px]' />
            <h3 className="text-2xl my-5 font-bold">Sales</h3>
            <p className='text-[0.85rem] my-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatibus vitae consequuntur delectus commodi dicta provident
              reiciendis dolorem fugit voluptate! Suscipit, amet? Facilis,
              numquam enim?
            </p>
            </div>
            <div className="bg-zinc-200 p-2">
              <a href="#contact" className="text-indigo-600 font-bold">
                Contact Us <FontAwesomeIcon icon={faArrowRight} className='pl-2 hover:text-[1.2rem]' />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-2xl w-[80%] my-8 mx-auto  rounded-2xl">
            <div className="p-4">
            <FontAwesomeIcon icon={faGlobe} className='p-4 text-2xl bg-indigo-600 text-white rounded-2xl mt-[-35px]' />
            <h3 className="text-2xl my-5 font-bold">Technical Support</h3>
            <p className='text-[0.85rem] my-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatibus vitae consequuntur delectus commodi dicta provident
              reiciendis dolorem fugit voluptate! Suscipit, amet? Facilis,
              numquam enim?
            </p>
            </div>
            <div className="bg-zinc-200 p-2">
              <a href="#contact" className="text-indigo-600 font-bold">
                Contact Us <FontAwesomeIcon icon={faArrowRight} className='pl-2 hover:text-[1.2rem]' />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-2xl  w-[80%] my-8 mx-auto  rounded-2xl">
            <div className="p-4">
            <FontAwesomeIcon icon={faMicrochip} className='p-4 text-2xl bg-indigo-600 text-white rounded-2xl mt-[-35px]' />
            <h3 className="text-2xl my-5 font-bold">Media Inquiries</h3>
            <p className='text-[0.85rem] my-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatibus vitae consequuntur delectus commodi dicta provident
              reiciendis dolorem fugit voluptate! Suscipit, amet? Facilis,
              numquam enim?
            </p>
            </div>
            <div className="bg-zinc-200 p-2">
              <a href="#contact" className="text-indigo-600 font-bold">
                Contact Us <FontAwesomeIcon icon={faArrowRight} className='pl-2 hover:text-[1.2rem]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
