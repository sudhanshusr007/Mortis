import React, { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage, AiOutlineLogout } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoLogOut, IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Add appropriate styles
import Login from "./Login";

const BottomNavbar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const gotoHome = () => {
    navigateTo("/");
    setShow(!show);
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };
  const gotoMessagesPage = () => {
    navigateTo("/messages");
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
    <nav
        style={isAuthenticated ? { display: "none" } : { display: "flex" }}
        className="bottom-navbar"
      ></nav>
        <nav className="bottom-navbar">
          <a href="#" className="nav-item" onClick={gotoHome}> 
            <TiHome/>
          </a>
          <a href="#" className="nav-item" onClick={gotoDoctorsPage}>
            <FaUserDoctor/>
          </a>
          <a href="#" className="nav-item" onClick={gotoAddNewAdmin}>
            <MdAddModerator />
          </a>
          <a href="#" className="nav-item" onClick={gotoAddNewDoctor}>
            <IoPersonAddSharp />
          </a>
          <a href="#" className="nav-item" onClick={gotoMessagesPage}>
            <AiFillMessage/>
          </a>
          <a href="#" className="nav-item" onClick={handleLogout}>
          <AiOutlineLogout/>
          </a>
        </nav>
    </>
  );
};

export default BottomNavbar;
