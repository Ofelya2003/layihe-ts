import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/FilminWorks/FilmingServices.css"
import { useL } from "../../useL";

const FilmingServices: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const t = useL();

    const filmingServicesData = [
        { id: "01", title: t("Pre-Prodüksiyon", "Pre-Production", "Пре-продакшн"), desc: t("Layihənin planlaşdırılması, ssenari hazırlığı və çəkiliş öncəsi bütün hazırlıq mərhələləri.", "Project planning, script preparation, and all pre-filming stages.", "Планирование проекта, подготовка сценария и все этапы подготовки.") },
        { id: "02", title: t("Videoqrafiya", "Videography", "Видеография"), desc: t("Yüksək keyfiyyətli video çəkilişləri və vizual hekayə anlatımı.", "High-quality video shooting and visual storytelling.", "Высококачественная видеосъемка и визуальное повествование.") },
        { id: "03", title: t("Kinematoqrafiya", "Cinematography", "Кинематография"), desc: t("Bədii filmlər və reklamlar üçün peşəkar işıq və görüntü estetikası.", "Professional lighting and visual aesthetics for films and commercials.", "Профессиональное освещение и эстетика изображения.") },
        { id: "04", title: t("Avadanlıq İcarəsi", "Equipment Rental", "Аренда оборудования"), desc: t("Peşəkar çəkiliş kameraları, işıq və səs avadanlıqlarının icarəsi.", "Rental of professional cameras, lighting, and sound equipment.", "Аренда профессиональных камер, осветительного и звукового оборудования.") },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('f-services-reveal');
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="f-services-area" ref={sectionRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="f-services-title-box">
                            <span className="f-subtitle">{t("NƏ EDİRİK?", "WHAT WE DO?", "ЧТО МЫ ДЕЛАЕМ?")}</span>
                           <h2 className="f-title">{t("Təklif Etdiyimiz Ən Yaxşı Xidmətlər", "Best Services We Offer", "Лучшие услуги, которые мы предлагаем")}</h2>
                            <div className="f-round-arrow" onClick={() => navigate('/pages3')}>
                                <span>↗</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="f-services-list">
                            {filmingServicesData.map((item) => (
                                <div key={item.id} className="f-service-card" onClick={() => navigate('/pages3')}>
                                    <div className="f-service-number"><span>{item.id}</span></div>
                                    <div className="f-service-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="f-service-action">
                                        <button className="f-view-btn">{t("Daha Çox", "Read More", "Подробнее")} ↗</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmingServices;