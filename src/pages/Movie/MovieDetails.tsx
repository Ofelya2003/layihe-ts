import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../utils/supabase';
import "../../assets/css/Movie/MovieDetails.css";
import { FaStar, FaCalendarAlt, FaLayerGroup, FaArrowLeft } from 'react-icons/fa';
import { useL } from "../../useL";

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const t = useL();

  useEffect(() => {
    const getMovie = async () => {
      const savedId = localStorage.getItem('selectedMovieId');
      if (savedId) {
        const { data, error } = await supabase
          .from('movies')
          .select('*')
          .eq('id', Number(savedId))
          .single();
        
        if (error) {
          console.error("Error fetching details:", error);
        } else {
          setMovie(data);
        }
      }
      setLoading(false);
    };
    getMovie();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Yüklənir...</span>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center py-5 bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div style={{height: '90px', width: '100%', background: '#000', position: 'fixed', top: 0, zIndex: 1000}}></div>
        <h2 className="mt-5 fw-bold">{t("Film seçilməyib", "No movie selected", "Фильм не выбран")}</h2>
        <Link to="/movie" className="btn btn-dark mt-3 px-4 py-2 rounded-pill shadow">
          <FaArrowLeft className="me-2" /> {t("Kinolar bölməsinə qayıt", "Back to Movies", "Вернуться к фильмам")}
        </Link>
      </div>
    );
  }

  return (
    <div className="details-white-page bg-light min-vh-100">
      
      <div className="header-spacer" style={{height: '90px', background: '#000'}}></div>

    
      <section 
        className="details-hero position-relative" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${movie.image})`,
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container text-center pt-4" style={{ zIndex: 2 }}>
          <h1 className="text-white fw-bold display-3 mb-3 text-uppercase shadow-text">{movie.title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center m-0">
              <li className="breadcrumb-item">
                <Link to="/movie" className="text-orange text-decoration-none fw-bold">
                  {t("Filmlər", "Movies", "Фильмы")}
                </Link>
              </li>
              <li className="breadcrumb-item active text-white opacity-75">{t("Təfərrüatlar", "Details", "Детали")}</li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-5">
         
          <div className="col-lg-4 mt-n5 position-relative" style={{ zIndex: 10 }}>
            <div className="bg-white p-4 shadow rounded-4 border sticky-top" style={{ top: '110px' }}>
              <img src={movie.image} className="img-fluid rounded-3 mb-4 shadow-sm w-100" alt={movie.title} />
              <h4 className="fw-bold text-dark border-bottom pb-2">{movie.title}</h4>
              <div className="mt-3">
                <div className="d-flex align-items-center mb-3">
                  <FaLayerGroup className="text-orange me-3" />
                  <div>
                    <small className="text-muted d-block">{t("Kateqoriya", "Category", "Категория")}</small>
                    <span className="fw-bold">{movie.category}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCalendarAlt className="text-orange me-3" />
                  <div>
                    <small className="text-muted d-block">{t("Buraxılış İli", "Release Year", "Год выпуска")}</small>
                    <span className="fw-bold">{movie.year}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaStar className="text-warning me-3" />
                  <div>
                    <small className="text-muted d-block">{t("Reytinq", "Rating", "Рейтинг")}</small>
                    <span className="fw-bold">{movie.rating} IMDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-8">
            <div className="bg-white p-5 shadow-sm rounded-4 mb-4 border" data-aos="fade-up">
              <h4 className="fw-bold mb-4 border-start border-warning border-4 ps-3 text-dark">
                {t("Filmin Süjeti", "Movie Plot", "Сюжет фильма")}
              </h4>
              <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {movie.description || t("Bu film üçün süjet məlumatı tezliklə əlavə olunacaq.", "Plot info for this movie will be added soon.", "Информация о сюжете этого фильма скоро будет добавлена.")}
              </p>
            </div>

         
            <div className="bg-white p-5 shadow-sm rounded-4 border" data-aos="fade-up">
              <h5 className="fw-bold mb-4">{t("Rəy Bildirin", "Leave a Comment", "Оставить отзыв")}</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control bg-light border-0 py-3" placeholder={t("Adınız", "Your Name", "Ваше имя")} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control bg-light border-0 py-3" placeholder={t("E-poçt ünvanınız", "Your Email", "Ваш Email")} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control bg-light border-0 py-3" rows={4} placeholder={t("Şərhinizi yazın...", "Write your comment...", "Напишите ваш комментарий...")}></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark px-5 py-3 rounded-pill fw-bold shadow-sm transition-hover">
                      {t("Mesajı Göndər", "Send Message", "Отправить сообщение")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;