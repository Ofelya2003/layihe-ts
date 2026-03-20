import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "../../assets/css/Blog/BlogWide.css";
import bgImage from '../../assets/image/backgroundpages.png'; 
import { useL } from "../../useL";

import BlogImg1 from "../../assets/image/Blogstandartone.jpg";
import BlogImg2 from "../../assets/image/blogstandartwo.png";
import BlogImg3 from "../../assets/image/blogstandartthree.png";

const BlogWide: React.FC = () => {
  const t = useL();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const widePosts = [
    {
      id: 1,
      title: t("Virtual İstehsalatın Gələcəyi", "The Future of Virtual Production", "Будущее производства"),
      cat: t("Texnologiya", "Technology", "Технологии"),
      date: "10 Mart, 2026",
      img: BlogImg1,
      desc: t(
        "Virtual istehsalat film çəkilişi haqqında düşüncələrimizi dəyişir. Artıq yaşıl ekranlara ehtiyac yoxdur, real vaxt rejimində mühitlər yaradılır.",
        "Virtual production is changing how we think about filmmaking. No more green screens, just real-time environments.",
        "Виртуальное производство меняет наше представление о кинопроизводстве."
      )
    },
    {
      id: 2,
      title: t("Səs Dizaynı Niyə Vacibdir?", "Why Sound Design is Essential", "Почему важен звуковой дизайн"),
      cat: t("Səs", "Audio", "Звук"),
      date: "05 Mart, 2026",
      img: BlogImg2,
      desc: t(
        "Səs tamaşaçını həqiqətən dünyanıza cəlb edən şeydir. Bir çox rejissor görüntüyə fokuslansa da, səs filmin 50%-ni təşkil edir.",
        "Sound is what truly immerses the audience into your world. While many focus on visuals, sound is 50% of your movie.",
        "Звук — это то, что по-настоящему погружает зрителя в ваш мир."
      )
    },
    {
      id: 3,
      title: t("Məhdud Büdcə ilə Müstəqil Film Çəkilişi", "Independent Filmmaking on a Tight Budget", "Независимое кинопроизводство"),
      cat: t("İstehsalat", "Production", "Производство"),
      date: "28 Fevral, 2026",
      img: BlogImg3,
      desc: t(
        "Yaxşı hekayə danışmaq üçün milyonlara ehtiyacınız yoxdur. Resurslarınızı necə maksimum dərəcədə istifadə edəcəyinizi öyrənin.",
        "You don't need millions to tell a great story. Learn how to maximize your resources and stay creative.",
        "Вам не нужны миллионы, чтобы рассказать отличную историю."
      )
    }
  ];

  return (
    <div className="blog-wide-page bg-white">
      <section className="page-breadcrumb-area" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${bgImage})`, 
        paddingTop: '180px', 
        paddingBottom: '120px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold text-white mb-3" data-aos="fade-down">
            {t("Geniş Bloq", "Blog Wide", "Широкий блог")}
          </h1>
          <nav aria-label="breadcrumb">
            <p className="text-orange text-uppercase fw-bold" style={{ letterSpacing: '2px' }} data-aos="fade-up">
              <Link to="/" className="text-white text-decoration-none">Home</Link> : {t("Geniş Bloq", "Blog Wide", "Широкий блог")}
            </p>
          </nav>
        </div>
      </section>

      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {widePosts.map((post) => (
              <div 
                key={post.id} 
                className="wide-post-card mb-5" 
                data-aos="fade-up"
              >
                <div className="row g-0 shadow-lg rounded-4 overflow-hidden border bg-white align-items-stretch">
                  
                  <div className="col-md-5 position-relative">
                    <div className="wide-img-wrapper h-100">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-100 h-100 main-wide-img" 
                        style={{ objectFit: 'cover', minHeight: '350px' }}
                      />
                      <div className="wide-cat-tag">
                        {post.cat}
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-center bg-white">
                    <div className="mb-2">
                      <span className="text-orange fw-bold small text-uppercase" style={{ letterSpacing: '1px' }}>
                        {post.date}
                      </span>
                    </div>
                    <h2 className="wide-post-title">
                       {post.title}
                    </h2>
                    <p className="wide-post-desc text-muted">
                      {post.desc}
                    </p>
                    <div className="mt-4">
                      <Link to={`/blog-1`} className="wide-read-more-btn">
                        {t("Tam Oxu", "Read Full Story", "Читать полностью")}
                        <span className="ms-2">→</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWide;