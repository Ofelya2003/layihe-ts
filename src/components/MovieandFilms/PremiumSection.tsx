import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCrown, FaStar } from "react-icons/fa";
import supabase from "../../utils/supabase";
import type { MovieType } from "../../types";
import "../../assets/css/MovieandFilms/premium.css";
import { useL } from "../../useL";

const PremiumSection = () => {
  const [premiumMovies, setPremiumMovies] = useState<MovieType[]>([]);
  const navigate = useNavigate();
  const t = useL();

  useEffect(() => {
    const fetchPremium = async () => {
      const { data } = await supabase.from("movies").select("*").limit(5);
      if (data) setPremiumMovies(data as MovieType[]);
    };
    fetchPremium();
  }, []);

  return (
    <section className="premium-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="premium-main-title">Premium</h2>
          <div className="d-flex align-items-center gap-3">
            <button onClick={() => navigate('/pages11')} className="view-all-text">{t("Hamısına Bax", "View All", "Смотреть все")}</button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          {premiumMovies.map((movie) => (
            <div key={movie.id} className="col">
              <div className="premium-card-custom" onClick={() => navigate(`/pages13/${movie.id}`)}>
                <div className="card-top">
                  <div className="crown-badge"><FaCrown /></div>
                  <img src={movie.image} alt={movie.title} className="card-img" />
                  <span className="duration-label">2:57:13</span>
                </div>
                <div className="card-bottom-info">
                  <h6 className="movie-name">{movie.title}</h6>
                  <div className="stars-row"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="empty" /></div>
                  <div className="stats-row">
                    <span>8 {t("dəq", "min", "мин")}</span>
                    <span className="divider">|</span>
                    <span>25k {t("baxış", "views", "просмотров")}</span>
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

export default PremiumSection;