import React from 'react';
import Video1 from '../assets/videos/vid1.mp4';
import Video2 from '../assets/videos/vid2.mp4';
import Video3 from '../assets/videos/vid3.mp4';
import Video4 from '../assets/videos/vid4.mp4';
import Video5 from '../assets/videos/vid5.mp4';
import Video6 from '../assets/videos/vid6.mp4';
import Video7 from '../assets/videos/vid7.mp4';
const EventCard = () => {
  return (
   
    <div className="text-center">
    <h2 className="text-3xl mb-20 sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
      Our{" "}
      <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
        Events
      </span>
    </h2>
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Event 1 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Merry Christmas & Happy New Year
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            As we celebrate the festive season, may the magic of Christmas and the promise of the New Year fill your hearts with warmth, joy, and hope. Wishing you a Merry Christmas and a Happy New Year filled with love, peace, and endless blessings.            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        {/* Event 2 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Pongal
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Our Pongal celebration was a vibrant and joyous occasion, filled with traditional music, dance, and delicious Pongal dishes. The children participated in various cultural activities, showcasing their talents and embracing the festive spirit. It was a day of fun, learning, and togetherness, leaving everyone with beautiful memories.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        {/* Event 3 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Diwali
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            We recently celebrated Diwali with a heartwarming event for the children at our center, filling the day with joy, lights, and festive cheer. It was a memorable occasion where the kids enjoyed fun activities, delicious treats, and the spirit of togetherness.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        {/* Event 4 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Pass The Ball
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            During our event, the "Pass the Ball" activity brought smiles and laughter as children shared moments of joy while passing the ball to each other. It was a delightful experience that promoted teamwork and coordination in a playful setting.                        </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        {/* Event 5 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              One Tree, One Life
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            "One tree, one life" underscores the significance of trees in our ecosystem, highlighting the interconnectedness of all life. It urges us to cherish and protect these vital resources for a sustainable future. </p>          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        {/* Event 5 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Bottle Race Activity
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            The bottle race activity is a fun and engaging game where participants race to move a bottle from one point to another using various techniques like balancing, rolling, or carrying it on their heads. It promotes teamwork, coordination, and problem-solving skills while adding an element of excitement and competition to the event.            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        {/* Event 7 */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <video className="h-full w-full object-cover" controls>
              <source src={Video7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Ball Picker Activity
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            In the ball picker activity, participants compete to collect the maximum number of balls scattered across a designated area within a specified time limit. It encourages agility, speed, and strategic thinking as participants devise the most efficient methods to gather the balls while navigating obstacles and competing against others.            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
              Read More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EventCard;
