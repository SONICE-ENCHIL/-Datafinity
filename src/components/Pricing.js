import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdVpnLock } from "react-icons/md";

const cardData = [
	{
		type: "FREE",
		price: "Ghs 0.00",
		features: [
			"Vodafone 10GB (2 Days)",
			"Vodafone Digi-learn (2 Days)",
			"MTN 10GB (2 Days - Android Only)",
			"MTN 1.2GB (1 Day)",
			"Two days community support",
		],
	},
	{
		type: "VODAFONE GH",
		price: "GHS 10-30",
		features: [
			"Unlimited for 1 Month (Ghs 30)",
			"Unlimited for 2 Weeks (Ghs 15)",
			"Unlimited for 5 Days (Ghs 10)",
			"Digi-learn for 1 Month (Ghs 10)",
			"24/7 Online Support till expiry",
		],
	},
	{
		type: "MTN",
		price: "GHS 10-23",
		features: [
			"1 Month Unlimited (Ghs 23) -Android",
			"1.2GB daily for 1 Month (Ghs 20)",
			"1.2GB daily for 2 Weeks (Ghs 15)",
			"100mb daily for 1 Month (Ghs 10)",
			"24/7 Online support till expiry.",
		],
	},
];

function Cards() {
	return (
		<div id="pricing" className="p-4 md:px-20 lg:px-40 my-10">
			<h3 className="text-orange-500 text-center sm:text-left font-semibold">
				Our Packages
			</h3>
			<h2 className="text-black text-2xl md:text-4xl font-bold mt-4 text-center sm:text-left">
				Affordable Packages
			</h2>

			{/* Cards */}
			<div className="flex flex-col  lg:flex-row sm:space-x-5 items-center space-y-0 md:justify-between mt-20">
				{cardData.map((card, index) => (
					<div
						key={index}
						className="bg-white lg:p-5 xs:p-3 md:p-10 !px-10 py-10 my-10 shadow-lg rounded-md w-full min-h-[550px] flex flex-col items-center lg:items-start">
						<div className="bg-orange-500 p-6 rounded-full shadow">
							<MdVpnLock color="#fff" size={40} />
						</div>
						<h3 className="text-black font-bold text-2xl mt-2">{card.type}</h3>
						<h3 className="text-orange-500 text-4xl font-bold mt-2">
							{card.price}
						</h3>
						<p className="text-blue-300 font-semibold">Monthly or Bimonthly</p>
						<ul className="text-black/60 font-semibold mt-4 space-y-4 text-left">
							{card.features.map((feature, i) => (
								<li key={i} className="flex ">
									<FaCheckCircle
										className={
											i < 4
												? "text-green-400 mr-3 mt-1"
												: "text-gray-400 mr-3 mt-1"
										}
										size={25}
									/>
									{feature}
								</li>
							))}
						</ul>

						<a
							href="https://wa.link/k1312c"
							rel="noreferrer"
							target="_blank"
							className="bg-orange-500 flex justify-center text-white font-semibold py-3 px-4 w-full rounded-md mt-4">
							Register
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Cards;
