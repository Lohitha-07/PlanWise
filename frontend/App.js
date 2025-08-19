import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" ? (
        <Login goToSignup={() => setPage("signup")} />
      ) : (
        <Signup goToLogin={() => setPage("login")} />
      )}
    </div>
  );
}

export default App;
