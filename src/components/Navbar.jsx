import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id='navbar' className=" bg-transparent relative z-10 font-semibold p-4 sm:px-10 lg:px-40 md:px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold text-black">Brand Name</div>
          <div className="hidden md:flex sm:space-x-2 lg:space-x-5 sm:ml-8 lg:ml-32">
            <a href="#navbar" className="text-gray-700">Home</a>
            <a href="#navbar" className="text-gray-700">Product</a>
            <a href="#navbar" className="text-gray-700">Pricing</a>
            <a href="#navbar" className="text-gray-700">Contact</a>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          {isOpen ? (
            <FiX className="text-3xl text-black cursor-pointer" onClick={toggleNavbar} />
          ) : (
            <FiMenu className="text-3xl text-black cursor-pointer" onClick={toggleNavbar} />
          )}
        </div>

        <div className={`md:hidden absolute top-16 right-0 bg-white p-4 w-40 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-start space-y-6 pr-10">
            <a href="#navbar" className="text-gray-700">Home</a>
            <a href="#navbar" className="text-gray-700">Product</a>
            <a href="#navbar" className="text-gray-700">Pricing</a>
            <a href="#navbar" className="text-gray-700">Contact</a>
            <a href="#navbar" className="text-[#FF6551]">Login</a>
            <button className="bg-[#FF6551] text-white py-2 px-3 rounded-md flex items-center">
              <pre>JOIN US</pre>
              <AiOutlineArrowRight size={10} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#navbar" className="text-[#FF6551]">Login</a>
          <button className="bg-[#FF6551] text-white py-2 px-5 rounded-md flex items-center">
            JOIN US
            <AiOutlineArrowRight size={10} className="ml-2" />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
