import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/css/FilminWorks/LatestBlog.css";


import blog1 from "../../assets/image/Latest-1.png";
import blog2 from "../../assets/image/Latest-2.png";
import blog3 from "../../assets/image/Latest-3.png";
import { useL } from "../../useL";

const LatestBlog: React.FC = () => {
    const navigate = useNavigate();
    const t = useL();

   
    const blogData = [
        {
            id: 1,
            date: t("15 Mart 2026", "March 15, 2026", "15 Марта 2026"),
            title: t(
                "Kinematoqrafiyada İşıq Texnikası: Dramatik Atmosfer Necə Yaradılır?", 
                "Lighting Techniques: How to Create Dramatic Atmosphere?", 
                "Техника освещения: Как создать драматическую атмосферу?"
            ),
            desc: t(
                "Düzgün işıqlandırma hekayənin emosional yükünü artırır. Biz bu yazıda kölgə və işıq balansının sirlərini açırıq.", 
                "Proper lighting increases the emotional impact of a story. In this post, we reveal the secrets of shadow and light balance.", 
                "Правильное освещение усиливает эмоциональную нагрузку истории. В этой статье мы раскрываем секреты баланса тени и света."
            ),
            img: blog1
        },
        {
            id: 2,
            date: t("12 Mart 2026", "March 12, 2026", "12 Марта 2026"),
            title: t(
                "Rejissor Kreslosunda İlk Addım: Ssenaridən İlk Kadra Qədər", 
                "First Steps in the Director's Chair: From Script to First Frame", 
                "Первые шаги в режиссерском кресле: от сценария до первого кадра"
            ),
            desc: t(
                "İdeyadan çəkiliş meydançasına qədər keçən mürəkkəb yol və bir rejissorun qarşılaşdığı əsas çətinliklər.", 
                "The complex journey from idea to the film set and the main challenges a director faces.", 
                "Сложный путь от идеи до съемочной площадки и основные трудности, с которыми сталкивается режиссер."
            ),
            img: blog2
        },
        {
            id: 3,
            date: t("10 Mart 2026", "March 10, 2026", "10 Марта 2026"),
            title: t(
                "Müasir Montajın Qaydaları: Hekayəni Kəsiklərlə Necə Danışmalı?", 
                "Rules of Modern Editing: How to Tell a Story with Cuts", 
                "Правила современного монтажа: как рассказать историю через склейки"
            ),
            desc: t(
                "Montaj sadəcə videoların birləşdirilməsi deyil, filmin ritmini və nəfəsini müəyyən edən ən mühüm mərhələdir.", 
                "Editing is not just joining videos, it's the most important stage that determines the rhythm and breath of the film.", 
                "Монтаж — это не просто соединение видео, это важнейший этап, определяющий ритм и дыхание фильма."
            ),
            img: blog3
        }
    ];

    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    }, []);

    return (
        <section className="latest-blog-section">
            <div className="container">
                
                <div className="blog-header d-flex justify-content-between align-items-end" data-aos="fade-up">
                    <div>
                        <span className="b-subtitle">
                            {t("SON XƏBƏRLƏR", "LATEST NEWS", "ПОСЛЕДНИЕ НОВОСТИ")}
                        </span>
                        <h2 className="b-title">
                            {t("Faime-dən Son Yazılar", "Latest Posts from Faime", "Последние записи от Faime")}
                        </h2>
                    </div>
                    <button className="view-all-btn" onClick={() => navigate('/blog')}>
                        {t("Hamısına Bax", "View All", "Смотреть все")} ↗
                    </button>
                </div>

               
                <div className="blog-list">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="blog-item" data-aos="fade-right">
                            <div className="row align-items-center">
                                
                               
                                <div className="col-md-4">
                                    <div className="blog-img-wrap" onClick={() => navigate(`/blog`)}>
                                        <img src={blog.img} alt="Blog Cover" />
                                    </div>
                                </div>

                               
                                <div className="col-md-7">
                                    <div className="blog-info">
                                        <span className="blog-date">{blog.date}</span>
                                        <h3 className="blog-item-title" onClick={() => navigate(`/blog`)}>
                                            {blog.title}
                                        </h3>
                                        <p className="blog-desc">{blog.desc}</p>
                                    </div>
                                </div>

                               
                                <div className="col-md-1 text-end d-none d-md-block">
                                    <div className="blog-arrow-circle" onClick={() => navigate(`/blog`)}>
                                        ↗
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LatestBlog;