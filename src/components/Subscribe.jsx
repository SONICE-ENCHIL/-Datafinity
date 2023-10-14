import React from 'react';

function Subscribe() {
  return (
    <div className="p-4 md:px-20 my-20 lg:px-40 text-center">
      <h3 className="text-orange-500 text-center font-semibold">Newsletter</h3>
      <h2 className="text-black text-xl md:text-3xl font-bold mt-4 text-center">Most Popular Courses</h2>
      <p className="text-gray-500 mt-4 mx-auto max-w-md">
        Problems trying to resolve the conflict between the two major reals of Classical Physics: Newtonian mechanics
      </p>

      {/* Email Input and Subscribe Button */}
      <div className="mt-16 flex max-w-4xl justify-center mx-auto items-center">
        <input
          type="email"
          className="border border-gray-300 w-8/12 rounded-l-sm py-3 px-4 focus:outline-none"
          placeholder="Your Email"
        />
        <button className="bg-orange-500 text-white py-3 px-4 rounded-r-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
