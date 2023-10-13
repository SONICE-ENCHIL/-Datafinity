import React from 'react';
import girlImage from '../public/girl.png';

function About() {
  return (
    <div className="flex flex-col md:flex-row mt-[-70px] items-center bg-white p-4 md:px-20 lg:px-40">
      {/* Left Column */}
      <div className="md:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16">
        <img src={girlImage} alt="Girl" className="w-full h-auto object-cover mb-6" />
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 lg:w-1/3 p-3 pr-5 sm:p-10 md:p-0 ml-8 md:ml-32">
        <div className="bg-[#FF6551] h-2 w-16 md:w-32 mb-4"></div>
        <h2 className="text-black mb-4 font-bold sm:font-semibold text-3xl md:text-5xl">
          Get Quality<br /> Education
        </h2>
        <p className="text-gray-500 mb-6">
          Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics.
        </p>
        <a href="#navbar" className="text-[#FF6551] flex items-center text-lg">
          Learn More
          <span className="ml-2">&#8250;</span>
        </a>
      </div>
    </div>
  );
}

export default About;
