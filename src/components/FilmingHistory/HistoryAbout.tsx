import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/FilmingHistory/filminghistory.css";
import filmingimg from "../../assets/image/Filminghistory.jpg"
import filmingimg2 from "../../assets/image/Filminghistory-2.jpg"
import filmingimg3 from "../../assets/image/Filminghistory-3.jpg"
import filmingimg4 from "../../assets/image/Filminghistory-4.jpg"
import minilogo1 from "../../assets/image/minilogo1.png";
import minilogo2 from "../../assets/image/minilogo2.png";
import minilogo3 from "../../assets/image/minilogo3.png";
import { useL } from "../../useL";

const HistoryAbout: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const t = useL();

  const slides = [
    { id: 0, title1: t("ŞİRİN", "SWEET", "СЛАДКИЕ"), title2: t("ARZULAR", "DREAMS", "МЕЧТЫ"), bg: filmingimg },
    { id: 1, title1: t("YARADICI FİLM", "CREATIVE FILM", "ТВОРЧЕСКИЙ ФИЛЬМ"), title2: t("YARADICISI", "CREATOR", "СОЗДАТЕЛЬ"), bg: filmingimg2 },
    { id: 2, title1: t("PEŞƏKAR", "PROFESSIONAL", "ПРОФЕССИОНАЛЬНЫЙ"), title2: t("YANAŞMA", "APPROACH", "ПОДХОД"), bg: filmingimg3 },
    { id: 3, title1: t("XƏYALLAR", "DREAMS BECOME", "МЕЧТЫ СТАНОВЯТСЯ"), title2: t("REALLIĞA ÇEVRİLİR", "REALITY", "РЕАЛЬНОСТЬЮ"), bg: filmingimg4 }
  ];

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="history-hero-section" style={{ backgroundImage: `url(${slides[current].bg})` }}>
      <div className="hero-overlay-gradient"></div>
      <div className="container h-100 position-relative z-index-3">
        <div className="row h-100 align-items-center">
          <div className="col-lg-8 text-start">
            <div className="d-flex align-items-center gap-4 mb-4">
              <img src={minilogo1} alt="Award 1" className="award-badge" />
              <img src={minilogo2} alt="Award 2" className="award-badge" />
              <img src={minilogo3} alt="Award 3" className="award-badge" />
            </div>
            <h1 className="hero-display-title" key={current}>
              {slides[current].title1} <br />
              <span className="text-white">{slides[current].title2}</span>
            </h1>
            <div className="mt-5">
              <button onClick={() => navigate('/contact')} className="btn btn-faime-action px-5 py-3 text-uppercase fw-bold">
                {t("Bizimlə Əlaqə", "Contact Us", "Связаться с нами")}
              </button>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-flex justify-content-end">
            <div className="d-flex flex-column gap-3">
              <button onClick={prevSlide} className="hero-nav-btn"><i className="fa-solid fa-chevron-up"></i></button>
              <button onClick={nextSlide} className="hero-nav-btn"><i className="fa-solid fa-chevron-down"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryAbout;