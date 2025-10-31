import React from "react";
import "./dashboard.css";

export default function AdminPage({ onLogout }) {
  // Hàm xử lý khi nhấn nút Đăng xuất
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="db-container">
      {/* Header của Dashboard */}
      <header className="db-header">
        <div className="brand-logo">
          <span className="brand-text">SUNNY STORE</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Đăng xuất
        </button>
      </header>

      {/* Nội dung chính của Dashboard */}
      <main className="db-content">
        <h1 className="db-title">Bảng điều khiển (Dashboard)</h1>
        <p className="db-subtitle">Chào mừng trở lại, Admin!</p>

        {/* Danh sách các chức năng (ví dụ) */}
        <div className="feature-list">
          <h2>Danh sách chức năng</h2>

          <div className="feature-item">
            <span className="feature-icon">👤</span>
            <span className="feature-name">Quản lý Người dùng</span>
          </div>

          <div className="feature-item">
            <span className="feature-icon">📦</span>
            <span className="feature-name">Quản lý Sản phẩm</span>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🛒</span>
            <span className="feature-name">Quản lý Đơn hàng</span>
          </div>

          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span className="feature-name">Xem Báo cáo</span>
          </div>
        </div>
      </main>
    </div>
  );
}
