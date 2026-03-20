import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "../../assets/css/portfolio/Gallery.css";
import bgImage from '../../assets/image/backgroundpages.png'; 
import { useL } from "../../useL";

const Gallery: React.FC = () => {
    const t = useL();
    const [filter, setFilter] = useState('Hamısı');

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    const galleryData = [
        { 
            id: 1, 
            title: t("Kinematoqrafik İşıqlandırma", "Cinematic Lighting", "Кинематографическое освещение"), 
            category: "Kadr Arxası", 
            description: t("Dramatik bir nior atmosferi yaratmaq üçün kölgələrin oyununa fokuslanırıq.", "Focusing on the play of shadows to create a dramatic noir atmosphere.", "Фокусируемся на игре теней для создания драматической атмосферы нуара."),
            img: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg" 
        },
        { 
            id: 2, 
            title: t("Şəhər Hekayələri", "Urban Stories", "Городские истории"), 
            category: "Film Kadrlara", 
            description: t("Son küçə üslublu prodüksiyamızda şəhər həyatının xam mahiyyətini çəkirik.", "Capturing the raw essence of city life in our latest street-style production.", "Запечатлеваем истинную сущность городской жизни в нашей последней постановке."),
            img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg" 
        },
        { 
            id: 3, 
            title: t("Çəkiliş Öncesi Görüş", "Pre-shoot Meeting", "Предсъемочная встреча"), 
            category: "Kadr Arxası", 
            description: t("İdeyaların ssenariyə çevrildiyi yer. Yaradıcı komandamızın beyin fırtınası sessiyası.", "Where ideas turn into scripts. Our creative team's brainstorming session.", "Где идеи превращаются в сценарии. Мозговой штурм нашей творческой команды."),
            img: "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg" 
        },
        { 
            id: 4, 
            title: t("Qızıl Saat Çəkilişi", "Golden Hour Shoot", "Съемка в золотой час"), 
            category: "Film Kadrlara", 
            description: t("Final kadrına istilik və emosiya qatmaq üçün təbii işıqdan istifadə edirik.", "Using natural light to add warmth and emotion to the final shot.", "Использование естественного света для придания тепла и эмоций финальному кадру."),
            img: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg" 
        },
    ];

    const filteredData = filter === 'Hamısı' ? galleryData : galleryData.filter(item => item.category === filter);

    return (
        <div className="gallery-page bg-white">
            <section className="page-breadcrumb-area" style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bgImage})`,
                paddingTop: '180px',
                paddingBottom: '100px'
            }}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">{t("Qalereya", "Gallery", "Галерея")}</h1>
                    <p className="text-orange fw-bold">{t("Ana Səhifə", "Home", "Главная")} : {t("Qalereya", "Gallery", "Галерея")}</p>
                </div>
            </section>

            <section className="gallery-main py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="text-orange fw-bold text-uppercase" style={{letterSpacing:'2px'}}>{t("Layihələri Filtrlə", "Filter Projects", "Фильтр проектов")}</span>
                        <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                            {['Hamısı', 'Kadr Arxası', 'Film Kadrlara'].map(cat => (
                                <button 
                                    key={cat}
                                    className={`gallery-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat === 'Hamısı' ? t("Hamısı", "All", "Все") : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredData.map((item) => (
                            <div key={item.id} className="col-lg-6 col-md-6" data-aos="fade-up">
                                <div className="gallery-card shadow-sm border rounded overflow-hidden">
                                    <div className="gallery-img-box position-relative">
                                        <img src={item.img} alt={item.title} className="w-100" style={{height:'400px', objectFit:'cover'}} />
                                        <div className="gallery-badge">{item.category}</div>
                                    </div>
                                    <div className="gallery-content p-4">
                                        <h3 className="fw-bold">{item.title}</h3>
                                        <p className="text-muted mb-4">{item.description}</p>
                                        <Link to={`/portfolio-2`} className="read-more-link text-decoration-none fw-bold" style={{color: '#fd6500'}}>
                                            {t("LAYİHƏNİN HEKAYƏSİNƏ BAX", "VIEW PROJECT STORY", "СМОТРЕТЬ ИСТОРИЮ ПРОЕКТА")} →
                                        </Link>
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

export default Gallery;