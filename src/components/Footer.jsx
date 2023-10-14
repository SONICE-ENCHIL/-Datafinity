import React from 'react';
import { BsTelephone } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'

function Footer() {
  return (
    <div className="text-white py-10 px-6 md:px-10 w-full sm:w-11/12 mx-auto lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 sm:gap-6 md:gap-14">
        <div>
          <h3 className="text-[#252B42] font-bold mb-4">Company Info</h3>
          <ul className=" text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#252B42] font-bold mb-4">Legal</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>About</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#252B42] font-bold mb-4">Features</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#252B42] font-bold mb-4">Resources</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div className=' col-span-2 md:col-span-1'>
          <h3 className="text-[#252B42] font-bold mb-4">Get In Touch</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li className="flex items-center">
              <BsTelephone size={20} className="text-orange-600 mr-4" />
              (480) 555-0103
            </li>
            <li className="flex items-center">
              <FiMapPin size={40} className="text-orange-600 mr-4" />
              4517 Washington Ave. Manchester, Kentucky 39495
            </li>
            <li className="flex items-center">
              <IoIosMail size={30} className="text-orange-600 mr-4" />
              debra.hold@example.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
