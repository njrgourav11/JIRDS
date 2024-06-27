import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-orange-800 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        JIRDS
        <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
          {" "} <br />
          Janani Institute For Research & Rehabilitation Development Society
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-amber-800 max-w-4xl">
        Janani Child Development Center is a comprehensive
        multi-service place that provides educational, therapeutic, 
        and recreational services for children with special needs for 
        fostering their physical, educational, emotional, and social
        development and thus enabling them to play, learn, live and 
        function in the real world by encouraging them to realize 
        their true potential.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/services"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a href="/jirds.pdf" target="_blank" className="py-3 px-4 mx-3 rounded-md border">
          Brochure
        </a>
      </div>
      <div className="flex mt-10 justify-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kpG1xym60oA?si=NWVuddg-WoY7p6cQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default HeroSection;