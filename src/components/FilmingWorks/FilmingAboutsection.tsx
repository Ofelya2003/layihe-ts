import React, { useEffect, useState, useRef } from 'react';
import "../../assets/css/FilminWorks/FilmingAboutSection.css";
import mainAboutImg from "../../assets/image/Filmingworks-4.png";
import smallAboutImg from "../../assets/image/Filmingworks-5.png";
import { useL } from "../../useL";

const FilmingAboutSection: React.FC = () => {
    const [count, setCount] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const t = useL();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        
                        let start = 0;
                        const end = 10;
                        const duration = 2000;
                        const timer = setInterval(() => {
                            start += 1;
                            setCount(start);
                            if (start === end) clearInterval(timer);
                        }, duration / end);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section-wrapper" ref={sectionRef}>
            <div className="container-fluid p-0">
                <div className="row g-0 align-items-center">

                    
                    <div className="col-lg-6 position-relative overflow-hidden">
                        <div className="about-img-container reveal-item from-left">
                            <img src={mainAboutImg} alt="Video Production" className="main-img" />

                            <div className="experience-card anim-item">
                                <div className="exp-number">{count}</div>
                                <div className="exp-text">
                                    {t("İLLİK", "YEARS", "ЛЕТ")} <br /> 
                                    {t("TƏCRÜBƏ", "EXPERIENCE", "ОПЫТА")}
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-6 bg-black d-flex align-items-center">
                        <div className="about-content-box">
                            <span className="sub-title reveal-item fade-up">
                                {t("FAIME HAQQINDA", "ABOUT FAIME", "О FAIME")}
                            </span>
                            
                            <h2 className="about-main-title reveal-item fade-up-delay">
                                {t(
                                    "Yüksək Tələblərə Uyğun Video İstehsalı Şirkəti", 
                                    "High-Standard Video Production Company", 
                                    "Компания по производству видео высокого стандарта"
                                )}
                            </h2>
                            
                            <p className="about-desc reveal-item fade-up-delay-2">
                                {t(
                                    "İnanırıq ki, film və hərəkətli görüntülər əhəmiyyətli dəyişiklik yaratmaq gücünə malikdir. Biz brendlərə bu gücü dərk etməyə, agentliklərə isə kreativ baxışlarını reallaşdırmağa kömək edirik.", 
                                    "We believe that film and motion pictures have the power to create significant change. We help brands realize this power and agencies realize their creative vision.", 
                                    "Мы верим, что кино и движущиеся изображения способны на значительные перемены. Мы помогаем брендам осознать эту силу, а агентствам — реализовать их творческое видение."
                                )}
                            </p>

                            <div className="about-footer-action reveal-item fade-up-delay-3">
                                <div className="play-btn-wrap">
                                    <div className="play-circle">
                                        <div className="play-arrow"></div>
                                    </div>
                                </div>

                                <div className="small-arch-box">
                                    <img src={smallAboutImg} alt="Team" />
                                    <div className="play-icon-overlay">▶</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FilmingAboutSection;