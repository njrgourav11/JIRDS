import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1> {/* Added heading */}
    
    <div className="font-[sans-serif] border divide-y rounded-lg overflow-hidden">
        
      <div role="accordion">
        <button
          type="button"
          className={`w-full text-base text-left py-4 px-6 flex items-center transition-all ${
            openIndex === 0 ? 'text-white bg-blue-600' : 'text-[#333] hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => toggleAccordion(0)}
        >
          <span className="mr-4 text-white">Where is it located?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 fill-current ml-auto shrink-0 transition-transform ${
              openIndex === 0 ? 'rotate-180' : '-rotate-90'
            }`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openIndex === 0 && (
          <div className="py-4 px-6">
            <p className="text-sm text-gray-500">
            2nd Floor, Gopala Nilayam, Beside Korukonda Coaching Center, Mayuri Nagar, Miyapur, Hyderabad- 049, India.
            </p>
          </div>
        )}
      </div>
      <div role="accordion">
        <button
          type="button"
          className={`w-full text-base text-left py-4 px-6 flex items-center transition-all ${
            openIndex === 1 ? 'text-white bg-blue-600' : 'text-[#333] hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => toggleAccordion(1)}
        >
          <span className="mr-4 text-white">What are the services do you offer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 fill-current ml-auto shrink-0 transition-transform ${
              openIndex === 1 ? 'rotate-180' : '-rotate-90'
            }`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openIndex === 1 && (
          <div className="py-4 px-6">
            <p className="text-sm text-gray-500">Early Intervention,Speech Therapy,Occupational / Physiotherapy,
            Play Therapy,Special Education,Life Skill Training,ABA Therapy,After School Remedial Teaching.
            <br />
            For more info refer to Services Page.
</p>
          </div>
        )}
      </div>
      <div role="accordion">
        <button
          type="button"
          className={`w-full text-base text-left py-4 px-6 flex items-center transition-all ${
            openIndex === 2 ? 'text-white bg-blue-600' : 'text-[#333] hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => toggleAccordion(2)}
        >
          <span className="mr-4 text-white">How do i know should i need this services?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 fill-current ml-auto shrink-0 transition-transform ${
              openIndex === 2 ? 'rotate-180' : '-rotate-90'
            }`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openIndex === 2 && (
          <div className="py-4 px-6">
            <p className="text-sm text-gray-500">Our Targets are mainly ASD, CP, Multiple Disability, ADHD, Autism, ID
LD, Slow Learners, Development delay
</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Faq;
