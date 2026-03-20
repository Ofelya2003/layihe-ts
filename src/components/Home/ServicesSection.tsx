import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/Home/ServicesSection.css";
import servicesImg from "../../assets/image/servicessection.jpg";
import { useL } from "../../useL";

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const t = useL();

  const services = [
    { id: 1, icon: "bi bi-camera-reels", title: t("Çəkiliş Xidmətləri", "Filming Services", "Съемочные услуги"), desc: t("Bütün personajlar və film istehsalı xidmətimiz üçün yüksək keyfiyyətli çəkilişlər.", "High-quality filming for all characters and film production services.", "Высококачественные съемки для всех персонажей и услуг кинопроизводства.") },
    { id: 2, icon: "bi bi-layers", title: t("Hərəkətli Qrafika", "Motion Graphics", "Моушн-графика"), desc: t("Videolarınıza dinamika qatan professional motion dizayn həlləri.", "Professional motion design solutions that add dynamics to your videos.", "Профессиональные решения для моушн-дизайна, добавляющие динамику вашим видео.") },
    { id: 3, icon: "bi bi-vector-pen", title: t("Animasiya", "Animation", "Анимация"), desc: t("2D və 3D animasiyalarla hekayələrinizi vizuallaşdırırıq.", "Visualizing your stories with 2D and 3D animations.", "Визуализируем ваши истории с помощью 2D и 3D анимации.") },
    { id: 4, icon: "bi bi-film", title: t("Film İstehsalı", "Film Production", "Кинопроизводство"), desc: t("İdeyadan hazır məhsula qədər bütün film istehsalı prosesinin idarə olunması.", "Management of the entire film production process from idea to finished product.", "Управление всем процессом кинопроизводства от идеи до готового продукта.") }
  ];

  return (
    <section className="services-section">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-6 d-flex align-items-center justify-content-center custom-bg-content">
            <div className="services-inner-container">
              <span className="services-mini-tag">{t("XİDMƏTLƏR", "SERVICES", "УСЛУГИ")}</span>
              <h2 className="services-main-title">{t("Xidmətlərim", "My Services", "Мои услуги")}</h2>
              <div className="row g-5 mt-4">
                {services.map((item, index) => (
                  <div key={item.id} className="col-md-6 reveal-up" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="service-card-minimal">
                      <div className="service-icon-wrap"><i className={item.icon}></i></div>
                      <h4 className="service-card-title">{item.title}</h4>
                      <p className="service-card-desc">{item.desc}</p>
                      <button className="service-view-details" onClick={() => navigate('/pages3')}>
                        {t("ƏTRAFLI BAX", "VIEW DETAILS", "ПОДРОБНЕЕ")} <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="services-image-wrapper">
              <img src={servicesImg} alt="Service" className="services-full-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;