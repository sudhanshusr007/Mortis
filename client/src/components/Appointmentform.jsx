import React from 'react';

const AppointmentForm = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl sm:max-w-8xl md:max-w-5xl lg:max-w-4xl xl:max-w-3xl">
          <h1 className="text-center text-2xl font-bold text-gray-800 sm:text-3xl">Let's get you Checked</h1>

          <p className="mx-auto mt-4 max-w-md text-center  text-gray-600">
            Fill the given online form to schedule an appointment with us. Once done, we will send you a confirmation text
          </p>

          <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
            <p className="text-center text-lg font-medium">Appointment Form</p>

            {/* First Name and Last Name Side by Side */}
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="size-8 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm "
            />
          </div>

          <div className="col-span-6  sm:col-span-3 ">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 ">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="size-8 mt-1 w-full  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
         

            {/* Mobile Number Input */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                className="size-7 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                
              />
            </div>

            {/* Gender Selection */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Sex</label>
              <select id="sex" className="size-7 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>

            {/* Age Input */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                className="size-7 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Doctor's Name Input */}
            <div>
              <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
              <select id="doc_name" className="size-7 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Dr Andrew James</option>
                <option>Dr John </option>
                <option>Dr Kate Mcadams</option>
              </select>
            </div>

            {/* Department Selection */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
              <select id="department" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Surgery</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Address Text Area */}
            <div>
              <label htmlFor="address" className=" block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                rows="3"
                className="size-20 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
