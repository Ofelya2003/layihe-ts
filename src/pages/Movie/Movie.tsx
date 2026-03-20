import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import supabase from '../../utils/supabase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/css/Movie/Movie.css";
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import bgImage from "../../assets/image/backgroundpages.png";
import { useL } from "../../useL";

const Movie: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 16; 
  const navigate = useNavigate();
  const t = useL();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
    
    const fetchMovies = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('movies').select('*');
      if (error) {
        console.error("Error fetching movies:", error);
      } else {
        setMovies(data || []);
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleDetailClick = (id: number) => {
    localStorage.setItem('selectedMovieId', String(id));
    navigate('/movie-details');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
        <div className="spinner-border text-orange" role="status">
          <span className="visually-hidden">Yüklənir...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-archive-page bg-black text-white min-vh-100">
     
      <section 
        className="common-hero d-flex align-items-center justify-content-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${bgImage})`,
          paddingTop: '180px',
          paddingBottom: '100px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center" data-aos="fade-down">
          <h1 className="display-3 fw-bold text-white mb-3">
            {t("Film Arxivi", "Movie Archive", "Архив фильмов")}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/" className="text-orange text-decoration-none">{t("Ana Səhifə", "Home", "Главная")}</Link>
              </li>
              <li className="breadcrumb-item active text-white opacity-75">{t("Filmlər", "Movies", "Фильмы")}</li>
            </ol>
          </nav>
        </div>
      </section>

     
      <div className="container py-5">
        <div className="row g-4">
          {currentMovies.length > 0 ? (
            currentMovies.map((movie) => (
              <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6" data-aos="zoom-in">
                <div className="movie-card-modern position-relative rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="img-fluid w-100" 
                    style={{ height: '400px', objectFit: 'cover' }} 
                  />
                  <div className="card-overlay d-flex flex-column justify-content-end p-3">
                    <div className="imdb-tag mb-2">
                      <FaStar className="text-warning me-1" /> {movie.rating}
                    </div>
                    <h6 className="fw-bold mb-1 text-white">{movie.title}</h6>
                    <p className="small text-white-50 mb-3">{movie.category}</p>
                    <button 
                      onClick={() => handleDetailClick(movie.id)} 
                      className="btn btn-orange btn-sm fw-bold w-100 py-2"
                    >
                      {t("Ətraflı Bax", "View Details", "Подробнее")}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 className="text-white-50">{t("Film tapılmadı", "No movies found", "Фильмы не найдены")}</h4>
            </div>
          )}
        </div>

     
        {totalPages > 1 && (
          <div className="pagination-container d-flex justify-content-center mt-5 gap-2">
            <button 
              disabled={currentPage === 1} 
              onClick={() => handlePageChange(currentPage - 1)} 
              className="page-btn nav-btn"
            >
              <FaChevronLeft />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i} 
                onClick={() => handlePageChange(i + 1)} 
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages} 
              onClick={() => handlePageChange(currentPage + 1)} 
              className="page-btn nav-btn"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;