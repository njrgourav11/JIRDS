import React from 'react';
import Img1 from '../assets/gal/img1.jpg';
import Img2 from '../assets/gal/img2.jpg';
import Img4 from '../assets/gal/img4.jpg';
import Img5 from '../assets/gal/img5.jpg';
import Img6 from '../assets/gal/img6.jpg';
import Img7 from '../assets/gal/img7.jpg';
import Img8 from '../assets/gal/img8.jpg';
import Img9 from '../assets/gal/img9.jpg';
import Img10 from '../assets/gal/img10.jpg';
import Img11 from '../assets/gal/img11.jpg';
import Img12 from '../assets/gal/img12.jpg';
import Img13 from '../assets/gal/img13.jpg';
import Img14 from '../assets/gal/img14.jpg';
import Img15 from '../assets/gal/img15.jpg';
import Img16 from '../assets/gal/img16.jpg';

const Gallery = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl mb-20 sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
          Gallery
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {[Img1, Img2, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16].map((img, index) => (
          <div key={index} className="h-48 w-full">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;