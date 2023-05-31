import React from "react";
import "./LoginLayout.scss";
import { Outlet } from "react-router-dom";
import { login } from "../../assests";
const LoginLayout = () => {
  return (
    <>
      <div className="loginlayout">
        <div className="loginlayout-container">
          <div className="loginlayout-container-content">
            <div className="loginlayout-container-content-form">
              <Outlet />
            </div>
          </div>
          <div className="loginlayout-container-image">
            <img src={login} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
