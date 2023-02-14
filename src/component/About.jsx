import React from "react";

const About = () => {
  return (
    <>
      <div className="md:flex md:justify-center py-16 px-2 max-w-[1050px] mx-auto text-center md:items-center flex-col" id="about">
        <h2 className="md:text-5xl text-3xl font-bold">
          Trusted by developers across the world
        </h2>
        <p className="text-gray-400 text-[1.2rem] my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae
          iusto est culpa quia facilis quasi tempora, nulla praesentium
          repellat?
        </p>
        <div className="md:flex justify-center  items-center gap-7 my-10 ">
          <div className="md:px-[95px] w-[80%] m-auto  my-4 md:my-0  py-6  shadow-2xl rounded-lg">
            <h3 className="text-indigo-500 text-6xl font-bold">100%</h3>
            <p>Completion</p>
          </div>
          <div className="md:px-[95px] w-[80%] m-auto my-4 md:my-0 py-6  shadow-2xl rounded-lg">
            <h3 className="text-indigo-500 text-6xl font-bold">24/7</h3>
            <p>Delivery</p>
          </div>
          <div className="md:px-[95px] w-[80%] m-auto my-4 md:my-0 py-6  shadow-2xl rounded-lg">
            <h3 className="text-indigo-500 text-6xl font-bold">100K</h3>
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
