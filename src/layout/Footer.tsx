import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "../assets/css/layout/Footer.css"
import { useL } from "../useL"; 

const Footer = () => {
  const t = useL(); 

  return (
    <footer className="footer-area">
      <div className="container py-5">
        <div className="row gy-5 justify-content-between">
          
          
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget">
              <Link to="/" className="d-flex align-items-center mb-4 text-decoration-none text-white">
                <img src={logo} alt="FAIME" style={{ height: "45px" }} />
              </Link>
              <p className="footer-text">
                {t(
                  "Yaradıcılığın sərhəd tanımadığı məkan. Sizin filmlər və vizual hekayələriniz üçün peşəkar istehsalat mərkəzi.",
                  "A place where creativity knows no bounds. A professional production center for your films and visual stories.",
                  "Место, где творчество не знает границ. Профессиональный производственный центр для ваших фильмов и визуальных историй."
                )}
              </p>
            </div>
          </div>

         
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">
                {t("Qalereyamız", "Our Gallery", "Наша галерея")}
              </h4>
              <div className="gallery-wrapper">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="gallery-box">
                    <img src={`https://picsum.photos/100/100?random=${i}`} alt="gallery" />
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="col-xl-2 col-lg-4 col-md-6">
            <div className="footer-widget text-md-center text-lg-start">
              <h4 className="widget-title">
                {t("Bizi İzləyin", "Follow Us", "Подписывайтесь")}
              </h4>
              <div className="social-flex">
                <a href="#" className="s-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="s-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="s-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="s-link"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>

         
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">
                {t("Əlaqə Məlumatı", "Contact Info", "Контактная информация")}
              </h4>
              <div className="contact-info">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 
                  {t(
                    "Bakı şəhəri, Azərbaycan prospekti 100", 
                    "Baku city, Azerbaijan Avenue 100", 
                    "Баку, проспект Азербайджана 100"
                  )}
                </p>
                <p><i className="fas fa-phone-alt"></i> +994 (50) 123 45 67</p>
                <p><i className="fas fa-envelope"></i> hello@faimemedia.az</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom mt-5 pt-4 border-top border-secondary">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <p className="mb-0">
              © {new Date().getFullYear()} Faime. {t("Bütün hüquqlar qorunur.", "All rights reserved.", "Все права защищены.")}
            </p>
            <div className="bottom-links d-flex gap-4">
              <Link to="/" className="text-decoration-none text-secondary">
                  {t("Məxfilik Siyasəti", "Privacy Policy", "Политика конфиденциальности")}
              </Link>
              <Link to="/" className="text-decoration-none text-secondary">
                  {t("Şərtlər və Qaydalar", "Terms and Conditions", "Правила и условия")}
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      <button className="go-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;