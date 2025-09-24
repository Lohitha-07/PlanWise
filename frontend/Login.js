import React from "react";
import "./Login.css";
import loginImage from "./image/Login.jpg";

export default function Login({ goToSignup }) {
  return (
    <div className="login-container">
      {/* Left side */}
      <div className="login-left">
        <img src={loginImage} alt="Study illustration" className="login-img" />
        <h2 className="tagline">
          Start Managing,
          <br />
          Start Winning
        </h2>
      </div>

      {/* Right side */}
      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>

          <div className="input-group">
            <input type="email" placeholder="username@gmail.com" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <div className="options">
            <a href="#">Forgot Password?</a>
          </div>

          <button className="signin-btn">Sign in</button>

          <p className="or-text">or continue with</p>
          <div className="social-login">
            <button className="google-btn">G</button>
            <button className="apple-btn"></button>
            <button className="facebook-btn">f</button>
          </div>

          <p className="register-text">
            Don’t have an account yet?{" "}
            <button onClick={goToSignup} className="link-btn">
              Register for free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
