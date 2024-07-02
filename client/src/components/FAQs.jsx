import React from 'react'

const FAQs = () => {
  return (
    <div className="space-y-4">
    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">What services do you offer</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Tests, Report Analysis, Doctor Appointments.
      </p>
    </details>
  
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">What are your timings?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
       9:30 am - 11:00 pm 
       <br />
       <span className='text-red-600'>We are closed on Fridays </span>
      </p>
    </details>
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">Can we cancel our appointment?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
       Once paid, it is non refundable
      </p>
    </details>
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">What if I am not satisfied with the services</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
       You can write a mail to us! Our FeedBack team will get to you and you can discuss any issues openly.
      </p>
    </details>
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">How can I book an appointment?</h2>
  
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
  
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
    Just create an account and under schedules click on the form to get started
      </p>
    </details>
  </div>
  )
}

export default FAQs