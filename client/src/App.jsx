import React,{ useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Dashboard from "./pages/DashBoard";
import axios from "axios";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import ApplicationStatus from "./pages/ApplicationStatus";
import REACT_APP_API_BASE_URL from "./utils/config";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser ,setPatientId} = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_API_BASE_URL}/api/v1/user/patient/me`,
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/error" element={<Error />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
        </Routes>
        <ToastContainer position="top-right"/>
      </Router>
    </>
  );
};

export default App;
