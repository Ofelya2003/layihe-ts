import React from 'react';
import "../../assets/css/Home/AboutSection.css";
import aboutImg from "../../assets/image/Aboutsection.png";
import { useL } from "../../useL";

const AboutSection: React.FC = () => {
  const t = useL();
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img-container">
              <div className="about-img-box">
                <img src={aboutImg} alt="Rejissor" className="img-fluid" />
                <div className="experience-badge">
                  <h2 className="exp-num">30</h2>
                  <div className="exp-side-content">
                    <span className="plus-sign">+</span>
                    <p className="exp-text">{t("İllik", "Years", "Лет")} <br /> {t("Təcrübə", "Experience", "Опыта")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-wrapper ps-lg-5">
              <span className="about-subtitle">{t("HAQQIMDA", "ABOUT ME", "ОБО МНЕ")}</span>
              <h2 className="about-title zoom-in-text">
                {t("Yaradıcı və Ekspert", "Creative and Expert", "Креативный и экспертный")} <br /> {t("Film Rejissoru", "Film Director", "Кинорежиссер")}
              </h2>
              <p className="about-desc-bottom">
                {t("Mən 26 illik karyeramın son 9 ilini kamera növündən asılı olmayaraq möhtəşəm kinematoqrafik kadrlar yaratmağa həsr etmiş dünyaca məşhur bir rejissoram.", "I am a world-renowned director who has dedicated the last 9 years of my 26-year career to creating great cinematic shots.", "Я всемирно известный режиссер, посвятивший последние 9 лет своей 26-летней карьеры созданию потрясающих кадров.")}
              </p>
              <p className="about-desc-bottom">
                {t("İstər kommersiya reklamı, istər qısametrajlı film, istərsə də sənədli film olsun, layihənizi peşəkar şəkildə lentə ala bilərəm.", "Whether it's a commercial, a short film, or a documentary, I can professionally film your project.", "Будь то реклама, короткометражный или документальный фильм, я сниму ваш проект профессионально.")}
              </p>
              <div className="about-signature mt-4">
                <h3 className="signature-font">David Anderson</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;