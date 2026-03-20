import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/Pages/Team.css";
import bgImage from '../../assets/image/backgroundpages.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useL } from "../../useL"; 

const Team: React.FC = () => {
    const t = useL(); 
    
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    
    const teamMembers = [
        { 
            id: 1, 
            name: "Kristin Watson", 
            role: t("Təsisçi və CEO", "Founder & CEO", "Основатель и CEO"), 
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", 
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        },
        { 
            id: 2, 
            name: "Emma Johnson", 
            role: t("Baş Daşınmaz Əmlak Agenti", "Senior Real Estate Agent", "Старший агент по недвижимости"), 
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg", 
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        },
        { 
            id: 3, 
            name: "Sophia Davis", 
            role: t("Müştəri Əlaqələri Meneceri", "Customer Relations Manager", "Менеджер по работе с клиентами"), 
            image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg", 
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        },
        { 
            id: 4, 
            name: "James Wilson", 
            role: t("Aparıcı Broker", "Lead Broker", "Ведущий брокер"), 
            image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg", 
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        }
    ];

    return (
        <div className="team-page-wrapper">
          
            <section 
                className="page-breadcrumb-area" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="container text-center" data-aos="fade-down">
                    <h1 className="display-4 fw-bold text-white mb-3">
                        {t("Komandamız", "Our Team", "Наша команда")}
                    </h1>
                    <div className="breadcrumb-nav text-uppercase fw-semibold" style={{letterSpacing: '2px'}}>
                        <span className="text-white-50">{t("Ana Səhifə", "Home", "Главная")}</span>
                        <span style={{ color: '#fd6500' }} className="mx-2">:</span>
                        <span className="text-white">{t("Komanda", "Team", "Команда")}</span>
                    </div>
                </div>
            </section>

            
            <section className="team-section py-5">
                <div className="container py-5">
                    <div className="team-header text-center mb-5" data-aos="fade-up">
                        <h2 className="display-5 fw-bold text-white">
                            {t("Bizim Peşəkar Komanda", "Our Professional Team", "Наша профессиональная команда")}
                        </h2>
                        <p className="text-white-50">
                            {t("Uğurumuzun arxasında duran yaradıcı heyət", "The creative team behind our success", "Креативная команда нашего успеха")}
                        </p>
                    </div>
                    
                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div key={member.id} className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                                <div className="team-card h-100">
                                    <div className="team-img-wrapper position-relative overflow-hidden">
                                        <img src={member.image} alt={member.name} className="team-img" />
                                        
                                        
                                        <div className="video-overlay d-flex flex-column align-items-center justify-content-center gap-3">
                                            <a href={member.video} target="_blank" rel="noreferrer" className="play-button-main">
                                                <i className="bi bi-play-fill"></i>
                                            </a>
                                            
                                           
                                            <Link 
                                                to={`/pages5`} 
                                                className="details-link text-white text-decoration-none border border-white px-3 py-1"
                                                style={{borderRadius: '20px', fontSize: '13px', backgroundColor: 'rgba(255,255,255,0.1)'}}
                                            >
                                                {t("Ətraflı Bax", "View More", "Подробнее")}
                                            </Link>
                                        </div>

                                        <div className="team-socials">
                                            <i className="bi bi-linkedin"></i>
                                            <i className="bi bi-instagram"></i>
                                        </div>
                                    </div>
                                    <div className="team-info text-center mt-3">
                                        <h4 className="member-name">{member.name}</h4>
                                        <span className="member-role">{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;