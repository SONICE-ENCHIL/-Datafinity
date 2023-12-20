import React from "react";
import redIcon from "../public/redIcon.png";
import blueIcon from "../public/blueIcon.png";
import yellowIcon from "../public/yellowIcon.png";

function HeroFeatures() {
	return (
		<div id="products" className="relative bottom-20 sm:bottom-44 md:bottom-60 z-30 p-4 md:px-30 lg:px-40">
		<h3 className="text-orange-500 text-center sm:text-left font-semibold !mx-auto my-10 ml-16 lg:ml-0">Configuration files</h3>
			<div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8">
				{/* Card 1 */}
				<div className="flex flex-col items-center md:items-start mb-6 lg:mb-0  shadow-xl p-10">
					<img src={redIcon} alt="Red Icon" className="w-16 h-16 mb-2 sm:mb-5 mt-10" />
					<h3 className="font-bold text-black mb-5">UDP FILES</h3>
					<div className="h-1 w-10 bg-[#FF6551] mb-5"></div>
					<p className="text-gray-500 text-center md:text-start">
					UDP files can be used to transfer data over a network. They are often used for streaming audio and video content. 
					</p>
				</div>

				{/* Card 2 */}
				<div className="flex bg-white flex-col items-center md:items-start mb-6 lg:mb-0  shadow-xl p-10">
					<img src={blueIcon} alt="Blue Icon" className="w-16 h-16 mb-2 sm:mb-5 mt-10" />
					<h3 className="font-bold text-black mb-5 uppercase">v2ray files</h3>
					<div className="h-1 w-10 bg-[#FF6551] mb-5"></div>
					<p className="text-gray-500 text-center md:text-start">
					V2ray files are used to configure a V2ray proxy server. V2ray is a tool that can be used to bypass censorship and access blocked websites. 
					</p>
				</div>

				{/* Card 3 */}
				<div className="flex bg-white flex-col items-center md:items-start shadow-xl p-10">
					<img src={yellowIcon} alt="Yellow Icon" className="w-16 h-20 mb-2 sm:mb-5 mt-10" />
					<h3 className="font-bold text-black mb-5">SSH files</h3>
					<div className="h-1 w-10 bg-[#FF6551] mb-5"></div>
					<p className="text-gray-500 text-center md:text-start">
					SSH files are are used to securely connect to a remote computer. They are often used by system administrators to manage servers. 
					</p>
				</div>
			</div>
		</div>
	);
}

export default HeroFeatures;
