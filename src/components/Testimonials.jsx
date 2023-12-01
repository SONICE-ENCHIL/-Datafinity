import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import profile1 from '../public/profile1.png';
import profile2 from '../public/profile2.png';
import profile3 from '../public/profile3.png';

function Testimonials() {
  return (
    <div className="p-4 md:px-20 lg:px-40">
      <h3 className="text-orange-500 text-center sm:text-left font-semibold">Client Testimonials</h3>
      <h2 className="text-black text-2xl md:text-4xl font-bold mt-4 text-center sm:text-left">What Clients Say.</h2>
      <p className="text-gray-500 mt-4 text-center sm:text-left max-w-md">
        Problems trying to resolve the conflict between the two major reals of Classical Physics: Newtonian mechanics
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row sm:space-x-2 items-center space-y-5 md:justify-between mt-20">
        {/* Card 1 */}
        <div className="bg-transparent p-6 shadow-lg gap-y-5 max-w-[250px] rounded-lg flex flex-col items-center lg:w-1/3">
          <div className="flex gap-1">
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiOutlineStar size={20} className="text-yellow-500" />
          </div>
          <p className="text-gray-500 text-center">
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
          </p>
          <div className="flex mt-4">
            <div className="flex items-center">
              <img src={profile1} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="ml-3">
                <p className="text-orange-500 font-semibold">Regina Miles</p>
                <p className="text-black font-normal text-xs">Designer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-transparent p-6 shadow-lg gap-y-5 max-w-[250px] rounded-lg flex flex-col items-center lg:w-1/3">
          <div className="flex gap-1">
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiOutlineStar size={20} className="text-yellow-500" />
          </div>
          <p className="text-gray-500 text-center">
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
          </p>
          <div className="flex mt-4">
            <div className="flex items-center">
              <img src={profile2} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="ml-3">
                <p className="text-orange-500 font-semibold">Regina Miles</p>
                <p className="text-black font-normal text-xs">Designer</p>
              </div>
            </div>
          </div>
        </div>

        
        {/* Card 3 */}
        <div className="bg-transparent p-6 shadow-lg gap-y-5 max-w-[250px] rounded-lg flex flex-col items-center lg:w-1/3">
          <div className="flex gap-1">
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiFillStar size={20} className="text-yellow-500" />
            <AiOutlineStar size={20} className="text-yellow-500" />
          </div>
          <p className="text-gray-500 text-center">
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
          </p>
          <div className="flex mt-4">
            <div className="flex items-center">
              <img src={profile3} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="ml-3">
                <p className="text-orange-500 font-semibold">Regina Miles</p>
                <p className="text-black font-normal text-xs">Designer</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Testimonials;
