import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Copyright() {
  return (
    <div className="bg-gray-100 py-4 justify-start text-center">
      <div className='flex justify-between flex-col sm:flex-row mx-auto w-10/12 px-1'>
        <p className=" text-[#737373]/70 text-xs sm:text-sm font-semibold">
          Made With Love By Zaptek Intern, All Right Reserved
        </p>
        <div className="flex space-x-5 mx-auto sm:mx-0 mt-2">
          <FaFacebook size={20} className="text-orange-500" />
          <FaInstagram size={20} className="text-orange-500" />
          <FaTwitter size={20} className="text-orange-500" />
        </div>
      </div>
    </div>
  );
}

export default Copyright;
