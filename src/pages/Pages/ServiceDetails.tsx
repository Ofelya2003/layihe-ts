import React, { useState } from 'react';
import "../../assets/css/Pages/ServiceDetails.css";
import bgImage from '../../assets/image/backgroundpages.png';
import { useL } from "../../useL";

import filmingImg from '../../assets/image/filming-details.jpg';
import animationImg from '../../assets/image/animation-detail.jpg';
import blockbusterImg from '../../assets/image/blockbuster-detail.jpg';

const ServiceDetails: React.FC = () => {
    const t = useL();
    
    const servicesData = {
        "Çəkiliş Xidməti": {
            title: t("Peşəkar Çəkiliş Xidməti", "Professional Filming Service", "Профессиональная съемка"),
            desc: t(
                "Filmlər və reklam çarxları üçün yüksək səviyyəli kinematoqrafiya xidmətləri təqdim edirik. Komandamız sizin baxış bucağınızı kadrda canlandırmaq üçün ən son texnologiyalardan istifadə edir.",
                "We provide high-level cinematography services for movies and commercials. Our team uses the latest technology to bring your vision to life on screen.",
                "Мы предоставляем услуги кинематографии высокого уровня для фильмов и рекламных роликов. Наша команда использует новейшие технологии."
            ),
            image: filmingImg,
            features: [t("4K Çözünürlük", "4K Resolution", "Разрешение 4K"), t("Peşəkar İşıqlandırma", "Professional Lighting", "Профессиональное освещение"), t("Ekspert Heyət", "Expert Crew", "Экспертная команда")]
        },
        "Animasiya": {
            title: t("2D və 3D Animasiya", "2D and 3D Animation", "2D и 3D анимация"),
            desc: t(
                "Dünya səviyyəli animasiya studiyamızla personajlarınıza həyat verin. Konsept sənətindən final renderə qədər bütün mərhələləri əhatə edirik.",
                "Bring your characters to life with our world-class animation studio. We cover all stages from concept art to final render.",
                "Оживите своих персонажей в нашей анимационной студии мирового уровня. Мы охватываем все этапы от концепт-арта до финального рендера."
            ),
            image: animationImg,
            features: [t("Personaj Dizaynı", "Character Design", "Дизайн персонажей"), t("Hərəkət Tutma", "Motion Capture", "Захват движения"), t("VFX İnteqrasiyası", "VFX Integration", "VFX интеграция")]
        },
        "Blokbasterlər": {
            title: t("Blokbaster Prodüksiyası", "Blockbuster Production", "Производство блокбастеров"),
            desc: t(
                "Dünya miqyasında tamaşaçıların təxəyyülünü fəth edən irimiqyaslı film istehsalı üzrə ixtisaslaşmışıq.",
                "We specialize in large-scale film production that captures the imagination of audiences worldwide.",
                "Мы специализируемся на масштабном кинопроизводстве, которое поражает воображение зрителей по всему миру."
            ),
            image: blockbusterImg,
            features: [t("Ssenari Yazımı", "Script Writing", "Написание сценария"), t("Dekorasiya Qurulması", "Set Construction", "Строительство декораций"), t("Post-Prodüksiya", "Post-Production", "Пост-продакшн")]
        }
    };

    type ServiceKey = keyof typeof servicesData;
    const [activeService, setActiveService] = useState<ServiceKey>("Çəkiliş Xidməti");
    const [fade, setFade] = useState(true);

    const handleServiceChange = (service: ServiceKey) => {
        if (service === activeService) return;
        setFade(false);
        setTimeout(() => {
            setActiveService(service);
            setFade(true);
        }, 300);
    };

    return (
        <div className="service-details-page-dark">
            <section className="page-breadcrumb-area" style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                paddingTop: '220px' 
            }}>
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold mb-3">{t("Xidmət Təfərrüatları", "Service Details", "Детали услуги")}</h1>
                    <div className="breadcrumb-nav">
                        <span className="text-white-50">{t("Ana Səhifə", "Home", "Главная")}</span> : <span style={{color: '#fd6500'}}>{activeService}</span>
                    </div>
                </div>
            </section>

            <section className="py-5 my-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="service-sidebar">
                                <div className="category-widget p-4">
                                    <h4 className="fw-bold text-white mb-4 border-bottom border-secondary pb-2">{t("Xidmətlərimiz", "Our Services", "Наши услуги")}</h4>
                                    <ul className="list-unstyled">
                                        {(Object.keys(servicesData) as ServiceKey[]).map((service) => (
                                            <li key={service} className="mb-2">
                                                <button 
                                                    onClick={() => handleServiceChange(service)} 
                                                    className={`service-side-btn d-flex justify-content-between align-items-center w-100 p-3 border-0 ${activeService === service ? 'active' : ''}`}
                                                >
                                                    {service} <i className="fa-solid fa-chevron-right"></i>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`col-lg-8 service-content-box ${fade ? 'fade-in' : 'fade-out'}`}>
                            <div className="detail-img-wrapper mb-4 overflow-hidden rounded shadow">
                                <img src={servicesData[activeService].image} alt={activeService} className="img-fluid w-100" />
                            </div>
                            
                            <h2 className="fw-bold text-white mb-4">{servicesData[activeService].title}</h2>
                            <p className="text-muted-custom mb-4 lead">{servicesData[activeService].desc}</p>
                            
                            <div className="row g-3 mt-4">
                                {servicesData[activeService].features.map((feat, i) => (
                                    <div key={i} className="col-md-6">
                                        <div className="feature-item-box d-flex align-items-center gap-3 p-3 rounded">
                                            <i className="fa-solid fa-check-circle" style={{color: '#fd6500'}}></i>
                                            <span className="fw-semibold text-white">{feat}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="steps-to-success-section mt-5 pt-5">
                                <div className="section-title text-center mb-5">
                                    <h2 className="fw-bold text-white display-6">{t("Uğura Gedən Addımlar", "Steps to Success", "Шаги к успеху")}</h2>
                                </div>
                                <div className="row g-4 justify-content-center">
                                    {[
                                        { id: "01", title: t("Ssenari", "Script", "Сценарий"), text: t("Hekayənin ana xətti hazırlanır.", "The main storyline is prepared.", "Готовится основная сюжетная линия.") },
                                        { id: "02", title: t("Kadr Siyahısı", "Shot List", "Список кадров"), text: t("Çəkiliş planı müəyyən edilir.", "The shooting plan is determined.", "Определяется план съемок.") },
                                        { id: "03", title: t("Hekayə", "Story", "История"), text: t("Vizual planlama aparılır.", "Visual planning is carried out.", "Проводится визуальное планирование.") },
                                        { id: "04", title: t("Məşqlər", "Rehearsals", "Репетиции"), text: t("Aktyor hazırlığı görülür.", "Actor preparation is done.", "Проводится подготовка актеров.") }
                                    ].map((step) => (
                                        <div key={step.id} className="col-md-6">
                                            <div className="step-item-dark p-4 rounded position-relative">
                                                <span className="step-num-dark position-absolute top-0 end-0 p-3 fw-bold">{step.id}</span>
                                                <h5 className="fw-bold text-white mb-3 mt-2">{step.title}</h5>
                                                <p className="text-muted-custom small mb-0">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;