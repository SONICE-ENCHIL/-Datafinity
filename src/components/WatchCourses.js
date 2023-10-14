import React from 'react';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';

function WatchCourses() {
  return (
    <div className="p-4 md:px-20 lg:px-40 my-10">
      <h3 className="text-orange-500 mt-10">Practice Advice</h3>
      <h2 className="text-black text-2xl md:text-4xl font-bold mt-4">Watch Our Courses</h2>
      <p className="text-gray-500 max-w-md mt-4">
        Problems trying to resolve the conflict between <br/>the two major reals of Classical Physics: Newtonian mechanics
      </p>
      
      {/* Cards */}
      <div className="flex flex-col md:flex-row sm:space-x-2 items-center space-y-5 md:justify-between mt-20">
        {/* Card 1 */}
        <div className="bg-white p-5 xs:p-3 md:p-10 space-y-3 sm:space-y-5 shadow-lg rounded-md max-w-xs flex flex-col items-center sm:items-start">
          <div className="bg-orange-500 p-6 rounded-full shadow">
            <FaHeart color="#fff" size={40}/>
          </div>
          <h3 className="text-black font-bold text-2xl mt-2">FREE</h3>
          <p className="text-gray-500  max-w-[200px]">Organize across all apps by hand.</p>
          <h3 className="text-orange-500 text-4xl font-bold mt-2">19$</h3>
          <p className="text-blue-300 font-semibold">Per Month</p>
          <p className="text-gray-500 max-w-[220px] mb-2 mt-2">
            Slate helps you see how many more days you need...
          </p>
          <button className="bg-orange-500 text-white font-semibold py-3 px-4 w-full rounded-md mt-4">
            Try for free
          </button>
          <ul className="text-black/60 font-semibold mt-4 space-y-4 text-left">
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-gray-400 mr-3 mt-1" size={25}/>
              1GB Cloud storage
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-gray-400 mr-3 mt-1" size={25}/>
              Email and community support
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white relative p-5 xs:p-7 md:p-10 space-y-3 sm:space-y-5 shadow-lg rounded-md max-w-xs flex flex-col items-center sm:items-start">
          <div className="bg-orange-500 p-6 rounded-full shadow">
            <FaHeart color="#fff" size={40}/>
          </div>
          <div className="bg-orange-400 flex absolute p-4 w-[90px] h-[90px] right-[-30px] sm:right-[-10px] md:right-[-20px] lg:right-[-45px] top-[-25px] sm:top-[-45px] rounded-full">
            <h3 className='text-white font-bold mx-auto my-auto text-lg'>New</h3>
          </div>
          <h3 className="text-black font-bold text-2xl mt-2">FREE</h3>
          <p className="text-gray-500  max-w-[200px]">Organize across all apps by hand.</p>
          <h3 className="text-orange-500 text-4xl font-bold mt-2">19$</h3>
          <p className="text-blue-300 font-semibold">Per Month</p>
          <p className="text-gray-500 max-w-[220px] mb-2 mt-2">
            Slate helps you see how many more days you need...
          </p>
          <button className="bg-orange-500 text-white font-semibold py-3 px-4 w-full rounded-md mt-4">
            Try for free
          </button>
          <ul className="text-black/60 font-semibold mt-4 space-y-4 text-left">
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-gray-400 mr-3 mt-1" size={25}/>
              1GB Cloud storage
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-gray-400 mr-3 mt-1" size={25}/>
              Email and community support
            </li>
          </ul>
        </div>


        {/* Card 3 */}
        <div className="bg-white p-5 xs:p-7 md:p-10 space-y-3 sm:space-y-5 shadow-lg rounded-md max-w-xs flex flex-col items-center sm:items-start">
          <div className="bg-orange-500 p-6 rounded-full shadow">
            <FaHeart color="#fff" size={40}/>
          </div>
          <h3 className="text-black font-bold text-2xl mt-2">FREE</h3>
          <p className="text-gray-500  max-w-[200px]">Organize across all apps by hand.</p>
          <h3 className="text-orange-500 text-4xl font-bold mt-2">19$</h3>
          <p className="text-blue-300 font-semibold">Per Month</p>
          <p className="text-gray-500 max-w-[220px] mb-2 mt-2">
            Slate helps you see how many more days you need...
          </p>
          <button className="bg-orange-500 text-white font-semibold py-3 px-4 w-full rounded-md mt-4">
            Try for free
          </button>
          <ul className="text-black/60 font-semibold mt-4 space-y-4 text-left">
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-green-400 mr-3 mt-1" size={25}/>
              Unlimited product updates.
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-gray-400 mr-3 mt-1" size={25}/>
              1GB Cloud storage
            </li>
            <li className="flex ">
              <FaCheckCircle className="text-gray-400 mr-3 mt-1" size={25}/>
              Email and community support
            </li>
          </ul>
        </div>
       
    
      </div>
    </div>
  );
}

export default WatchCourses;
