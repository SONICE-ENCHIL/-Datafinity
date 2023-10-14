import React from 'react';
import ico1 from '../public/ico1.png';
import ico2 from '../public/ico2.png';
import ico3 from '../public/ico3.png';
import ico4 from '../public/ico4.png';
import ico5 from '../public/ico5.png';
import ico6 from '../public/ico6.png';

function Partners() {
  return (
    <div className="bg-white p-4 mt-16 mb-10 md:px-20 lg:px-40">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-8 sm:p-20 md:p-10 lg:gap-5 xl:gap-20 sm:gap-16 items-center sm:space-x-1 sm:space-y-2">
        <img src={ico1} alt="Icon 1" className="w-full h-auto object-contain" />
        <img src={ico2} alt="Icon 2" className="w-full h-auto object-contain" />
        <img src={ico3} alt="Icon 3" className="w-full h-auto object-contain" />
        <img src={ico4} alt="Icon 4" className="w-full h-auto object-contain" />
        <img src={ico5} alt="Icon 5" className="w-full h-auto object-contain" />
        <img src={ico6} alt="Icon 6" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
}

export default Partners;
