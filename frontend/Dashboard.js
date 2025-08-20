import React from "react";
import "./Dashboard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaSearch,
  FaTh,
  FaTasks,
  FaUsers,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const taskData = {
    total: 10,
    completed: 8,
    inProgress: 1,
    pending: 1,
    completedPercent: 84,
    inProgressPercent: 46,
    notStartedPercent: 13,
  };

  // ✅ Get current day and date
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-pic"></div>
          <h4>Username</h4>
          <p>username@gmail.com</p>
        </div>
        <ul className="menu">
          <li className="active">
            <FaTh /> Dashboard
          </li>
          {/* ✅ Added onClick to navigate to VitalTask page */}
          <li onClick={() => navigate("/vital-task")} style={{ cursor: "pointer" }}>
            <FaTasks /> Vital Task
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
      <div className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <h2 className="logo">
            <span className="logo-red">Plan</span>-Wise
          </h2>
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search your task here..." />
          </div>
          <div className="date-display">
            <p>{formattedDate}</p>
            <p>{dayName}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            Total Task <span>{taskData.total}</span>
          </div>
          <div className="stat-card">
            Completed <span>{taskData.completed}</span>
          </div>
          <div className="stat-card">
            In Progress <span>{taskData.inProgress}</span>
          </div>
          <div className="stat-card">
            Pending <span>{taskData.pending}</span>
          </div>
        </div>

        {/* Charts */}
        <div className="charts">
          <div className="chart-card">
            <CircularProgressbar
              value={75}
              text={`75%`}
              styles={buildStyles({
                pathColor: "#4caf50",
                textColor: "#4caf50",
                trailColor: "#ddd",
                textSize: "16px",
              })}
            />
            <p>Tasks Completed</p>
          </div>
          <div className="chart-status-card">
            <h4>Task Status</h4>
            <div className="status-circles">
              <div>
                <CircularProgressbar
                  value={taskData.completedPercent}
                  text={`${taskData.completedPercent}%`}
                  styles={buildStyles({
                    pathColor: "green",
                    textColor: "green",
                  })}
                />
                <p>Completed</p>
              </div>
              <div>
                <CircularProgressbar
                  value={taskData.inProgressPercent}
                  text={`${taskData.inProgressPercent}%`}
                  styles={buildStyles({
                    pathColor: "blue",
                    textColor: "blue",
                  })}
                />
                <p>In Progress</p>
              </div>
              <div>
                <CircularProgressbar
                  value={taskData.notStartedPercent}
                  text={`${taskData.notStartedPercent}%`}
                  styles={buildStyles({
                    pathColor: "red",
                    textColor: "red",
                  })}
                />
                <p>Not Started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
