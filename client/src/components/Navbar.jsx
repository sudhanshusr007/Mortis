import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Mortiz.png";

const Navbar = () => {
  return (
    <div className="bg-white/100 p-2 sticky top-0 overflow-hidden h-[5rem] z-[100] ">
      <nav>
        <div className='flex items-center justify-between gap-4 p-3'>
          <div className="">
            <img src={Logo} alt="logo" className='p-2 h-[9rem] w-[9rem] md:h-auto cursor-pointer my-[-3rem]' />
          </div>
          <ul className='hidden sm:flex flex-row gap-5'>
            <li><Link to="/" className="text-gray-500 hover:text-black">Home</Link></li>
            <li><Link to="/schedule" className="text-gray-500 hover:text-black">Schedule</Link></li>
            <li><Link to="/about" className="text-gray-500 hover:text-black">About</Link></li>
          </ul>
          <button className="bg-green-800 text-white px-4 py-2 rounded" >
          <a href='/login'> Login</a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



