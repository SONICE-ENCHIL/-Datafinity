import React from 'react';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';

const cardData = [
  {
    type: 'FREE',
    price: '19$',
    features: [
      'Unlimited product updates.',
      'Unlimited product updates.',
      'Unlimited product updates.',
      '1GB Cloud storage',
      'Email and community support',
    ],
  },
  {
    type: 'PREMIUM',
    price: '49$',
    features: [
      'All features from FREE plan.',
      'Advanced analytics.',
      'Priority customer support.',
      '5GB Cloud storage',
      'Access to exclusive content.',
    ],
  },
  {
    type: 'ENTERPRISE',
    price: '99$',
    features: [
      'All features from PREMIUM plan.',
      'Dedicated account manager.',
      'Custom branding.',
      'Unlimited Cloud storage',
      '24/7 VIP support.',
    ],
  },
];

function Cards() {
  return (
    <div className="p-4 md:px-20 lg:px-40 my-10">
      <h3 className="text-orange-500 text-center sm:text-left font-semibold">Practice Advice</h3>
      <h2 className="text-black text-2xl md:text-4xl font-bold mt-4 text-center sm:text-left">Watch Our Courses</h2>
      <p className="text-gray-500 mt-4 text-center sm:text-left max-w-md">
        Problems trying to resolve the conflict between the two major reals of Classical Physics: Newtonian mechanics
      </p>

      {/* Cards */}
      <div className="flex flex-col  lg:flex-row sm:space-x-5 items-center space-y-0 md:justify-between mt-20">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white lg:p-5 xs:p-3 md:p-10 !px-10 py-10 my-10 shadow-lg rounded-md w-full min-h-[650px] flex flex-col items-center lg:items-start">
            <div className="bg-orange-500 p-6 rounded-full shadow">
              <FaHeart color="#fff" size={40} />
            </div>
            <h3 className="text-black font-bold text-2xl mt-2">{card.type}</h3>
            <p className="text-gray-500 max-w-[200px]">Organize across all apps by hand.</p>
            <h3 className="text-orange-500 text-4xl font-bold mt-2">{card.price}</h3>
            <p className="text-blue-300 font-semibold">Per Month</p>
            <ul className="text-black/60 font-semibold mt-4 space-y-4 text-left">
              {card.features.map((feature, i) => (
                <li key={i} className="flex ">
                  <FaCheckCircle className={i < 3 ? 'text-green-400 mr-3 mt-1' : 'text-gray-400 mr-3 mt-1'} size={25} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-orange-500 text-white font-semibold py-3 px-4 w-full rounded-md mt-4">
              Try for free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
