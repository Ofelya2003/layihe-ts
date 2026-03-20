import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../../utils/supabase";
import "../../assets/css/Home/FeaturedFilms.css";
import { useL } from "../../useL";

const FeaturedFilms: React.FC = () => {
  const [films, setFilms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const t = useL();

  useEffect(() => {
    const fetchFilms = async () => {
      const { data, error } = await supabase.from('movies').select('*').limit(6);
      if (!error && data) setFilms(data);
      setLoading(false);
    };
    fetchFilms();
  }, []);

  if (loading) return <div className="text-center py-5 text-white">{t("Filmlər Yüklənir...", "Movies Loading...", "Загрузка фильмов...")}</div>;

  return (
    <section className="featured-films-section">
      <div className="container">
        <div className="text-center mb-5 pb-3">
          <span className="featured-subtitle">{t("İŞLƏRİM", "MY WORKS", "МОИ РАБОТЫ")}</span>
          <h2 className="featured-title text-white fw-bold">{t("Seçilmiş Filmlər.", "Featured Movies.", "Избранные фильмы.")}</h2>
        </div>
        <div className="row gx-5 gy-5">
          {films.length > 0 ? films.map((film, index) => (
            <div key={film.id} className={`col-lg-4 col-md-6 film-item-wrapper ${index % 2 !== 0 ? 'offset-y' : ''}`} onClick={() => navigate(`/movie/${film.id}`)}>
              <div className="film-card">
                <div className="film-poster-box">
                  <img src={film.image || film.image_url} alt={film.title} className="film-poster-img" />
                  <div className="film-overlay"><i className="bi bi-play-circle-fill"></i></div>
                </div>
                <div className="film-info mt-4">
                  <span className="film-category text-secondary small text-uppercase">{film.category || t("Kino", "Movie", "Кино")}</span>
                  <h4 className="film-name text-white fw-bold">{film.title}</h4>
                </div>
              </div>
            </div>
          )) : <div className="text-center text-secondary">{t("Heç bir film tapılmadı.", "No films found.", "Фильмы не найдены.")}</div>}
        </div>
      </div>
    </section>
  );
};
export default FeaturedFilms;