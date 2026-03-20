import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import "../../assets/css/portfolio/PortfolioDetails.css";
import bgImage from '../../assets/image/backgroundpages.png';
import { useL } from "../../useL";

const PortfolioDetails: React.FC = () => {
    const { id } = useParams();
    const t = useL();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, [id]);

    const project = {
        title: t("Portfolio Təfərrüatları", "Portfolio Details", "Детали портфолио"),
        category: t("Kadr Arxası", "Behind the Scenes", "За кадром"),
        date: "20 Oktyabr, 2026",
        client: "Faime Production Studios",
        director: "Ledesma Mildred",
        location: t("Bakı, Azərbaycan", "Baku, Azerbaijan", "Баку, Азербайджан"),
        description: t(
            "Bu layihə işıq və kölgənin mürəkkəb balansına yönəlmişdir. Klassik nior hissi yaratmaq üçün yüksək kontrastlı işıqlandırma texnikalarından istifadə etdik.",
            "This project focused on the intricate balance of light and shadow. We used high-contrast lighting techniques to create a classic noir feel.",
            "Этот проект был сосредоточен на сложном балансе света и тени. Мы использовали технику высококонтрастного освещения для создания классического стиля нуар."
        ),
        challenge: t(
            "Əsas çətinlik, ardıcıl kölgə naxışlarını qoruyarkən təbii işıq keçidlərini idarə etmək idi.",
            "The main challenge was managing natural light transitions while maintaining consistent shadow patterns.",
            "Основная задача заключалась в управлении переходами естественного света при сохранении последовательного рисунка теней."
        ),
        mainImg: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg",
        gallery: [
            "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
            "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg",
            "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
        ]
    };

    return (
        <div className="portfolio-details-page ">
            <section className="page-breadcrumb-area" style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bgImage})`,
                paddingTop: '180px',
                paddingBottom: '100px'
            }}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">{project.title}</h1>
                    <p className="text-orange fw-bold">{t("Ana Səhifə", "Home", "Главная")} : {t("Portfolio Təfərrüatları", "Details", "Детали")}</p>
                </div>
            </section>

            <section className="details-content py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8" data-aos="fade-right">
                            <img src={project.mainImg} alt={project.title} className="img-fluid rounded shadow mb-5 w-100" />
                            <div className="project-story">
                                <h2 className="fw-bold mb-4">{t("Layihənin Hekayəsi", "Project Story", "История проекта")}</h2>
                                <p className="text-muted lead mb-5">{project.description}</p>
                                <h4 className="fw-bold mb-3">{t("Çətinliklər", "Challenges", "Вызовы")}</h4>
                                <p className="text-muted">{project.challenge}</p>
                            </div>
                            <div className="row g-3 mt-5">
                                {project.gallery.map((img, index) => (
                                    <div key={index} className="col-md-4">
                                        <img src={img} alt="gallery" className="img-fluid rounded shadow-sm" style={{height:'200px', objectFit:'cover', width:'100%'}} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-left">
                            <div className="project-info-sidebar p-4 rounded shadow-sm border">
                                {[
                                    { label: t("Kateqoriya", "Category", "Категория"), value: project.category },
                                    { label: t("Müştəri", "Client", "Клиент"), value: project.client },
                                    { label: t("Rejissor", "Director", "Режиссер"), value: project.director },
                                    { label: t("Tarix", "Date", "Дата"), value: project.date },
                                    { label: t("Məkan", "Location", "Место"), value: project.location }
                                ].map((item, idx) => (
                                    <div key={idx} className="info-item mb-3">
                                        <span className="text-orange d-block fw-bold small text-uppercase">{item.label}:</span>
                                        <span className="text-dark fw-bold">{item.value}</span>
                                    </div>
                                ))}
                                <Link to="/portfolio-1" className="btn btn-dark w-100 py-3 fw-bold mt-4">{t("QALEREYAYA QAYIT", "BACK TO GALLERY", "ВЕРНУТЬСЯ В ГАЛЕРЕЮ")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioDetails;