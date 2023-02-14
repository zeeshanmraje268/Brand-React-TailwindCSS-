import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
const Pricing = () => {
  return (
    <>
      <div className="bg-[#111624] my-10 w-full p-5" id="pricing">
        <div className="max-w-[1050px] pt-20 text-center mx-auto">
          <h2 className="text-zinc-400 text-3xl uppercase ">Pricing</h2>
          <h3 className="text-white my-5 font-bold text-4xl">
            The right price for your research.
          </h3>
          <p className="text-zinc-400 text-[1.2rem] font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            neque expedita blanditiis animi minima eligendi commodi, magnam
            eveniet excepturi omnis.
          </p>
          <div className="grid md:grid-cols-2 my-5 mt-14 text-left gap-10">
            <div className="bg-white rounded-2xl p-5">
             <div>
              <p className="bg-indigo-300 my-4 text-indigo-700 font-bold uppercase max-w-[20%] rounded-lg p-1 ">Standard</p>
              <h2 className="text-4xl font-bold">$49 <span className="text-[1rem]">/mo</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum.</p>
              <div className="my-5">
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
              </div>
              <button className="bg-[#111624] w-full text-white h-[55px] text-2xl">Get Started</button>
             </div>
            </div>
            <div className="bg-white rounded-2xl p-5">
             <div>
              <p className="bg-indigo-300 my-4 text-indigo-700 font-bold uppercase max-w-[22%] rounded-lg p-1 ">Enterprise</p>
              <h2 className="text-4xl font-bold">$89 <span className="text-[1rem]">/mo</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum.</p>
              <div className="my-5">
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="py-2"> <FontAwesomeIcon icon={faCheck} className='text-green-900 pr-5'/> Lorem ipsum dolor sit amet consectetur. </p>
              </div>
              <button className="bg-[#111624] w-full text-white h-[55px] text-2xl">Get Started</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
