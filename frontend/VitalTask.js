import React from "react";
import "./VitalTask.css";
import {
  FaSearch,
  FaTh,
  FaTasks,
  FaUsers,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function VitalTask() {
  const navigate = useNavigate();

  // Get current date and day
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateString = today.toLocaleDateString("en-GB"); // format: dd/mm/yyyy

  // Priority colors (all lowercase keys)
  const priorityColors = {
    high: "red",
    "extremely high": "darkred",
    medium: "orange",
    low: "green",
  };

  return (
    <div className="vital-task-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-pic"></div>
          <h4>Username</h4>
          <p>username@gmail.com</p>
        </div>
        <ul className="menu">
          <li onClick={() => navigate("/dashboard")}>
            <FaTh /> Dashboard
          </li>
          <li className="active">
            <FaExclamationCircle /> Vital Task
          </li>
          <li>
            <FaTasks /> My Task
          </li>
          <li>
            <FaUsers /> Team
          </li>
          <li>
            <FaCog /> Settings
          </li>
          <li>
            <FaQuestionCircle /> Help
          </li>
        </ul>
        <div className="logout">
          <FaSignOutAlt /> Logout
        </div>
      </div>

      {/* Main Content */}
      <main className="main-section">
        {/* Top Bar */}
        <header className="top-bar">
          <div className="logo">
            <span className="logo-plan">Plan</span>-Wise
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search your task here..." />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <div className="top-icons">
            <button>📅</button>
            <button>🗂</button>
            <button>🔔</button>
          </div>
          <div className="date">
            {dateString}
            <br />
            {dayName}
          </div>
        </header>

        {/* Content Area */}
        <section className="content-area">
          <div className="notifications">
            <h3>Notifications</h3>
            <div className="notif-list">
              {[
                {
                  title:
                    "Complete the UI design of Landing Page for FoodVentures.",
                  priority: "High",
                },
                {
                  title:
                    "Complete the UI design of Landing Page for Travel Days.",
                  priority: "High",
                },
                {
                  title: "Complete the Mobile app design for Pet Warden.",
                  priority: "Extremely High",
                },
                {
                  title: "Complete the entire design for Juice Slider.",
                  priority: "medium", // lowercase still works now
                },
              ].map((task, index) => {
                const priorityKey = task.priority.toLowerCase(); // normalize
                return (
                  <div
                    key={index}
                    className="notif-item"
                  >
                    {/* Colored dot only */}
                    <span
                      className="priority-dot"
                      style={{ backgroundColor: priorityColors[priorityKey] }}
                    ></span>

                    <div className="notif-text">
                      <p>
                        <strong>{task.title.split("for")[0]}</strong> for{" "}
                        {task.title.split("for")[1]}
                      </p>
                      <small>
                        Priority: {task.priority}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
