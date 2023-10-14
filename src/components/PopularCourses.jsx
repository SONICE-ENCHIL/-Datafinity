import React from 'react';
import { FaStar, FaDownload, FaAngleRight } from 'react-icons/fa';
import { BsCart, BsHeart, BsEyeFill } from 'react-icons/bs';
import card1 from '../public/card1.png'; 
import card2 from '../public/card2.png'; 
import card3 from '../public/card3.png'; 

function PopularCourses() {
  const cardData = [
    {
      imgSrc: card1,
      text: 'Training Courses',
      starRating: '4.8',
      description: "We focus on ergonomics and meeting you where you work.",
      sales: '15 Sales',
      price: '$16.48',
    },
    {
      imgSrc: card2,
      text: 'Another Course',
      starRating: '4.5',
      description: "Learn from top industry experts. It's your shortcut to success.",
      sales: '20 Sales',
      price: '$19.99',
    },
    {
      imgSrc: card3,
      text: 'Special Course',
      starRating: '4.9',
      description: "Unlock new opportunities with unlimited access to our library of courses.",
      sales: '10 Sales',
      price: '$14.99',
    },
  ];

  return (
    <div className="bg-blue-900 text-white p-4 font-semibold py-32 md:px-10 lg:px-20">
      <div className='sm:mx-10'>
        <h3 className="text-orange-500 text-center sm:text-left font-semibold">Practice Advice</h3>
        <h2 className="text-white text-2xl md:text-5xl font-bold mt-4 text-center sm:text-left">Our Popular Courses</h2>
        <p className="text-white mt-4 text-center sm:text-left max-w-md mb-20">
          Problems trying to resolve the conflict between the two major reals of Classical Physics: Newtonian mechanics
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row">
        {cardData.map((card, index) => (
          <div key={index} className="relative mx-0 sm:mx-5 md:mx-10 mb-10 shadow-md flex-1 bg-white">
            <div className="relative">
              <img src={card.imgSrc} alt={`Card${index + 1}`} className="h-[50%] w-full object-cover" />
              <div className="absolute top-0 left-0 bg-orange-500 px-3 py-1 m-5 rounded-sm text-[10px]">Sale</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center pb-3">
                <div className="text-gray-800 mx-1 bg-white rounded-full p-2">
                  <BsHeart />
                </div>
                <div className="text-gray-800 mx-1 bg-white rounded-full p-2">
                  <BsCart />
                </div>
                <div className="text-gray-800 mx-1 bg-white rounded-full p-2">
                  <BsEyeFill />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-3 mx-5">
              <p className="text-orange-500 mt-2 text-left sm:text-sm md:text-base lg:text-lg xl:text-xl">{card.text}</p>
              <div className="flex items-center justify-center">
                <div className="bg-blue-900 p-1 rounded-full flex items-center">
                  <FaStar className="text-yellow-500" />
                  <span className="text-white ml-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{card.starRating}</span>
                </div>
              </div>
            </div>
            <h3 className="text-black font-semibold mt-2 text-left text-lg md:text-lg lg:text-xl xl:text-2xl mx-5">Video in Live Action</h3>
            <p className="text-gray-500 mt-2 text-left font-light sm:text-sm lg:text-lg xl:text-xl mx-5">{card.description}</p>
            <div className="flex items-center mt-2">
              <div className="flex mx-5 mt-1 text-gray-500">
                <FaDownload className="mr-3" />
                {card.sales}
              </div>
            </div>
            <div className=" text-gray-500 mx-5 text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {card.price}
              <span className="text-blue-800 ml-2">$6.48</span>
            </div>
            <button className="border-[#FF6551] text-[#FF6551] border py-2 px-5 ml-5 mt-3 mb-7 rounded-full items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Learn More   <FaAngleRight className="ml-0 inline" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;
