import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const navigateTo = useNavigate();

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        'https://mortis-2.onrender.com/api/v1/user/doctors',
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();

    try {
      const hasVisitedBool = hasVisited; // Convert to boolean
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/appointment/post',
        {
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          address,
          hasVisited: hasVisitedBool,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl sm:max-w-8xl md:max-w-5xl lg:max-w-4xl xl:max-w-3xl">
          <h1 className="text-center text-2xl font-bold text-gray-800 sm:text-3xl">
            Let's get you Checked
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-600">
            Fill the given online form to schedule an appointment with us. Once done, we will send you a confirmation text.
          </p>
          <form
            onSubmit={handleAppointment}
            className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
          >
            <p className="text-center text-lg font-medium">Appointment Form</p>

            {/* Appointment Date Input */}
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Appointment Date</label>
              <input
                type="date"
                id="appointmentDate"
                placeholder="Appointment Date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Department Selection */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
              <select
                id="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctorFirstName("");
                  setDoctorLastName("");
                }}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>{depart}</option>
                ))}
              </select>
            </div>

            {/* Doctor Selection */}
            <div>
              <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
              <select
                id="doctorName"
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e) => {
                  const [firstName, lastName] = e.target.value.split(" ");
                  setDoctorFirstName(firstName);
                  setDoctorLastName(lastName);
                }}
                disabled={!department}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Doctor</option>
                {doctors
                  .filter((doctor) => doctor.doctorDepartment === department)
                  .map((doctor, index) => (
                    <option
                      value={`${doctor.firstName} ${doctor.lastName}`}
                      key={index}
                    >
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Address Text Area */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                rows="3"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>

            {/* Have You Visited Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hasVisited"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="hasVisited" className="text-sm text-gray-700">Have you visited before?</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Get Appointment
            </button>
          </form>

          {/* View Appointment History Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigateTo("/application-status")}
              className="inline-block rounded bg-gray-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              View Appointment History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
