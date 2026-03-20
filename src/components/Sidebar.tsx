import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/css/Sidebar.css";
import { useAuth } from "../context/AuthContext";
import { useL } from "../useL"; 

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}      

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, signOut } = useAuth();
  const t = useL(); 

  return (
    <>
      
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>

      <div className={`custom-sidebar ${isOpen ? "open" : ""}`}>
        
        <div className="sidebar-header d-flex justify-content-between align-items-center p-4">
          <h5 className="text-warning fw-bold mb-0 text-uppercase" style={{letterSpacing: '1px'}}>
            {t("İdarəetmə Paneli", "Dashboard", "Панель управления")}
          </h5>
          <button className="close-sidebar-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="sidebar-body p-4">
          {/* ƏSAS MENU */}
          <div className="menu-group">
            <p className="text-secondary small fw-bold text-uppercase" style={{fontSize: '10px', letterSpacing: '1px'}}>
              {t("Əsas Menu", "Main Menu", "Главное меню")}
            </p>
            <NavLink to="/admin" onClick={onClose} className="sidebar-link">
              <i className="fas fa-user-shield me-2"></i> {t("Admin Paneli", "Admin Dashboard", "Админ панель")}
            </NavLink>
          </div>

        
          <div className="menu-group mt-4">
            <p className="text-secondary small fw-bold text-uppercase" style={{fontSize: '10px', letterSpacing: '1px'}}>
              {t("Sürətli Keçid", "Quick Access", "Быстрый доступ")}
            </p>
            <NavLink to="/pages14" onClick={onClose} className="sidebar-link">
              <i className="fas fa-heart me-2"></i> {t("İstək Siyahısı", "Wishlist", "Список желаний")}
            </NavLink>
            <NavLink to="/contact" onClick={onClose} className="sidebar-link">
              <i className="fas fa-paper-plane me-2"></i> {t("Bizimlə Əlaqə", "Contact Us", "Связаться с нами")}
            </NavLink>
          </div>

         
          <div className="menu-group mt-5 pt-4 border-top border-secondary">
            <p className="text-secondary small fw-bold text-uppercase" style={{fontSize: '10px', letterSpacing: '1px'}}>
              {t("Hesab", "Account", "Аккаунт")}
            </p>
            {user ? (
              <>
                <div className="sidebar-link text-white opacity-75 mb-2" style={{fontSize: '14px'}}>
                  <i className="fas fa-user-circle me-2"></i> {user.email}
                </div>
                <button 
                  onClick={() => { signOut(); onClose(); }} 
                  className="btn btn-link text-danger p-0 text-decoration-none fw-bold"
                >
                  <i className="fas fa-sign-out-alt me-2"></i> {t("Çıxış Et", "Sign Out", "Выйти")}
                </button>
              </>
            ) : (
              <Link to="/auth" onClick={onClose} className="sidebar-link text-warning text-decoration-none fw-bold">
                <i className="fas fa-sign-in-alt me-2"></i> {t("Daxil Ol / Qeydiyyat", "Login / Register", "Вход / Регистрация")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;