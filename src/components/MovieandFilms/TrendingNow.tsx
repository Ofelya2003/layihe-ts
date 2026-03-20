import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";
import supabase from "../../utils/supabase";
import type { MovieType } from "../../types";
import "../../assets/css/MovieandFilms/trending.css";
import { useL } from "../../useL";

const TrendingNow = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const navigate = useNavigate();
  const t = useL();

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await supabase.from("movies").select("*").limit(4);
      if (data) setMovies(data as MovieType[]);
    };
    fetchMovies();
  }, []);

  return (
    <section className="trending-section py-5 bg-black">
      <div className="container">
        <h2 className="text-white fw-bold mb-4">{t("İndi Trenddə", "Trending Now", "Сейчас в тренде")}</h2>
        <div className="row g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-3">
              <div className="faime-card" onClick={() => navigate(`/movie/${movie.id}`)}>
                <div className="card-img-box">
                  <img src={movie.image} alt={movie.title} />
                  <div className="hover-overlay"><FaPlay className="play-icon" /></div>
                </div>
                <div className="card-info bg-white p-3">
                  <h5 className="text-black fw-bold mb-1">{movie.title}</h5>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="stars text-warning small"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <span className="text-muted small">8 {t("dəq", "min", "мин")} | 25k {t("baxış", "views", "просмотров")}</span>
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

export default TrendingNow;