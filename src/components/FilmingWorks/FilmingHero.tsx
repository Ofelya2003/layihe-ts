import React, { useEffect, useRef } from 'react';
import "../../assets/css/FilminWorks/FilmingHero.css";
import storyImg1 from "../../assets/image/Filmingworks-2.png";
import storyImg2 from "../../assets/image/Filmingworks-3.png";
import { useL } from "../../useL";

const FilmingHero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const t = useL();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active-animation');
                    }
                });
            },
            { threshold: 0.1 }
        );
        const animItems = heroRef.current?.querySelectorAll('.anim-element');
        animItems?.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="filming-hero-wrapper" ref={heroRef}>
           

            <div className="container-fluid px-lg-5">
                <div className="row align-items-center vh-100">
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="arch-image-box left-arch anim-element fade-in-only">
                            <img src={storyImg1} alt="Production" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-lg-6 text-center">
                        <div className="hero-text-content">
                            <div className="director-tag anim-element from-right-slow">
                                <span>{t("ƏN YAXŞI REJİSSOR", "BEST DIRECTOR", "ЛУЧШИЙ РЕЖИССЕР")}</span>
                            </div>
                            <h1 className="main-hero-title anim-element from-right-fast">
                                {t("DAHA BÖYÜK", "WE TELL BIGGER", "МЫ РАССКАЗЫВАЕМ")} <br /> 
                                {t("HEKAYƏLƏR DANIŞIRIQ", "STORIES", "БОЛЬШИЕ ИСТОРИИ")}
                            </h1>

                            <p className="hero-subtext anim-element from-right-slow">
                                {t("Faime Production, müxtəlif bədii sahələrdə çalışan istedadlı rejissorları bir araya gətirən, İndoneziya və Sinqapur mərkəzli tam xidmətli istehsalat evidir.", 
                                   "Faime Production is a full-service production house based in Indonesia and Singapore, bringing together talented directors across various artistic fields.", 
                                   "Faime Production — это полносервисная производственная компания, базирующаяся в Индонезии и Сингапуре, объединяющая талантливых режиссеров.")}
                            </p>

                            <div className="hero-btn-container anim-element from-right-slow">
                                <button className="faime-explore-btn">
                                    {t("İndi Kəşf Et", "Explore Now", "Исследуй сейчас")} <span className="ms-1">↗</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="arch-image-box right-arch anim-element fade-in-only">
                            <img src={storyImg2} alt="Filming" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmingHero;