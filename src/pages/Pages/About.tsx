import React, { useEffect } from 'react';
import "../../assets/css/Pages/About.css";
import bgImage from '../../assets/image/backgroundpages.png';
import Aboutus from "../../assets/image/Aboutus.jpg";
import { useL } from "../../useL"; 

const About: React.FC = () => {
    const t = useL(); 

    useEffect(() => {
        const revealElements = () => {
            const elements = document.querySelectorAll('.reveal-up, .reveal-left');
            elements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealElements);
        revealElements(); 

        return () => window.removeEventListener('scroll', revealElements);
    }, []);

    return (
        <div className="about-page bg-black text-white overflow-hidden">

            
            <section
                className="about-breadcrumb-area"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.95)), url(${bgImage})`
                }}
            >
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1 className="display-3 fw-bold text-white mb-2">{t("Haqqımızda", "About Us", "О нас")}</h1>
                            <div className="breadcrumb-nav">
                                <span style={{ color: '#fd6500' }}>{t("Ana Səhifə", "Home", "Главная")}</span>
                                <span className="text-white-50 mx-2">:</span>
                                <span className="text-white">{t("Haqqımızda", "About Us", "О нас")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 my-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 reveal-up">
                            <div className="about-img-box position-relative">
                                <img src={Aboutus} alt="About" className="img-fluid shadow-lg about-main-img" />
                                <div className="about-corner-decoration"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 reveal-up" style={{ transitionDelay: '0.3s' }}>
                            <span className="text-uppercase small fw-bold" style={{ color: '#fd6500', letterSpacing: '2px' }}>{t("Haqqımızda", "About Us", "О нас")}</span>
                            <h2 className="display-5 fw-bold mt-2 mb-4">
                                {t("Biz Həmişə Ən Yaxşı Kinonu Yaradırıq", "We Always Create The Best Cinema", "Мы всегда создаем лучшее кино")}
                            </h2>
                            <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '17px' }}>
                                {t(
                                    "Faime dünya səviyyəli film istehsalı və yaradıcı agentlikdir. Biz kinematoqrafik hekayə anlatımı və yüksək keyfiyyətli vizual məzmun üzrə ixtisaslaşmışıq.",
                                    "Faime is a world-class film production and creative agency. We specialize in cinematic storytelling and high-quality visual content.",
                                    "Faime — это киностудия и креативное агентство мирового уровня. Мы специализируемся на кинематографическом повествовании и высококачественном визуальном контенте."
                                )}
                            </p>
                            <button className="btn rounded-0 px-4 py-3 fw-bold cta-btn">{t("DAHA ÇOX ÖYRƏN", "LEARN MORE", "УЗНАТЬ БОЛЬШЕ")}</button>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="py-5" style={{ backgroundColor: '#080808' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 reveal-up">
                            <h3 className="fw-bold mb-4">{t("Bacarıqlarımız", "Our Skills", "Наши навыки")}</h3>
                            <div className="skill-item mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="small text-uppercase fw-bold">{t("Videoqrafiya", "Videography", "Видеография")}</span>
                                    <span className="small" style={{ color: '#fd6500' }}>90%</span>
                                </div>
                                <div className="progress rounded-0" style={{ height: '4px', backgroundColor: '#222' }}>
                                    <div className="progress-bar" style={{ width: '90%', backgroundColor: '#fd6500' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 reveal-up" style={{ transitionDelay: '0.4s' }}>
                            <div className="row g-4 text-center">
                                <div className="col-6">
                                    <div className="stat-box">
                                        <h2 className="stat-number">20+</h2>
                                        <p className="small text-secondary">{t("İllik Təcrübə", "Years Experience", "Лет опыта")}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="stat-box">
                                        <h2 className="stat-number">1,000+</h2>
                                        <p className="small text-secondary">{t("Tamamlanmış Layihə", "Projects Completed", "Завершенных проектов")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="py-5 my-5">
                <div className="container">
                    <div className="text-center mb-5 overflow-hidden">
                        <span className="text-uppercase small fw-bold reveal-left" style={{ color: '#fd6500' }}>{t("Yaradıcı Beyinlər", "Creative Minds", "Творческие умы")}</span>
                        <h2 className="display-5 fw-bold mt-2 reveal-left" style={{ transitionDelay: '0.2s' }}>{t("Peşəkar Komanda", "Professional Team", "Профессиональная команда")}</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4 reveal-left" style={{ transitionDelay: '0.3s' }}>
                            <div className="team-card text-center">
                                <div className="team-img-wrapper mb-3">
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974" alt="Director" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-1">Alex Rivers</h5>
                                <p className="small text-secondary text-uppercase">{t("Film Rejissoru", "Film Director", "Кинорежиссер")}</p>
                            </div>
                        </div>
                        <div className="col-md-4 reveal-left" style={{ transitionDelay: '0.5s' }}>
                            <div className="team-card text-center">
                                <div className="team-img-wrapper mb-3">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" alt="Cinematographer" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-1">Mark Hoffman</h5>
                                <p className="small text-secondary text-uppercase">{t("Kinoperator", "Cinematographer", "Кинооператор")}</p>
                            </div>
                        </div>
                        <div className="col-md-4 reveal-left" style={{ transitionDelay: '0.7s' }}>
                            <div className="team-card text-center">
                                <div className="team-img-wrapper mb-3">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070" alt="Editor" className="img-fluid" />
                                </div>
                                <h5 className="fw-bold mb-1">Sarah Jenkins</h5>
                                <p className="small text-secondary text-uppercase">{t("Baş Redaktor (Montaj)", "Chief Editor", "Главный редактор")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5" style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', backgroundColor: '#050505', overflow: 'hidden' }}>
                <div className="container-fluid px-0">
                    <div className="partner-slider">
                        <div className="partner-track">
                            <span>NETFLIX</span><span>SONY</span><span>DISNEY</span><span>WARNER BROS</span><span>PARAMOUNT</span><span>UNIVERSAL</span>
                            <span>NETFLIX</span><span>SONY</span><span>DISNEY</span><span>WARNER BROS</span><span>PARAMOUNT</span><span>UNIVERSAL</span>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="cta-banner py-5 text-center" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070')`,
                backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 0'
            }}>
                <div className="container py-5 reveal-up">
                    <h2 className="display-4 fw-bold mb-4">{t("Mükəmməl Kadrı Çəkmək Üçün Biz Həmişə Hazırıq", "We Are Always Ready To Capture The Perfect Shot", "Мы всегда готовы запечатлеть идеальный кадр")}</h2>
                    <button className="btn rounded-0 px-5 py-3 fw-bold cta-btn">{t("İNDİ BAŞLA", "START NOW", "НАЧАТЬ СЕЙЧАС")}</button>
                </div>
            </section>

        </div>
    );
};

export default About;