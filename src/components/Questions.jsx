import React from 'react';
import FAQ from './FAQ';

const faqdata = [
  {
    questions: "Is SSH faster than UDP?",
    answers:
      "Yes, in most cases, SSH is faster than UDP. UDP is a connectionless protocol, which means it doesn't guarantee that all packets will arrive at their destination. This can result in slower speeds and increased packet loss. On the other hand, SSH is a connection-oriented protocol that ensures all packets are delivered.",
  },
  {
    questions: " Is my data safe with Datafinity?",
    answers:
      "Yes! At Datafinity, user privacy is our top priority. We take every measure to ensure that your data is secure and private. We use the latest security measures to protect your data, and we never share or sell your data to third parties.",
  },
  {
    questions: "how popular are the services Datafinityoffers?",
    answers:
      "Datafinity provides similar services  used by millions of people worldwide. We're proud to be part of leading data service  providers, and we're constantly working to improve our offerings. We have users from all walks of life, from students to businesses. No matter who you are, we have a service that can help you.",
  },
  // {
  //   questions: "How does your product compare to others on the market?",
  //   answers:
  //     "This section will provide an overview of how your product stacks up against similar products available, and why customers should choose your product.",
  // },
  // {
  //   questions: "How can I receive support and assistance?",
  //   answers:
  //     "This section will provide information on the various ways customers can reach out for support and assistance, including email, phone, chat, and more.",
  // },
];


function Questions() {
  return (
    <div className="p-4 md:px-20 my-20 lg:px-40 text-center">
      <h3 className="text-orange-500 text-center font-semibold mb-10">FAQ</h3>
      <div
					className="grid sm:grid-cols-1">
					{faqdata.map((faq, index) => {
						return (
							<FAQ key={index} question={faq.questions} answer={faq.answers} />
						);
					})}
				</div>
		</div>
  );
}

export default Questions;
