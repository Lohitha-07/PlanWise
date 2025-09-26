// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";

function App() {
  return (
    <Router>
      <Switch>
        {/* ✅ Default page → Login */}
        <Route exact path="/" component={Login} />

        {/* Signup Page */}
        <Route path="/signup" component={Signup} />

        {/* Forget Password Page */}
        <Route path="/forget-password" component={ForgetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
