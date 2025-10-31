import React, { useState } from "react";
import "./style.css";
import LoginPage from "./login.jsx";
import RegisterPage from "./register.jsx";
import DashboardPage from "./dashboard.jsx";

function HomePage({ onStartClick }) {
  const renderPixelGrid = () => {
    return Array.from({ length: 400 }).map((_, index) => (
      <span key={index} className="pixel"></span>
    ));
  };

  return (
    <div className="home-pixel-container">
      <div className="pixel-grid">{renderPixelGrid()}</div>

      <div className="home-container">
        <div className="brand-logo" style={{ fontSize: "48px" }}>
          <span className="brand-text" style={{ fontSize: "48px" }}>
            SUNNY STORE
          </span>
        </div>
        <h1 className="home-title">Chào mừng bạn</h1>
        <p className="home-subtitle">
          Trải nghiệm mua sắm tuyệt vời nhất đang chờ bạn.
        </p>
        <button className="start-button" onClick={onStartClick}>
          Bắt đầu
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToLogin = () => setCurrentPage("login");
  const navigateToHome = () => setCurrentPage("home");
  const navigateToRegister = () => setCurrentPage("register");
  const navigateToDashboard = () => setCurrentPage("dashboard");
  const handleLogout = () => setCurrentPage("home");

  switch (currentPage) {
    case "home":
      return <HomePage onStartClick={navigateToLogin} />;
    case "login":
      return (
        <LoginPage
          onNavigateBack={navigateToHome}
          onNavigateToRegister={navigateToRegister}
          onNavigateToDashboard={navigateToDashboard}
        />
      );
    case "register":
      return (
        <RegisterPage
          onNavigateBack={navigateToLogin}
          onNavigateToLogin={navigateToLogin}
        />
      );
    case "dashboard":
      return <DashboardPage onLogout={handleLogout} />;
    default:
      return <HomePage onStartClick={navigateToLogin} />;
  }
}
