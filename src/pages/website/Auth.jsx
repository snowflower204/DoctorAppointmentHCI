import React, { useState } from "react";
import WebWrapper from "../../components/website/WebWrapper";
import "../../styles/Auth.css";
import { google_icon, login, register } from "../../assets";
import { useNavigate } from "react-router-dom";
import Login from "../../components/website/Auth/Login";
import Register from "../../components/website/Auth/Register";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForms = () => {
    setIsLogin((prev) => !prev);
  };

  const registerCompleted = (e) => {
    e.preventDefault();
    navigate("/patient_informtation")
  }

  const patientDashboardNavigation = (e) => {
    e.preventDefault();
    navigate("/patient_dashboard")
  }

  return (
    <WebWrapper>
      <section className={`auth ${isLogin ? "login" : "register"}`}>
        <div className="left">
          <div className="content">
            <div className="img_banner register">
              <img src={register} alt="" />
            </div>

            <Login toggleForms={toggleForms} navigateTo={patientDashboardNavigation} />
          </div>
        </div>

        <div className="right">
          <div className="content">
            <div className="img_banner login">
              <img src={login} alt="" />
            </div>

            <Register toggleForms={toggleForms} registerCompleted={registerCompleted} />
          </div>
        </div>
      </section>
    </WebWrapper>
  );
};

export default Auth;
