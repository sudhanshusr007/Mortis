import React from 'react'
import Logo from "../assets/Mortiz.png"
const Footer = () => {
  return (
    <footer className="bg-green-50">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <a
        className="inline-block rounded-full bg-green-800 p-2 text-white shadow transition hover:bg-gray-800 sm:p-3 lg:p-4"
        href="#main"
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
        <img className="h-[12rem] w-[12rem]" src={Logo} alt="logo" />
                </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
        Revolutionizing the way you book hospital appointments. Experience seamless scheduling, real-time availability, and instant confirmations
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Newsletter </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; Mortiz 2024. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer