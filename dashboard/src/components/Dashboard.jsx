import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import "../App.css"; 
import BottomNavbar from "./navbar";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();

    // Fetch a motivational quote or fun fact
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
      } catch (error) {
        setQuote('Welcome to your dashboard!');
      }
    };
    fetchQuote();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getTimeBasedGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <BottomNavbar />
      <section className="page">
        <header className="header">
          <h1 className="greeting">{`${getTimeBasedGreeting()}, ${admin?.firstName} ${admin?.lastName}`}</h1>
          <p className="welcome-message">Welcome to your dashboard!</p>
        </header>
        <main className="main">
          <div className="stats">
            <div className="stat-card">
              <h2>Total Appointments</h2>
              <p>35</p>
            </div>
            <div className="stat-card">
              <h2>Total Doctors</h2>
              <p>06</p>
            </div>
          </div>
          <div className="content">
            <h5>Appointments</h5>
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Visited</th>
                </tr>
              </thead>
              <tbody>
                {appointments && appointments.length > 0
                  ? appointments.map((appointment) => (
                      <tr key={appointment._id}>
                        <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                        <td>{appointment.appointment_date.substring(0, 16)}</td>
                        <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                        <td>{appointment.department}</td>
                        <td>
                          <select
                            className={
                              appointment.status === "Pending"
                                ? "value-pending"
                                : appointment.status === "Accepted"
                                ? "value-accepted"
                                : "value-rejected"
                            }
                            value={appointment.status}
                            onChange={(e) =>
                              handleUpdateStatus(appointment._id, e.target.value)
                            }
                          >
                            <option value="Pending" className="value-pending">
                              Pending
                            </option>
                            <option value="Accepted" className="value-accepted">
                              Accepted
                            </option>
                            <option value="Rejected" className="value-rejected">
                              Rejected
                            </option>
                          </select>
                        </td>
                        <td>
                          {appointment.hasVisited === true ? (
                            <GoCheckCircleFill className="green" />
                          ) : (
                            <AiFillCloseCircle className="red" />
                          )}
                        </td>
                      </tr>
                    ))
                  : "No Appointments Found!"}
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
