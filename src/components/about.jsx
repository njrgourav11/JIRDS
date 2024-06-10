import React from 'react';
import about1 from '../assets/gal/abt1.jpg';
import about5 from '../assets/gal/abthd.jpg';
import about2 from '../assets/gal/abt2.jpg';
import about3 from '../assets/gal/abt3.jpg';
import about4 from '../assets/gal/kid.jpg';
import about6 from '../assets/gal/loc.jpg';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div className="text-center">
      <h2 className="text-3xl mb-20 sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        About{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
          Us
        </span>
      </h2>
      <div className="mx-8 my-20">

<div className="flex flex-col lg:flex-row justify-end items-center">

    <div className='lg:ml-20 lg:mt-36'>
        <h1 className='lg:text-start font-bold lg:text-6xl text-center text-orange-700 text-3xl'>JIRDS</h1>
        <p className="lg:text-start lg:text-2xl md:text-xl text-center mt-6">Janani Child development Center is a Comprehensive multi-service place that provides educational, Therapeutic and recreational services for children with special needs for fostering their physical, educational, emotional, and social development and thus enabling them to play, learn, live and function in the real world by encouraging them to realize their true potential</p>
    </div>

    <div>
        <img src={about5} className="rounded-sm ml-10  mt-10 lg:h-auto lg:w-[100%]" alt='' />
    </div>
    
</div>
</div>



            <div className='lg:grid grid-cols-2 px-4 lg:px-10'>

                <div class="grid grid-cols-2 md:ml-5 ">

                    <div className=' flex-col lg:pl-12 mt-12 '>
                        <img src={about1} className=" w-60 h-60 lg:w-40 lg:h-40 lg:ml-20 lg:my-5  p-2" alt="" />
                        <img src={about2} className="w-40 h-40 lg:w-60 lg:h-60 p-2 " alt="" />

                    </div>

                    <div className=' my-6  '>
                        <img src={about3} className="w-40 h-40 lg:w-60 lg:h-60 lg:my-5 py-2" alt="" />
                        <img src={about4} className="w-60 h-60 lg:w-40 lg:h-40 py-2" alt="" />
                    </div>
                </div>

                <div className='lg:mt-32'>
                    <h1 className='lg:text-start  font-bold lg:text-6xl text-center text-orange-700 text-3xl mt-20'>Our Objective</h1>
                    <p className="lg:text-start lg:mr-48 text-md text-center mt-6 mr-5">Our objective is to provide quality education, functional skill
programme that will child or that will enable the child 
to realize their optimal potential in academics, development 
of various skills socio - emotional functions and independent 
living.</p>
                </div>
            </div>

            
            <div className='mt-36'>
    <h1 className='text-center font-bold text-4xl text-orange-700 mb-12 md:text-7xl'>Why Choose Us</h1>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 mx-5 text-right">

<div className='mx-4 my-3'>
    <h1 className='text-center text-orange-900 text-2xl font-bold mb-2'>Nurture</h1>
    <p className="text-center text-base">We provide a caring and supportive environment where children can thrive emotionally and socially. Our nurturing approach focuses on building confidence and self-esteem in every child we work with.</p>
</div>

<div className='mx-4 my-3'>
    <h1 className='text-center text-orange-900 text-2xl font-bold mb-2'>Nourish</h1>
    <p className="text-center text-base">Through balanced nutrition and tailored meal plans, we ensure children receive the essential nutrients for healthy growth and development. Our emphasis on proper diet and nutrition fosters optimal physical and cognitive development in children.</p>
</div>

<div className='mx-4 my-3'>
    <h1 className='text-center text-orange-900 text-2xl font-bold mb-2'>Train</h1>
    <p className="text-center text-base">Our experienced educators and therapists employ specialized training techniques to enhance cognitive abilities and life skills. We offer personalized training programs designed to address specific developmental needs and promote independence.</p>
</div>

<div className='mx-4 my-3'>
    <h1 className='text-center text-orange-900 text-2xl font-bold mb-2'>Expert</h1>
    <p className="text-center text-base">With extensive expertise in pediatric therapy, we specialize in diagnosing and treating a range of developmental conditions. Our multidisciplinary team of professionals combines cutting-edge therapies and compassionate care to achieve remarkable results in treating various developmental disorders.</p>
</div>

</div>

</div>
<div className='mt-36'>
    <h1 className='text-center font-bold text-orange-800 lg:text-6xl text-3xl'>Ignite Your Child's Potential <br /> A Guide for Development Seekers</h1>
    <p className="text-center text-base text-orange-900 py-6">A comprehensive resource designed to empower parents and caregivers in nurturing their child's growth and development. With expert insights and practical advice, this guide offers strategies to unlock your child's unique abilities and foster a supportive environment for their journey towards success. From understanding developmental milestones to implementing effective learning techniques, embark on a transformative journey towards unlocking your child's full potential.</p>
    <div className="flex justify-end mt-6">
        <div className="relative">
            <img src={about6} alt="Your Image" className="w-64 h-auto absolute top-0 right-0" />
        </div>
    </div>
</div>

           


            {/* <div className=' lg:flex  mt-20 items-center justify-between py-3'>
                
                <div className='flex lg:flex-row flex-col mt-5 mb-0 items-center'>
                    <p className=''>123-456-7890 | 123 Main Street,New York, NY 1001| </p>
                    <p> Mon-Fri 9:00AM - 5:00PM</p>
                </div>
                <div className='flex justify-center '>
                    <button className='text-xl mr-5 '> <FaFacebookF className='text-blue-500 '></FaFacebookF> </button>
                    <button className='text-xl mx-5 '>  <FaTwitter className='text-blue-500 '></FaTwitter>  </button>
                </div>
            </div> */}
        </div>

    );
};

export default About;