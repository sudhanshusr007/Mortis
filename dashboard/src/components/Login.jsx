import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
import "../App.css"; 
import REACT_APP_API_BASE_URL from "../utils/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${REACT_APP_API_BASE_URL}/api/v1/user/login`,
          { email, password, role: "Admin" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
        
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
    <section className="login-container">
      <div className="login-header">
        <h1 className="login-title">Welcome to Mortis</h1>
        <p className="login-subtitle">Only Admin can Access</p>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-form-group">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="login-form-group">
          <button type="submit" className="login-btn">Login</button>
        </div>
      </form>
    </section>
    </>
  );
};

export default Login;
