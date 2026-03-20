import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {  FaRegClock, FaRegUser, FaRegComment } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/css/Blog/BlogDetails.css";
import { useL } from "../../useL";

import bgImage from '../../assets/image/backgroundpages.png';
import BlogImg1 from "../../assets/image/Blogstandartone.jpg";
import BlogImg4 from "../../assets/image/blogstandartwo.png";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const [scrollWidth, setScrollWidth] = useState(0);
  const t = useL();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <div className="blog-details-wrapper bg-white">
      <div className="scroll-progress-bar" style={{ width: `${scrollWidth}%` }}></div>

      <section className="blog-details-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${bgImage})` }}>
        <div className="container text-center position-relative" style={{zIndex: 2}}>
          <span className="text-orange fw-bold mb-2 d-block text-uppercase" style={{letterSpacing: '3px'}}>
            {t("İSTEHSALAT JURNALI", "PRODUCTION JOURNAL", "ПРОИЗВОДСТВЕННЫЙ ЖУРНАЛ")}
          </span>
          <h1 className="display-3 fw-bold text-white mb-3 text-uppercase">
            {t("BLOQ HEKAYƏSİ", "BLOG STORY", "БЛОГ-ИСТОРИЯ")}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center m-0">
              <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none">{t("Ana Səhifə", "Home", "Главная")}</Link></li>
              <li className="breadcrumb-item active text-white" aria-current="page">{t("Bloq Detalları", "Blog Details", "Детали блога")}</li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container py-5 mt-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <article className="blog-single-post">
              <div className="main-thumb mb-5 shadow-lg rounded-4 overflow-hidden" data-aos="fade-up">
                <img src={BlogImg1} alt="Post" className="img-fluid w-100 main-post-img" />
              </div>
              
              <div className="meta-info d-flex flex-wrap gap-4 mb-4 border-bottom pb-3" data-aos="fade-up">
                <span className="d-flex align-items-center gap-2 text-dark"><FaRegUser className="text-orange"/> Admin</span>
                <span className="d-flex align-items-center gap-2 text-dark"><FaRegClock className="text-orange"/> {t("14 May, 2026", "May 14, 2026", "14 Мая, 2026")}</span>
                <span className="d-flex align-items-center gap-2 text-dark"><FaRegComment className="text-orange"/> {t("03 Şərh", "03 Comments", "03 Комментария")}</span>
              </div>

              <div className="content-text" data-aos="fade-up">
                <h2 className="display-6 fw-bold mb-4 text-dark text-uppercase">
                  {t("Müasir Kinoda Hekayə Anlatma Sənəti", "The Art of Storytelling in Modern Cinema", "Искусство сторителлинга")}
                </h2>
                <p className="text-muted lead mb-4" style={{lineHeight: '1.8'}}>
                  {t(
                    "Film çəkmək sadəcə yüksək səviyyəli kameralardan ibarət deyil. Bu, hekayənin ruhu ilə bağlıdır.",
                    "Filmmaking isn't just about cameras. It's about the soul of the story.",
                    "Кинопроизводство — это не только камеры. Речь идет о душе истории."
                  )}
                </p>
                <div className="quote-box my-5 p-5 bg-light border-start border-5 border-orange" data-aos="fade-left">
                  <h4 className="fst-italic fw-normal text-dark mb-0">
                    {t(
                      "\"Bir hekayənin başlanğıcı, ortası və sonu olmalıdır.\"",
                      "\"A story should have a beginning, a middle and an end.\"",
                      "\"У истории должны быть начало, середина и конец.\""
                    )}
                  </h4>
                  <span className="d-block mt-3 fw-bold text-orange">— Jan-Lük Qodar</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <aside className="blog-sidebar ps-lg-4">
              

              <div className="sidebar-widget mb-5 p-4 bg-white shadow-sm border rounded-4">
                <h5 className="fw-bold mb-4 border-bottom pb-2 text-uppercase text-dark">{t("Son Hekayələr", "Recent Stories", "Последние истории")}</h5>
                <div className="recent-list">
                  <div className="recent-item d-flex align-items-center gap-3 mb-3 border-bottom pb-3">
                    <img src={BlogImg4} alt="recent" className="rounded" style={{width: '70px', height: '70px', objectFit: 'cover'}} />
                    <div className="recent-info">
                      <Link to="#" className="text-decoration-none text-dark fw-bold small hover-orange">
                        {t("Qara Cəngavərin pərdəarxası", "Behind the scenes", "За кулисами")}
                      </Link>
                      <span className="text-muted d-block small mt-1">12 May, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;