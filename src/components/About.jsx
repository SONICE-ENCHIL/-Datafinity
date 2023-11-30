import React from "react";
import girlImage from "../public/girl.png";

function About() {
	return (
		<div className="mt-[-70px] items-center bg-white p-4 md:px-20 lg:px-40">
			<h3 className="text-orange-500 text-center font-semibold !mx-auto my-10 ml-16 lg:ml-0 uppercase">
				About Datafinity
			</h3>
			<div className="flex flex-col md:flex-row mt-[-70px] items-center bg-white p-4 md:px-20 lg:px-40">
				{/* Left Column */}
				<div className="md:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16">
					<img
						src={girlImage}
						alt="Girl"
						className="w-full h-auto object-cover mb-6"
					/>
				</div>

				{/* Right Column */}
				<div className="text-center md:w-1/2 lg:w-2/3 p-3 pr-5 sm:p-10 md:p-0 ml-8 md:ml-32">
					{/* <div className="bg-[#FF6551] h-2 w-16 md:w-32 mb-4"></div> */}
					<h2 className="text-black mb-4 font-bold sm:font-semibold text-xl mt-20 md:text-2xl">
						Get Premium VPN
						<br /> Files
					</h2>
					<div className="text-gray-500 mb-6">
						<p className="mb-10">Datafinity is an innovative company that offers unlimited data for
						the modern world. Our mission is to connect people and businesses
						through data, and we're passionate about making a difference in the
						world.
            </p>
						<p>
							{" "}
							We offer a variety of services to help you make the most of your
							data, and we're always working to improve and expand our
							offerings. Whether you're a business or an individual, we have
							something for you. Thank you for choosing Datafinity!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
