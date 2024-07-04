import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ApplicationStatus = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { patientId } = useContext(Context); // Assuming patientId is available in Context

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!patientId) {
        console.error("Patient ID is undefined");
        return; // Only fetch appointments if patientId is defined
      }

      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/appointment/patient-history/${patientId}`,
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        toast.error("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments(); // Call fetchAppointments inside useEffect
  }, [patientId]); // Add patientId as a dependency to useEffect

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>; // Show loading state
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-100 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-green-200 shadow-lg rounded-lg p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
              Appointment History
            </h2>
            {appointments.length === 0 ? (
              <p className="text-center text-gray-600">No appointments found</p>
            ) : (
              <table className="min-w-full divide-y divide-green-300">
                <thead className="bg-green-300">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Doctor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Appointment Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Visited
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-green-300">
                  {appointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(appointment.appointment_date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.visited ? "Yes" : "No"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationStatus;
