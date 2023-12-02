import React from "react";
import heroImage from "../public/hero-image.png";

function Hero() {
	return (
		<div className="flex flex-col sm:flex-row md:bg-[#184C99] relative bottom-20 z-0">
			{/* Left Column */}
			<div className="flex-1 sm:flex-2 lg:1/3 bg-white pt-32 sm:pt-44 relative px-7 md:px-14 md:pl-16 lg:px-40 sm:pl-16">
				<div className="absolute bg-[#184C99] hidden md:inline-block md:w-10 md:h-20 lg:w-20 lg:h-40 top-0 left-0"></div>
				<p className="text-[#FF6551] font-semibold mb-5 md:mb-10">
					For Better Future
				</p>
				<h2 className="text-black font-bold tracking-wider text-4xl py-3 sm:pr-5 sm:text-6xl mb-4">
					PREMIUM SERVERS
				</h2>
				<p className="text-[#737373] mb-6 md:mb-10 py-3">
					Datafinity is an innovative company that offers unlimited data for the
					modern world. Our mission is to connect people and businesses through
					data, and we're passionate about making a difference in the world.
				</p>
				<div className="flex space-x-4">
					<button className="bg-[#FF6551] text-white py-2 px-5 rounded-md">
						<a href="https://wa.link/k1312c"  rel="noreferrer" target="_blank">JOIN OUR SERVER</a>
					</button>
					<button className="border-[#FF6551] text-[#FF6551] border py-2 px-5 rounded-md">
						<a href="#about" >Learn More</a>
					</button>
				</div>
			</div>

			{/* Right Column */}
			<div className="flex-1 sm:flex-1/3 bg-[#184C99] relative sm:bottom-32 h-[680px] mt-32 md:top-0">
				<img
					src={heroImage}
					alt="Boy"
					className="w-full h-full object-contain"
				/>
			</div>
		</div>
	);
}

export default Hero;
