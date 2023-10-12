import React from "react";
import redIcon from "../public/redIcon.png";
import blueIcon from "../public/blueIcon.png";
import yellowIcon from "../public/yellowIcon.png";

function HeroFeatures() {
	return (
		<div className="relative bottom-20 sm:bottom-44 md:bottom-60 z-30 p-4 md:px-30 lg:px-40">
			<div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8">
				{/* Card 1 */}
				<div className="flex flex-col items-center md:items-start mb-6 lg:mb-0  shadow-xl p-10">
					<img src={redIcon} alt="Red Icon" className="w-16 h-16 mb-2 sm:mb-5 mt-10" />
					<h3 className="font-bold text-black mb-5">Expert Instruction</h3>
					<div className="h-1 w-10 bg-[#FF6551] mb-5"></div>
					<p className="text-gray-500 text-center md:text-start">
						The gradual accumulation of information about atomic and small-scale
						behavior.
					</p>
				</div>

				{/* Card 2 */}
				<div className="flex bg-white flex-col items-center md:items-start mb-6 lg:mb-0  shadow-xl p-10">
					<img src={blueIcon} alt="Blue Icon" className="w-16 h-16 mb-2 sm:mb-5 mt-10" />
					<h3 className="font-bold text-black mb-5">Training Courses</h3>
					<div className="h-1 w-10 bg-[#FF6551] mb-5"></div>
					<p className="text-gray-500 text-center md:text-start">
						Enhance your skills with our wide range of training courses. From
						programming ...
					</p>
				</div>

				{/* Card 3 */}
				<div className="flex bg-white flex-col items-center md:items-start shadow-xl p-10">
					<img src={yellowIcon} alt="Yellow Icon" className="w-16 h-16 mb-2 sm:mb-5 mt-10" />
					<h3 className="font-bold text-black mb-5">Lifetime Access</h3>
					<div className="h-1 w-10 bg-[#FF6551] mb-5"></div>
					<p className="text-gray-500 text-center md:text-start">
						Gain lifetime access to our extensive library of courses and
						resources. Whether you're...
					</p>
				</div>
			</div>
		</div>
	);
}

export default HeroFeatures;
