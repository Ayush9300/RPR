import React, { useState } from "react";
import "./Login.css";
import { IoLogInOutline } from "react-icons/io5";

function Login() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit} className="loginform">
        <span id="logintitle">Login Page</span>
        <div className="login-list">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>
        <div className="login-list">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required />
        </div>
        <button id="loginbtn" type="submit">
          Login<IoLogInOutline />
        </button>
      </form>

      {showAlert && (
        <div className="custom-alert">
          <span>Login Successfully....👍</span>
          <button className="alert-ok-btn" onClick={closeAlert}>
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
