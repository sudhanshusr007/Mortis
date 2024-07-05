import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionR from '../components/SectionR';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';

const Home = () => {
  return (
   <div>
      <Navbar />
      <div className='bg-[#42eb61] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
      sm:w-[68.75rem]'></div>
      <div className='bg-[#c5ebd0] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
      sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Hero />
        <SectionR />
        <Testimonial />
        <Footer />
    </div>
    
  );
};

export default Home;

