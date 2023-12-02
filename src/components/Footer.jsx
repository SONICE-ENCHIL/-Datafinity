import React from 'react';
import { BsTelephone } from 'react-icons/bs'

function Footer() {
  return (
    <div className="text-white py-10 px-6 md:px-10 w-full sm:w-11/12 mx-auto lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 sm:gap-6 md:gap-14">
        <div>
          <h3 className="text-[#252B42] font-bold mb-2">Company Info</h3>
          <ul className=" text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#252B42] font-bold mb-2">Packages</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>Unlimited Data</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#252B42] font-bold mb-2">Features</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#252B42] font-bold mb-2">Support</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <li>IOS & Android</li>
          </ul>
        </div>
        <div className=' col-span-2 md:col-span-1'>
          <h3 className="text-[#252B42] font-bold mb-2">Get In Touch</h3>
          <ul className="text-[#737373] space-y-1 sm:space-y-3 font-semibold">
            <a href="tel:+233556391636" className="flex items-center">
              <BsTelephone size={20} className="text-orange-600 mr-4" />
              (+233)556 391 636
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
