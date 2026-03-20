import React, { useEffect, useState } from "react";
import "../../assets/css/Home/HomeSlider.css";
import minilogo from "../../assets/image/minilogo1.png";
import minilogo2 from "../../assets/image/minilogo2.png";
import minilogo3 from "../../assets/image/minilogo3.png";
import homeImg1 from "../../assets/image/Homeone.jpg";
import homeImg2 from "../../assets/image/hometwo.jpg";
import homeImg3 from "../../assets/image/homethree.jpg";
import { Link } from "react-router-dom";
import { useL } from "../../useL"; 

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const t = useL(); 

  const slides = [
    {
      subtitle: t("MƏN FİLM REJİSSORUYAM", "I AM A FILM DIRECTOR", "Я КИНОРЕЖИССЕР"),
      title: "DAVID \n ANDERSON",
      desc: t("Faime Production, İndoneziya və Sinqapurda yerləşən, istedadlı rejissor heyətinə sahib tam xidmətli istehsalat mərkəzidir.", "Faime Production is a full-service production center based in Indonesia and Singapore with a talented director staff.", "Faime Production — производственный центр полного цикла в Индонезии и Сингапуре с талантливым штатом режиссеров."),
      image: homeImg1,
      id: 1
    },
    {
      subtitle: t("MƏN SSENARİSTƏM", "I AM A SCRIPTWRITER", "Я СЦЕНАРИСТ"),
      title: "RUSSO \n QARDAŞLARI",
      desc: t("Yüksək keyfiyyətli ssenari və hekayə xətti ilə filmlərinizə can veririk. Professional yanaşma və yaradıcı həllər.", "We bring your films to life with high-quality scripts and storylines. Professional approach and creative solutions.", "Мы оживляем ваши фильмы качественными сценариями и сюжетами. Профессиональный подход и креативные решения."),
      image: homeImg2,
      id: 2
    },
    {
      subtitle: t("MƏN VİDEO REDAKTORAM", "I AM A VIDEO EDITOR", "Я ВИДЕОМОНТАЖЕР"),
      title: "DAVID \n JHONSON",
      desc: t("Çəkdiyiniz kadrları sənət əsərinə çeviririk. Montaj, rəng korreksiyası və səs dizaynı ilə mükəmməl nəticə.", "We turn your shots into works of art. Perfect results with editing, color correction, and sound design.", "Мы превращаем ваши кадры в произведения искусства. Совершенный результат благодаря монтажу и цветокоррекции."),
      image: homeImg3,
      id: 3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container-fluid h-100 position-relative px-3 px-md-5" style={{ zIndex: 5 }}>
            <div className="row h-100 align-items-center">
              <div className="col-lg-7 offset-lg-1">
                <div className="hero-content">
                  <span className="hero-subtitle-anim">{slide.subtitle}</span>
                  <h1 className="hero-title-anim">
                    {slide.title.split('\n').map((t_text, i) => (
                      <React.Fragment key={i}>{t_text}<br /></React.Fragment>
                    ))}
                  </h1>
                  <p className="hero-desc-anim">{slide.desc}</p>
                  <div className="hero-btn-anim">
                    <Link to="/contact" className="contact-btn-custom">
                      {t("MƏNİMLƏ ƏLAQƏ", "CONTACT ME", "СВЯЗАТЬСЯ СО МНОЙ")} <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-side-socials">
              <span className="follow-text">{t("İzlə —", "Follow —", "Следить —")}</span>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="hero-navigation-vertical">
              {slides.map((_, i) => (
                <span key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}></span>
              ))}
            </div>
            <div className="hero-awards-fixed-bottom">
              <div className="hero-brand-badges">
                <img src={minilogo} alt="badge" className="badge-img" />
                <img src={minilogo2} alt="badge" className="badge-img" />
                <img src={minilogo3} alt="badge" className="badge-img" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;