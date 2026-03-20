import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../assets/css/Pages/TeamDetails.css";
import bgImage from '../../assets/image/backgroundpages.png'; 

import teamimg from "../../assets/image/teamdetails.png";
import teamimg2 from "../../assets/image/teamdetails-2.png";
import teamimg3 from "../../assets/image/teamdetails-3.png";
import teamimg4 from "../../assets/image/teamdetilas-4.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useL } from "../../useL"; 

const TeamDetails: React.FC = () => {
    const { id } = useParams();
    const t = useL();

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
        window.scrollTo(0, 0);
    }, [id]);

    
    const steps = [
        { id: "01", title: t("Ssenari", "Script", "Сценарий"), desc: t("Bu mərhələlər film istehsalı prosesinin ümumi icmalı kimi mühüm əhəmiyyət kəsb edir.", "These stages are crucial as a general overview of the filmmaking process.", "Эти этапы имеют важное значение как общий обзор процесса кинопроизводства.") },
        { id: "02", title: t("Kadr Siyahısı", "Shot List", "Список кадров"), desc: t("Bu mərhələlər film istehsalı prosesinin ümumi icmalı kimi mühüm əhəmiyyət kəsb edir.", "These stages are crucial as a general overview of the filmmaking process.", "Эти этапы имеют важное значение как общий обзор процесса кинопроизводства.") },
        { id: "03", title: t("Hekayə (Story)", "Storyboarding", "Раскадровка"), desc: t("Bu mərhələlər film istehsalı prosesinin ümumi icmalı kimi mühüm əhəmiyyət kəsb edir.", "These stages are crucial as a general overview of the filmmaking process.", "Эти этапы имеют важное значение как общий обзор процесса кинопроизводства.") },
        { id: "04", title: t("Məşqlər", "Rehearsals", "Репетиции"), desc: t("Bu mərhələlər film istehsalı prosesinin ümumi icmalı kimi mühüm əhəmiyyət kəsb edir.", "These stages are crucial as a general overview of the filmmaking process.", "Эти этапы имеют важное значение как общий обзор процесса кинопроизводства.") }
    ];

    const productions = [
        teamimg,
        teamimg2,
        teamimg3, 
        teamimg4,
        teamimg2  
    ];

    return (
        <div className="team-details-page">
            
            <section className="page-breadcrumb-area" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bgImage})` }}>
                <div className="container text-center" data-aos="fade-down">
                    <h1 className="display-4 fw-bold text-white mb-3">
                        {t("Komanda Təfərrüatları", "Team Details", "Детали команды")}
                    </h1>
                    <p className="text-white-50 text-uppercase">
                        {t("Ana Səhifə", "Home", "Главная")} : {t("Komanda Təfərrüatları", "Team Details", "Детали команды")}
                    </p>
                </div>
            </section>

            
            <section className="profile-section py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="member-portrait-wrapper">
                                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Ledesma" className="img-fluid rounded shadow-lg" />
                            </div>
                        </div>
                        <div className="col-lg-7" data-aos="fade-left">
                            <div className="member-info-content">
                                <span className="text-orange text-uppercase fw-bold" style={{letterSpacing: '2px'}}>
                                    {t("Qrim Ustası", "Makeup Artist", "Гример")}
                                </span>
                                <h1 className="display-5 fw-bold text-white mb-4">Ledesma Mildred</h1>
                                <p className="text-white-50 mb-5 lead">
                                    {t("Mən kameradan asılı olmayaraq inanılmaz kinematoqrafik görüntülər yaratmaq üzrə ixtisaslaşmış dünya şöhrətli bir mütəxəssisəm.", "I am a world-renowned specialist specializing in creating incredible cinematographic images regardless of the camera.", "Я специалист с мировым именем, специализирующийся на создании невероятных кинематографических образов вне зависимости от камеры.")}
                                </p>
                                
                                <div className="member-socials-details d-flex gap-3 mb-5">
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                </div>

                                <h3 className="text-white fw-bold mb-4">{t("Bacarıqlarım", "My Skills", "Мои навыки")}</h3>
                                <div className="row text-center g-4">
                                    <div className="col-md-4 col-6">
                                        <div className="skill-item">
                                            <div className="circle-progress animate-90">
                                                <div className="inner-circle">90%</div>
                                            </div>
                                            <h6 className="text-white mt-3">{t("Qrim Konsepti", "Makeup Concept", "Концепция грима")}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="skill-item">
                                            <div className="circle-progress animate-70">
                                                <div className="inner-circle">70%</div>
                                            </div>
                                            <h6 className="text-white mt-3">{t("Səhnə Rəqsi", "Stage Dance", "Сценический танец")}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="skill-item">
                                            <div className="circle-progress animate-50">
                                                <div className="inner-circle">50%</div>
                                            </div>
                                            <h6 className="text-white mt-3">{t("Döyüş Rejissorluğu", "Fight Choreography", "Постановка боев")}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="skills-career-section py-5 bg-white">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="skill-box p-4">
                                <h2 className="fw-bold mb-4 text-dark">{t("Texniki Bacarıqlar", "Technical Skills", "Технические навыки")}</h2>
                                <p className="text-muted mb-4">{t("Mürəkkəb layihələrin davamlı texniki dəstəyi və idarə olunması üzrə geniş təcrübəyə malikəm.", "I have extensive experience in continuous technical support and management of complex projects.", "Я имею обширный опыт непрерывной технической поддержки и управления сложными проектами.")}</p>
                                {[
                                    {label: t("Müşahidə", "Observation", "Наблюдение"), val: '80%'},
                                    {label: t("Ssenari Təhlili", "Script Analysis", "Анализ сценария"), val: '70%'},
                                    {label: t("Çəkiliş Texnikası", "Filming Technique", "Техника съемки"), val: '95%'}
                                ].map((skill, idx) => (
                                    <div className="mb-4" key={idx}>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="fw-bold">{skill.label}</span>
                                            <span className="fw-bold text-orange">{skill.val}</span>
                                        </div>
                                        <div className="progress" style={{height: '6px'}}>
                                            <div className="progress-bar bg-orange" style={{width: skill.val}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="career-box p-4 h-100">
                                <h2 className="fw-bold mb-4 text-dark">{t("Karyera Prinsipləri", "Career Principles", "Принципы карьеры")}</h2>
                                <p className="text-muted mb-4">{t("Ən böyük istehsalat şirkətlərindən biri mağazalarında təftiş və texniki xidmət proseslərini avtomatlaşdırmalı idi.", "One of the largest production companies needed to automate inspection and maintenance processes in its stores.", "Одной из крупнейших производственных компаний потребовалось автоматизировать процессы проверки и технического обслуживания в своих магазинах.")}</p>
                                <p className="text-muted">{t("Biz mürəkkəb hesabatlar və texniki tələblər üçün peşəkar həllər təqdim edirik.", "We provide professional solutions for complex reports and technical requirements.", "Мы предоставляем профессиональные решения для сложных отчетов и технических требований.")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="steps-section py-5 bg-white border-top">
                <div className="container py-5">
                    <h2 className="text-center display-5 fw-bold mb-5 text-dark" data-aos="fade-up">
                        {t("Uğura Gedən Addımlar", "Steps to Success", "Шаги к успеху")}
                    </h2>
                    <div className="row g-4">
                        {steps.map((step, index) => (
                            <div key={step.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
                                <div className="step-card p-4 border rounded position-relative h-100 bg-white">
                                    <span className="step-number">{step.id}</span>
                                    <h4 className="fw-bold mt-3 text-dark">{step.title}</h4>
                                    <p className="text-muted small">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="featured-production-area py-5 bg-white border-top">
                <div className="container py-5">
                    <div className="section-title text-center mb-5" data-aos="fade-up">
                        <span className="text-orange text-uppercase fw-bold small" style={{letterSpacing: '2px'}}>
                            {t("Seçilmiş Prodüksiya", "Featured Production", "Избранное производство")}
                        </span>
                        <h2 className="display-5 fw-bold text-dark mt-2">
                            {t("Öndə Çıxan Layihələr", "Prominent Projects", "Выдающиеся проекты")}
                        </h2>
                    </div>
                    <div className="row g-3 align-items-center">
                        {productions.map((img, index) => (
                            <div key={index} className={index === 2 ? "col-lg-4 col-md-8 col-12" : "col-lg-2 col-md-4 col-6"} data-aos="zoom-in">
                                <div className={`production-card ${index === 2 ? 'featured-main' : ''}`}>
                                    <img src={img} alt="Prodüksiya" className="img-fluid rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamDetails;