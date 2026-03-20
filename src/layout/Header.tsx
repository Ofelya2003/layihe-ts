import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { changeLang } from "../store/features/lang/lang";
import StaticLang from "../utils/StaticLang";
import logo from "../assets/image/logo.png";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu"; 
import "../assets/css/layout/Header.css";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const lang = useSelector((state: any) => state.lang); 

  const isHomePage = location.pathname === "/";
  const headerClass = isHomePage ? "navbar-transparent" : "navbar-solid";

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value.toLowerCase(); 
    dispatch(changeLang(newLang));
    localStorage.setItem('lang', newLang);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Mobil menyu komponentin */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <nav className={`navbar navbar-expand-lg ${headerClass}`}>
        <div className="container">

          <div className="d-flex align-items-center gap-3">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="loqo" />
            </NavLink>
            <button
              className="border-0 bg-transparent text-white fs-4"
              onClick={() => setIsSidebarOpen(true)}
              style={{ cursor: "pointer", outline: "none" }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Hamburger düyməsi (Yalnız mobildə görünür) */}
          <button 
            className="navbar-toggler border-0 shadow-none d-lg-none" 
            type="button" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars-staggered text-white fs-1"></i>
          </button>

          {/* DÜZƏLİŞ BURADADIR: d-none d-lg-block əlavə edildi ki, şəkildəki o göy siyahı mobildə yox olsun */}
         <div className="collapse navbar-collapse d-none d-lg-block" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-lg-4 gap-2">
              
              <li className="nav-item dropdown">
                <NavLink to="/" className="nav-link">
                   <StaticLang az="Ana Səhifə" en="Home" ru="Главная" />
                </NavLink>
                <ul className="dropdown-menu shadow">
                  <li><NavLink className="dropdown-item" to="/home-1"><StaticLang az="Çəkiliş İşləri" en="Filming Works" ru="Съемочные работы" /></NavLink></li>
                  <li><NavLink className="dropdown-item" to="/home-2"><StaticLang az="Kino və Film" en="Cinema & Movie" ru="Кино и Фильмы" /></NavLink></li>
                  <li><NavLink className="dropdown-item" to="/home-3"><StaticLang az="Çəkiliş Tarixi" en="Filming History" ru="История съемок" /></NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink to="/movie" className="nav-link">
                   <StaticLang az="Filmlər" en="Movies" ru="Фильмы" />
                </NavLink>
                <ul className="dropdown-menu shadow">
                  <li><NavLink className="dropdown-item" to="/movie-1"><StaticLang az="Film Arxiv" en="Movie Archive" ru="Архив фильмов" /></NavLink></li>
                  <li><NavLink className="dropdown-item" to="/movie-details"><StaticLang az="Film Detalları" en="Movie Details" ru="Детали фильма" /></NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink to="/portfolio" className="nav-link">
                   <StaticLang az="Portfoliо" en="Portfolio" ru="Портфолио" />
                </NavLink>
                <ul className="dropdown-menu shadow">
                  <li><NavLink className="dropdown-item" to="/portfolio-1"><StaticLang az="Qalereya" en="Gallery" ru="Галерея" /></NavLink></li>
                  <li><NavLink className="dropdown-item" to="/portfolio-2"><StaticLang az="İş Detalları" en="Work Details" ru="Детали работы" /></NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown position-static">
                <NavLink to="/pages" className="nav-link">
                   <StaticLang az="Səhifələr" en="Pages" ru="Страницы" />
                </NavLink>
                <ul className="dropdown-menu mega-menu p-4 shadow">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <h6 className="dropdown-header text-white fw-bold"><StaticLang az="Səhifə Düzeni 1" en="Page Layout 1" ru="Макет страницы 1" /></h6>
                      <NavLink className="dropdown-item" to="/pages1"><StaticLang az="Haqqımızda" en="About Us" ru="О нас" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages2"><StaticLang az="Xidmətlər" en="Services" ru="Услуги" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages3"><StaticLang az="Xidmət Detalları" en="Service Details" ru="Детали услуг" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages4"><StaticLang az="Komandamız" en="Our Team" ru="Наша команда" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages5"><StaticLang az="Komanda Detalları" en="Team Details" ru="Детали команды" /></NavLink>
                    </div>
                    <div className="col-12 col-lg-4">
                      <h6 className="dropdown-header text-white fw-bold"><StaticLang az="Səhifə Düzeni 2" en="Page Layout 2" ru="Макет страницы 2" /></h6>
                      <NavLink className="dropdown-item" to="/pages6"><StaticLang az="Suallar (FAQ)" en="FAQ" ru="Вопросы" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages7"><StaticLang az="Qiymətlər" en="Pricing" ru="Цены" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages8"><StaticLang az="Səbət" en="Cart" ru="Корзина" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages9"><StaticLang az="Bizimlə Əlaqə" en="Contact Us" ru="Свяжитесь с нами" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages10"><StaticLang az="404 Xətası" en="404 Error" ru="Ошибка 404" /></NavLink>
                    </div>
                    <div className="col-12 col-lg-4">
                      <h6 className="dropdown-header text-white fw-bold"><StaticLang az="Səhifə Düzeni 3" en="Page Layout 3" ru="Макет страницы 3" /></h6>
                      <NavLink className="dropdown-item" to="/pages11"><StaticLang az="Mağaza" en="Shop" ru="Магазин" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages13"><StaticLang az="Məhsul Detalları" en="Product Details" ru="Детали продукта" /></NavLink>
                      <NavLink className="dropdown-item" to="/pages14"><StaticLang az="İstək Siyahısı" en="Wishlist" ru="Список желаний" /></NavLink>
                    </div>
                  </div>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink to="/blog" className="nav-link">
                   <StaticLang az="Bloq" en="Blog" ru="Блог" />
                </NavLink>
                <ul className="dropdown-menu shadow">
                  <li><NavLink className="dropdown-item" to="/blog-1"><StaticLang az="Standart Bloq" en="Standard Blog" ru="Стандартный блог" /></NavLink></li>
                  <li><NavLink className="dropdown-item" to="/blog-2"><StaticLang az="Geniş Bloq" en="Wide Blog" ru="Широкий блог" /></NavLink></li>
                  <li><NavLink className="dropdown-item" to="/blog-3"><StaticLang az="Bloq Detalları" en="Blog Details" ru="Детали блога" /></NavLink></li>
                </ul>
              </li>

              <li className="nav-item me-lg-4">
                <NavLink to="/contact" className="nav-link">
                   <StaticLang az="Əlaqə" en="Contact" ru="Контакты" />
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center me-3">
              <i className="bi bi-globe2 me-2" style={{ color: "#fd6500" }}></i>
              <select 
                className="bg-transparent text-white border-0 fw-bold shadow-none"
                style={{ cursor: "pointer", fontSize: "14px", outline: "none", color: "#fd6500", textTransform: "uppercase" }}
                value={lang.toUpperCase()}
                onChange={handleLangChange}
              >
                <option value="AZ" style={{ backgroundColor: "#222" }}>AZ</option>
                <option value="EN" style={{ backgroundColor: "#222" }}>EN</option>
                <option value="RU" style={{ backgroundColor: "#222" }}>RU</option>
              </select>
            </div>

            <button
              className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm"
              style={{ backgroundColor: "#fd6500", border: "none", color: "white" }}
              onClick={() => navigate("/contact")}
            >
              <StaticLang az="Məsləhət Al" en="Get Advice" ru="Консультация" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;