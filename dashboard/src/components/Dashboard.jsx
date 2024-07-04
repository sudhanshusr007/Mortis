


//       <section className="dashboard page">
//         <div className="banner">
//           <div className="firstBox">
//             <img src="/doc.png" alt="docImg" />
//             <div className="content">
//               <div>
//                 <p>Hello ,</p>
//                 <h5>
//                   {admin && `${admin.firstName} ${admin.lastName}`}
//                 </h5>
//               </div>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
//                 Assumenda repellendus necessitatibus itaque.
//               </p>
//             </div>
//           </div>
//           <div className="secondBox">
//             <p>Total Appointments</p>
//             <h3>1500</h3>
//           </div>
//           <div className="thirdBox">
//             <p>Registered Doctors</p>
//             <h3>10</h3>
//           </div>
//         </div>
//         <div className="appointments-banner">
//           <h5>Appointments</h5>
//           <table className="appointments-table">
//             <thead>
//               <tr>
//                 <th>Patient</th>
//                 <th>Date</th>
//                 <th>Doctor</th>
//                 <th>Department</th>
//                 <th>Status</th>
//                 <th>Visited</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments && appointments.length > 0
//                 ? appointments.map((appointment) => (
//                     <tr key={appointment._id}>
//                       <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
//                       <td>{appointment.appointment_date.substring(0, 16)}</td>
//                       <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
//                       <td>{appointment.department}</td>
//                       <td>
//                         <select
//                           className={
//                             appointment.status === "Pending"
//                               ? "value-pending"
//                               : appointment.status === "Accepted"
//                               ? "value-accepted"
//                               : "value-rejected"
//                           }
//                           value={appointment.status}
//                           onChange={(e) =>
//                             handleUpdateStatus(appointment._id, e.target.value)
//                           }
//                         >
//                           <option value="Pending" className="value-pending">
//                             Pending
//                           </option>
//                           <option value="Accepted" className="value-accepted">
//                             Accepted
//                           </option>
//                           <option value="Rejected" className="value-rejected">
//                             Rejected
//                           </option>
//                         </select>
//                       </td>
//                       <td>
//                         {appointment.hasVisited === true ? (
//                           <GoCheckCircleFill className="green" />
//                         ) : (
//                           <AiFillCloseCircle className="red" />
//                         )}
//                       </td>
//                     </tr>
//                   ))
//                 : "No Appointments Found!"}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import "../App.css"; 

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

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

  const { isAuthenticated, admin } = useContext(Context);

  return (
    <>
      <section className="dashboard page">
        <header className="header">
          <h1 className="welcome">Welcome</h1>
          <h1 className="title">Mortis</h1>
        </header>
        <main className="main">
          <div className="profile-section">
            <div className="profile-picture"></div>
          </div>
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
