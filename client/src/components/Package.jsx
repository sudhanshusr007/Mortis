import React from 'react'

const Package = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-20">
        <h1 className='text-center text-3xl font-bold p-2 my-1'>Checkout our <span className='text-green-800'>Plans</span> </h1>
        <br/>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6 sm:px-8">
          <h2 className="text-lg font-medium text-gray-900">
            Starter
            <span className="sr-only">Plan</span>
          </h2>
  
          <p className="mt-2 text-gray-700">Our most affordable plan yet.</p>
  
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>
  
            <span className="text-sm font-medium text-gray-700">/month</span>
          </p>
  
          <a
            className="mt-4 block rounded border border-green-800 transition bg-green-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-800 sm:mt-6"
            href="#"
          >
            Get Started
          </a>
        </div>
  
        <div className="p-6 sm:px-8">
          <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
  
          <ul className="mt-2 space-y-2 sm:mt-4">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> 10+ tests </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Upto 5 expert sessions </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Email support </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-red-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span className="text-gray-700"> Help center access </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-red-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span className="text-gray-700"> Phone support </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-red-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span className="text-gray-700"> Community access </span>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6 sm:px-8">
          <h2 className="text-lg font-medium text-gray-900">
            Pro
            <span className="sr-only">Plan</span>
          </h2>
  
          <p className="mt-2 text-gray-700">Better than Basic and high return on value .</p>
  
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>
  
            <span className="text-sm font-medium text-gray-700">/month</span>
          </p>
  
          <a
            className="mt-4 block rounded border border-green-800 transition bg-green-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-800 sm:mt-6"
            href="#"
          >
            Get Started
          </a>
        </div>
  
        <div className="p-6 sm:px-8">
          <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
  
          <ul className="mt-2 space-y-2 sm:mt-4">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 tegreen-80000"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> 20+ tests</span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Upto 10 expert sessions </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Email support </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Help center access </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-red-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span className="text-gray-700"> Phone support </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-red-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span className="text-gray-700"> Community access </span>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6 sm:px-8">
          <h2 className="text-lg font-medium text-gray-900">
            Ultra
            <span className="sr-only">Plan</span>
          </h2>
  
          <p className="mt-2 text-gray-700">Our flagship plan with the best services</p>
  
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 100$ </strong>
  
            <span className="text-sm font-medium text-gray-700">/month</span>
          </p>
  
          <a
            className="mt-4 block rounded border border-green-800 transition bg-green-800 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-800 sm:mt-6"
            href="#"
          >
            Get Started
          </a>
        </div>
  
        <div className="p-6 sm:px-8">
          <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
  
          <ul className="mt-2 space-y-2 sm:mt-4">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> 35+ tests </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Unlimited expert sessions </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Email support </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Help center access </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Phone support </span>
            </li>
  
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-green-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span className="text-gray-700"> Community access </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Package