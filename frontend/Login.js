// src/Login.js
import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import loginImage from "./image/Login.jpg";

export default function Login() {
  const history = useHistory();

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <img src={loginImage} alt="Illustration" className="login-img" />
        <h2 className="tagline">
          Welcome Back,
          <br />
          Login to Continue
        </h2>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>

          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <button
              type="button"
              className="link-btn"
              onClick={() => history.push("/forget-password")}
            >
              Forgot password?
            </button>
          </div>

          <button className="login-btn">LOGIN</button>

          <p className="signup-link">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => history.push("/signup")}
              className="link-btn"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
