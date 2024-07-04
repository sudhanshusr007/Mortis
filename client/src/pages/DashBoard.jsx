// Dashboard.jsx
import React from 'react';
import UserCard from '../components/UserCard'; // Adjust the import path as necessary
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa6';

const Dashboard = () => {
  return (
 <>
<Navbar />
<div className='bg-[#42eb61] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
      sm:w-[68.75rem]'></div>
      <div className='bg-[#c5ebd0] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
      sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
  <UserCard />
  <br />
  <br />
  <br />
  <h1 className='text-3xl text-center font-bold'>Book an <span className='text-green-800'>Appointment</span></h1>
  <div className='flex justify-center p-4'>
  <a href="/schedule" className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out">
      <span>Schedule</span>
      <FaArrowRight className="ml-2" />
    </a>
    </div>
<Footer />
 </>
  );
};

export default Dashboard;
