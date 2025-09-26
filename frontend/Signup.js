// src/Signup.js
import React from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import signupBanner from "./image/Signup.jpg";

export default function Signup() {
  const history = useHistory();

  return (
    <div className="signup-container">
      {/* Left Side */}
      <div className="signup-left">
        <img
          src={signupBanner}
          alt="Study illustration"
          className="signup-img"
        />
        <h2 className="logo">
          <span className="logo-red">Plan</span>-Wise
        </h2>
      </div>

      {/* Right Side */}
      <div className="signup-right">
        <div className="signup-box">
          <h2>Create an account</h2>

          <div className="input-group">
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Confirm Password" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            {/* Navigate to Forget Password */}
            <button
              type="button"
              className="link-btn"
              onClick={() => history.push("/forget-password")}
            >
              Forgot password?
            </button>
          </div>

          <button className="signup-btn">SIGN UP</button>

          <p className="signin-link">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => history.push("/")}
              className="link-btn"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
