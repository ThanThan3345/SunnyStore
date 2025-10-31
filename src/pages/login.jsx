import React, { useState } from "react";
import "./login.css";

export default function LoginPage({
  onNavigateBack,
  onNavigateToRegister,
  onNavigateToDashboard,
}) {
  // --- State Quản lý ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (email !== "admin@sunny.com" || password !== "password123") {
        setError("Email hoặc mật khẩu không chính xác.");
      } else {
        alert("Đăng nhập thành công! Chào mừng trở lại.");
        if (onNavigateToDashboard) onNavigateToDashboard();
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (onNavigateBack) {
      onNavigateBack(); // Gọi hàm được truyền từ App.js
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (onNavigateToRegister) {
      onNavigateToRegister();
    }
  };

  return (
    <div className="page-container">
      <nav className="top-navigation">
        <a href="#" className="back-link" onClick={handleBackClick}>
          ← Back
        </a>
        <div className="nav-divider"></div>
        <div className="brand-logo">
          <span className="brand-text">SUNNY STORE</span>
        </div>
      </nav>

      <main className="main-content">
        <section className="login-container">
          <h1 className="login-title">Welcome Back to Sunny Store</h1>

          <form className="login-form" id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <span>Password</span>
                <span className="password-hint">(Minimum 8 characters)</span>
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="error-message" id="errorMessage">
                {error}
              </div>
            )}

            <button
              className="submit-button"
              type="submit"
              id="submitButton"
              disabled={isLoading}
            >
              {isLoading ? (
                <span id="loadingText">Signing in...</span>
              ) : (
                <span id="buttonText">Sign in</span>
              )}
            </button>

            <div className="form-links">
              <a className="forgot-password-link" href="./forgot.html">
                Forgot password?
              </a>
              <div className="links-divider"></div>
              <a
                className="create-account-link"
                href="#"
                onClick={handleRegisterClick}
              >
                Create account
              </a>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <nav className="footer-links">
            <a href="/faq" className="footer-link">
              F.A.Q
            </a>
            <a href="/contact" className="footer-link">
              Contact Us
            </a>
            <a href="/terms" className="footer-link">
              Terms
            </a>
            <a href="/privacy" className="footer-link">
              Privacy
            </a>
          </nav>

          <div className="social-links">
            <a href="https://facebook.com" className="social-link">
              Facebook
            </a>
            <a href="https://instagram.com" className="social-link">
              Instagram
            </a>
            <a href="https://youtube.com" className="social-link">
              YouTube
            </a>
          </div>

          <div className="copyright-info">
            <span>© 2025 Sunny Store. All Rights Reserved •</span>
            <a href="/privacy" className="copyright-link">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="copyright-link">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
