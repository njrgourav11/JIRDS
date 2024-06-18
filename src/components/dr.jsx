import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Img1 from '../assets/dr/ok1.jpg';
import Img2 from '../assets/dr/ok2.jpg';
import Img3 from '../assets/dr/ok3.jpg';
import Img4 from '../assets/dr/ok4.jpg';
import Img5 from '../assets/dr/ok5.jpg';
import Img6 from '../assets/dr/ok6.jpg';
import Img7 from '../assets/dr/ok7.jpg';
import Img8 from '../assets/dr/ok8.jpg';
import Img9 from '../assets/dr/ok9.jpg';
import Img10 from '../assets/dr/ok10.jpg';
import Img11 from '../assets/dr/ok11.jpg';
import Img12 from '../assets/dr/ok12.jpg';
import Img13 from '../assets/dr/ok13.jpg';
import Img14 from '../assets/dr/ok14.jpg';
import Img15 from '../assets/dr/ok15.jpg';

const Section = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_52a5i4o', 'template_9gbu1cs', form.current, 'VFUDI7HBspB1bzmya')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
            });

        e.target.reset();
    };

    return (
        <div className="text-center">
            <h2 className="text-3xl mb-20 sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
                    Consultation
                </span>
            </h2>

            <section className="">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-left">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-orange-900 dark:text-white">
                            About Dr. Anuradha
                        </h2>
                        <p className="mb-4 text-black">
                            Dr ANURADHA TATTA has passionate commitment to work for the community, to create awareness,
                            early identification and intervention of community mental health problems, to mobilize and
                            motivate, to minimize developmental barriers among children with disorders viz., physical, speech,
                            learning disability, visual, behavioural etc., using optimized, modern and scientific techniques. Ready
                            to take up any challenging task in social environment that helps the society and the nation at large
                            with 14 years of experience and expertise in Effective Counselling, Rehabilitation Area, Treatment
                            Strategies with excellent managerial skills as a coordinator. As a part of societal responsibility held many campaigns and visited schools to bring about awareness on inclusive education, early intervention and importance of child mental health among the communities.
                            Effective counselling and teaching skills, coping with strategies in school and
                            college going students. Delivering Motivational Speeches to all groups of People, Children,
                            Adolescents and Adults.
                        </p>
                        <p className="mb-4 text-black">
                            As an Early Child Interventionist, Psychologist, Neurotherapist, achieving
                            desirable and utmost appreciation from parents of Autism children by bringing about attitudinal
                            change in their wards.
                        </p>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-orange-900 dark:text-white">
                            Education
                        </h2>
                        <p className="mb-4 text-black">
                            • M.A Psychology (Child Mental Health) from Kuvempu University (Secured University 1st
                            Rank) <br />

                            • Master of Physiotherapy (Neurology & Neuro Rehabilitation) at Durgabai Deshmukh college,
                            Hyderabad from NTR University. <br />
                            • P.G Diploma in early intervention (Osmania University). <br />
                        </p>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-orange-900 dark:text-white">
                            Professional Qualifications
                        </h2>
                        <p className="mb-4 text-black">
                            • Diploma in Community Mental Health for Psychologists from NIMHANS. <br />
                            • Certified in Psychological Assessment from NIMH (National Institute of Mentally
                            Handicapped). <br />
                            • Certified in Counselling Techniques in Rehab. Psychology from NIMH <br />
                            • Certified in Cognitive Behaviour Therapy from NIMH. <br />
                            • Certification course in behaviour modification from NIMH. <br />
                            • Certification in mental Health and Psychosocial issues in Covid19 from NIMHANS. <br />
                        </p>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-orange-900 dark:text-white">
                            Achievements & Collaboration
                        </h2>
                        <p className="mb-4 text-black">
                            • Currently working with Woman Safety Wing, Telangana police Hyderabad as a project head
                            of a state project (cyber ambassador platform), training 14,000 children from govt, BC, ST,
                            SC, SW, Minority schools of 33 districts of Telangana. <br />
                            • Emerged as Founder Chairman of JIRDS (Janani Institute of Research and Rehabilitation
                            development Society), Janani Child Development and Therapy Centre, Janani Physiotherapy
                            and Rehabilitation Centre <br />
                            • Worked with Sparsh Special School as coordinator & Psychology Counsellor for 6 years <br />
                            • Member of Indian Association of Physiotherapy <br />

                            • Member of Telangana Psychologists Association <br />
                            • Worked with Sudarshan Rehabilitation Society for Exceptional Children for 4years <br />
                            • Visiting Counsellor to Academic group of Schools, a chain of House of 'BACHPAN' aimed at
                            holistic development of students. <br />
                            • Visiting consultant for Suraksha multi-speciality clinics and Mitra Hospitals. <br />
                            • Conducted many trainings, orientation classes for parents as well as teachers on
                            Child mental health, POCSO Act, positive parenting etc.

                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-0">
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img1} alt="office content 1" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img2} alt="office content 2" />
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img3} alt="office content 3" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img4} alt="office content 4" />
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img5} alt="office content 5" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img6} alt="office content 6" />
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img7} alt="office content 7" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img8} alt="office content 8" />
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img9} alt="office content 9" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img10} alt="office content 10" />
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img15} alt="office content 11" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img12} alt="office content 12" />
    <img className="w-full h-[200px] object-cover rounded-lg" src={Img13} alt="office content 13" />
    <img className="w-full h-[200px] object-cover mt-4 lg:mt-10 rounded-lg" src={Img14} alt="office content 13" />
  </div>
                </div>
            </section>

            <section className="bg-orange py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-12">
      <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-8">
        Book a Consultation
      </h2>
      <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(60,81,237,13)] rounded-lg mt-8">
        <div className="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
          <h2 className="text-xl font-bold text-white">Contact Information</h2>
          <p className="text-sm text-gray-400 mt-3">
            Want to book our services? 
            <br />
            Give us a call or fill out the form.
            <br />
            2nd Floor, Gopala Nilayam, 
            Beside Korukonda Coaching Center, 
            Mayuri Nagar, Miyapur, Hyd- 049.
          </p>
          <ul className="mt-16 space-y-10">
            <li className="flex items-center max-lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                />
              </svg>
              <a href="mailto:jananichilddevelopmentcenter@gmail.com" className="text-white text-sm ml-3">
                <strong>jananichilddevelopmentcenter@gmail.com</strong>
              </a>
            </li>
            <li className="flex items-center max-lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 482.6 482.6"
              >
                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                />
              </svg>
              <a href="tel:+91 9948199921" className="text-white text-sm ml-3">
                <strong>+91 9948199921</strong>
              </a>
            </li>
            <li className="flex items-center max-lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 482.6 482.6"
              >
                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                />
              </svg>
              <a href="tel:+91 7780392868" className="text-white text-sm ml-3">
                <strong>+91 7780392868</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 p-6">
          <h2 className="text-xl text-black font-bold">Have any questions?</h2>
          <p className="text-sm text-gray-400 mt-3 mb-6">
            Fill out the form below and we will get back to you soon.
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="px-3 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="px-3 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                className="px-10 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 mr-3 mb-2"
                />
                <select
    name="subject"
    className="px-10 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
  >
    <option value="">Select a subject</option>
    <option value="1:1 Consulatation">1:1 Consulatation</option>
  </select>
              <input
                type="date"
                name="Date"
                placeholder="Date"
                className="px-3 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="time"
                name="Time"
                placeholder="Time"
                className="px-3 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="px-3 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="px-3 py-2 text-[#011c2b] bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#0651ed] text-white px-6 py-2 rounded-md font-bold hover:bg-[#034acb] focus:outline-none focus:ring focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
      </div>
  );
};

export default Section;
