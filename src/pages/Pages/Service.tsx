import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/Pages/Services.css";
import bgImage from '../../assets/image/backgroundpages.png';
import { useL } from "../../useL";

const Services: React.FC = () => {
    const t = useL();

    useEffect(() => {
        const revealElements = () => {
            const elements = document.querySelectorAll('.reveal-up');
            elements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 100) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealElements);
        revealElements();
        return () => window.removeEventListener('scroll', revealElements);
    }, []);

    const serviceList = [
        { 
            id: 1, 
            title: t("Çəkiliş Xidməti", "Filming Service", "Съемочные услуги"), 
            desc: t("İnsanların razı qalacağı qərarlar vermək lazım gəldikdə, təcrübəmizlə fərq yaradırıq.", "We make a difference with our experience when it comes to satisfying decisions.", "Мы меняем ситуацию благодаря нашему опыту, когда нужно принимать решения."), 
            icon: "🎬" 
        },
        { 
            id: 2, 
            title: t("Animasiya", "Animation", "Анимация"), 
            desc: t("Verilən şansları dəyərləndirmək və onları vizual sənətə çevirmək bizim işimizdir.", "Evaluating chances and turning them into visual art is our job.", "Наша работа — оценивать шансы и превращать их в визуальное искусство."), 
            icon: "🎞️" 
        },
        { 
            id: 3, 
            title: t("Blokbasterlər", "Blockbusters", "Блокбастеры"), 
            desc: t("Böyük büdcəli layihələrin peşəkar şəkildə idarə olunmasını təmin edirik.", "We ensure professional management of large-budget projects.", "Мы обеспечиваем профессиональное управление крупнобюджетными проектами."), 
            icon: "🎥" 
        }
    ];

    return (
        <div className="service-page-dark overflow-hidden">
            <section className="page-breadcrumb-area" style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${bgImage})`,
                paddingTop: '220px' 
            }}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">{t("Xidmətlər", "Services", "Услуги")}</h1>
                    <div className="breadcrumb-nav d-flex justify-content-center align-items-center gap-2">
                        <span className="text-white-50">{t("Ana Səhifə", "Home", "Главная")}</span>
                        <span style={{ color: '#fd6500' }}>:</span>
                        <span className="text-white">{t("Xidmətlər", "Services", "Услуги")}</span>
                    </div>
                </div>
            </section>

            <section className="expertise-intro text-center pt-5 mt-5 reveal-up">
                <div className="container">
                    <h2 className="display-5 fw-bold text-white mb-5">{t("Ən Yaxşı Təcrübələrimiz", "Our Best Practices", "Наши лучшие практики")}</h2>
                </div>
            </section>

            <section className="pb-5 mb-5">
                <div className="container">
                    <div className="row g-4">
                        {serviceList.map((service, index) => (
                            <div key={service.id} className="col-lg-4 col-md-6 reveal-up" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="service-card-modern p-5 text-start h-100">
                                    <div className="service-icon-box mb-4">
                                        <span style={{fontSize: '45px'}}>{service.icon}</span>
                                    </div>
                                    <h4 className="fw-bold text-white mb-3">{service.title}</h4>
                                    <p className="text-muted-custom mb-4">{service.desc}</p>
                                    <Link to="/pages3" className="view-more-link d-flex align-items-center gap-2">
                                        {t("Daha Ətraflı", "Read More", "Подробнее")} <i className="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;