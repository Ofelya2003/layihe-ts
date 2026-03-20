import { useState } from "react";
import { NavLink } from "react-router-dom";
import StaticLang from "../utils/StaticLang";
import "../assets/css/MobileMenu.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>

      <div className={`mobile-navigation-panel ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="menu-title">FAIME MENU</span>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <ul className="mobile-menu-list">
          
          {/* HOME CATEGORY */}
          <li className="mobile-menu-item">
            <div className="menu-link-wrapper" onClick={() => toggleSubmenu('home')}>
              <span><StaticLang az="ANA SƏHİFƏ" en="HOME" ru="ГЛАВНАЯ" /></span>
              <i className={`fas fa-chevron-down arrow ${openSubmenu === 'home' ? 'rotate' : ''}`}></i>
            </div>
            <ul className={`mobile-submenu ${openSubmenu === 'home' ? 'show' : ''}`}>
              <li><NavLink to="/home-1" onClick={onClose}>Filming Works</NavLink></li>
              <li><NavLink to="/home-2" onClick={onClose}>Cinema & Movie</NavLink></li>
              <li><NavLink to="/home-3" onClick={onClose}>Filming History</NavLink></li>
            </ul>
          </li>

          {/* MOVIE CATEGORY */}
          <li className="mobile-menu-item">
            <div className="menu-link-wrapper" onClick={() => toggleSubmenu('movie')}>
              <span><StaticLang az="FİLMLƏR" en="MOVIES" ru="ФИЛЬМЫ" /></span>
              <i className={`fas fa-chevron-down arrow ${openSubmenu === 'movie' ? 'rotate' : ''}`}></i>
            </div>
            <ul className={`mobile-submenu ${openSubmenu === 'movie' ? 'show' : ''}`}>
              <li><NavLink to="/movie-1" onClick={onClose}>Movie Archive</NavLink></li>
              <li><NavLink to="/movie-details" onClick={onClose}>Movie Details</NavLink></li>
            </ul>
          </li>

          {/* PORTFOLIO CATEGORY */}
          <li className="mobile-menu-item">
            <div className="menu-link-wrapper" onClick={() => toggleSubmenu('portfolio')}>
              <span><StaticLang az="PORTFOLİO" en="PORTFOLIO" ru="ПОРТФОЛИО" /></span>
              <i className={`fas fa-chevron-down arrow ${openSubmenu === 'portfolio' ? 'rotate' : ''}`}></i>
            </div>
            <ul className={`mobile-submenu ${openSubmenu === 'portfolio' ? 'show' : ''}`}>
              <li><NavLink to="/portfolio-1" onClick={onClose}>Gallery</NavLink></li>
              <li><NavLink to="/portfolio-2" onClick={onClose}>Portfolio Details</NavLink></li>
            </ul>
          </li>

          {/* PAGES CATEGORY - Bütün Pages (1-dən 14-ə qədər) */}
          <li className="mobile-menu-item">
            <div className="menu-link-wrapper" onClick={() => toggleSubmenu('pages')}>
              <span><StaticLang az="SƏHİFƏLƏR" en="PAGES" ru="СТРАНИЦЫ" /></span>
              <i className={`fas fa-chevron-down arrow ${openSubmenu === 'pages' ? 'rotate' : ''}`}></i>
            </div>
            <ul className={`mobile-submenu ${openSubmenu === 'pages' ? 'show' : ''}`}>
              <li><NavLink to="/pages1" onClick={onClose}>About Us</NavLink></li>
              <li><NavLink to="/pages2" onClick={onClose}>Services</NavLink></li>
              <li><NavLink to="/pages3" onClick={onClose}>Service Details</NavLink></li>
              <li><NavLink to="/pages4" onClick={onClose}>Our Team</NavLink></li>
              <li><NavLink to="/pages5" onClick={onClose}>Team Details</NavLink></li>
              <li><NavLink to="/pages6" onClick={onClose}>FAQ</NavLink></li>
              <li><NavLink to="/pages7" onClick={onClose}>Pricing</NavLink></li>
              <li><NavLink to="/pages8" onClick={onClose}>Cart</NavLink></li>
              <li><NavLink to="/pages9" onClick={onClose}>Contact Page 2</NavLink></li>
              <li><NavLink to="/pages10" onClick={onClose}>404 Page</NavLink></li>
              <li><NavLink to="/pages11" onClick={onClose}>Shop Sidebar</NavLink></li>
              <li><NavLink to="/pages13" onClick={onClose}>Shop Details</NavLink></li>
              <li><NavLink to="/pages14" onClick={onClose}>Wishlist</NavLink></li>
            </ul>
          </li>

          {/* BLOG CATEGORY */}
          <li className="mobile-menu-item">
            <div className="menu-link-wrapper" onClick={() => toggleSubmenu('blog')}>
              <span><StaticLang az="BLOQ" en="BLOG" ru="БЛОГ" /></span>
              <i className={`fas fa-chevron-down arrow ${openSubmenu === 'blog' ? 'rotate' : ''}`}></i>
            </div>
            <ul className={`mobile-submenu ${openSubmenu === 'blog' ? 'show' : ''}`}>
              <li><NavLink to="/blog-1" onClick={onClose}>Blog Standard</NavLink></li>
              <li><NavLink to="/blog-2" onClick={onClose}>Blog Wide</NavLink></li>
              <li><NavLink to="/blog-3" onClick={onClose}>Blog Details</NavLink></li>
            </ul>
          </li>

          {/* CONTACT & ADMIN */}
          <li className="mobile-menu-item">
            <NavLink to="/contact" className="single-link" onClick={onClose}>
              <StaticLang az="ƏLAQƏ" en="CONTACT" ru="КОНТАКТЫ" />
            </NavLink>
          </li>
          
        
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;