import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-0 overflow-hidden">
      <h1 className="text-orange-800 text-6xl sm:text-7xl lg:text-7xl text-center mt-0">
        JIRDS
        <span className="block mt-2 px-2 sm:px-4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
    Janani Institute For Research & Rehabilitation Development Society
  </span>
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
      <img src="/banner.png" alt="banner" className="w-full h-auto max-h-screen" /> {/* Adjust width as needed */}

      <div className="flex mt-10 justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kpG1xym60oA?si=NWVuddg-WoY7p6cQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;
