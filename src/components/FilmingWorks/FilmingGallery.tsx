import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/css/FilminWorks/FilmingGallery.css";


import img1 from "../../assets/image/Filmingallery-1.png";
import img2 from "../../assets/image/FilmingGallery-2.png";
import img3 from "../../assets/image/FilmingGallery-3.png";
import img4 from "../../assets/image/FilmingGallery-4.png";
import { useL } from "../../useL";

const FilmingGallery: React.FC = () => {
    const navigate = useNavigate();
    const t = useL();

    useEffect(() => {
        AOS.init({ duration: 1200, once: false, offset: 150 });
    }, []);

    return (
        <section className="f-gallery-section">
            <div className="container">
                {/* 1. Başlıq Seksiyası */}
                <div className="f-gallery-header text-center" data-aos="fade-up">
                    <span className="f-subtitle">
                        {t("SEÇİLMİŞ LAYİHƏLƏR", "SELECTED PROJECTS", "ИЗБРАННЫЕ ПРОЕКТЫ")}
                    </span>
                    <h2 className="f-title">
                        {t("Uğurlu İşlərimiz", "Our Successful Works", "Наши успешные работы")}
                    </h2>
                </div>

                <div className="f-gallery-grid">
                    
                    <div className="row justify-content-start mb-5">
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="f-gallery-item" onClick={() => navigate('/pages3')}>
                                <img src={img1} alt="Project 1" />
                                <div className="f-gallery-overlay">
                                    <div className="f-overlay-info">
                                        <span className="f-cat">{t("AKSİYON", "ACTION", "ЭКШН")}</span>
                                        <h4 className="f-proj-title">DANGAL LOVE</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="row justify-content-end mb-5">
                        <div className="col-lg-5" data-aos="fade-left">
                            <div className="f-gallery-item" onClick={() => navigate('/pages3')}>
                                <img src={img2} alt="Project 2" />
                                <div className="f-gallery-overlay">
                                    <div className="f-overlay-info">
                                        <span className="f-cat">{t("ELMİ-FANTASTİKA", "SCI-FI", "НАУЧНАЯ ФАНТАСТИКА")}</span>
                                        <h4 className="f-proj-title">SPIDER HERO</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row justify-content-start mb-5">
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="f-gallery-item" onClick={() => navigate('/pages3')}>
                                <img src={img3} alt="Project 3" />
                                <div className="f-gallery-overlay">
                                    <div className="f-overlay-info">
                                        <span className="f-cat">{t("DRAM", "DRAMA", "ДРАМА")}</span>
                                        <h4 className="f-proj-title">CITY NIGHTS</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row justify-content-end">
                        <div className="col-lg-8 last-row-container" data-aos="fade-left">

                            <div className="f-gallery-item last-item-size" onClick={() => navigate('/pages3')}>
                                <img src={img4} alt="Project 4" />
                                <div className="f-gallery-overlay">
                                    <div className="f-overlay-info">
                                        <span className="f-cat">{t("TRİLLER", "THRILLER", "ТРИЛЛЕР")}</span>
                                        <h4 className="f-proj-title">WAR ZONE</h4>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="f-spinning-btn-box" onClick={() => navigate('/pages2')}>
                                <div className="f-spinning-container">
                                    <svg className="f-spinning-svg" viewBox="0 0 100 100">
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                        <text>
                                            <textPath xlinkHref="#circlePath" className="spinning-text">
                                                • {t("BÜTÜN İSTEHSALATA BAX", "VIEW ALL PRODUCTIONS", "СМОТРЕТЬ ВСЕ ПРОДУКЦИИ")} • {t("BÜTÜN İSTEHSALATA BAX", "VIEW ALL", "ВСЕ")}
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="f-arrow-icon">↗</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmingGallery;