import React, { useState } from "react";
// 1. Import CSS của trang Register
import "./register.css";

//==================================================================
// COMPONENT TRANG REGISTER (MỚI)
//==================================================================
// 2. Chấp nhận props để điều hướng
export default function RegisterPage({ onNavigateBack, onNavigateToLogin }) {
  // --- State Quản lý (từ regis.js) ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- Xử lý Submit (từ regis.js) ---
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate all fields
    if (!name || !email || !password || !confirmPassword) {
      setError("Vui lòng điền tất cả các trường bắt buộc");
      return;
    }
    if (name.length < 2) {
      setError("Tên phải có ít nhất 2 ký tự");
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Vui lòng nhập một email hợp lệ");
      return;
    }
    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }

    // Set loading state
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      // Giả lập thành công
      alert("Tạo tài khoản thành công!");
      setIsLoading(false);
      // Chuyển hướng đến trang đăng nhập sau khi thành công
      if (onNavigateToLogin) {
        onNavigateToLogin();
      }
    }, 1500);
  };

  // --- Xử lý điều hướng ---
  const handleBackClick = (e) => {
    e.preventDefault();
    if (onNavigateBack) {
      onNavigateBack(); // Quay lại (thường là trang login)
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (onNavigateToLogin) {
      onNavigateToLogin(); // Đi tới trang login
    }
  };

  // --- JSX (từ regis.html) ---
  return (
    <div className="page-container">
      <nav className="main-nav">
        <a href="#" className="back-link" onClick={handleBackClick}>
          ← Back
        </a>
        <div className="nav-divider"></div>
        <div className="brand-name">
          <span className="brand-text">SUNNY STORE</span>
        </div>
      </nav>
      <main className="main-content">
        <div className="form-container">
          <h1 className="form-title">Join Now</h1>
          <form
            className="registration-form"
            id="registrationForm"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
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
              <label htmlFor="password" className="form-label password-label">
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
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="form-input"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            {/* Hiển thị lỗi có điều kiện */}
            {error && (
              <div
                className="error-message"
                id="errorMessage"
                aria-live="polite"
              >
                {error}
              </div>
            )}

            <button
              className="submit-button"
              type="submit"
              id="submitButton"
              disabled={isLoading}
            >
              {/* Hiển thị text loading có điều kiện */}
              {isLoading ? (
                <span id="loadingText">Creating account...</span>
              ) : (
                <span id="buttonText">Create Account</span>
              )}
            </button>
            <div className="login-link-container">
              <a className="login-link" href="#" onClick={handleLoginClick}>
                Already have an account? Sign in
              </a>
            </div>
          </form>
        </div>
      </main>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="/faq" className="footer-link">
              F.A.Q
            </a>
            <a href="/contact" className="footer-link">
              Contact Us
            </a>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
            <a href="/api-docs" className="footer-link">
              API Documentation
            </a>
          </div>
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
          <div className="copyright-section">
            <span>© 2025 FAT. All Rights Reserved •</span>
            <a href="/privacy" className="copyright-link">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="copyright-link">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
