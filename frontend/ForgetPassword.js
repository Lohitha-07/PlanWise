// src/ForgetPassword.js
import React, { useState } from "react";
import "./ForgetPassword.css";
import forgetImage from "./image/Login.jpg"; // replace with correct path if needed

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to: ${email}`);
  };

  return (
    <div className="forget-container">
      {/* Left side */}
      <div className="forget-left">
        <img src={forgetImage} alt="Illustration" className="forget-img" />
        <h3 className="tagline">
          Start Managing,
          <br />
          Start Winning
        </h3>
      </div>

      {/* Right side */}
      <div className="forget-right">
        <h2 className="title">Forget Password</h2>
        <p className="subtitle">
          Please enter your email to reset the password
        </p>
        <form className="forget-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="person@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="reset-btn">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}
