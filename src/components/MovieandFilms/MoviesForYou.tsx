import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaChevronDown } from "react-icons/fa";
import supabase from "../../utils/supabase";
import type { MovieType } from "../../types";
import "../../assets/css/MovieandFilms/moviesforyou.css";
import { useL } from "../../useL";

const MoviesForYou = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const t = useL();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("movies").select("category");
      if (data) {
        const uniqueCats = Array.from(new Set(data.map((m: any) => m.category)));
        setCategories(["All", ...uniqueCats.slice(0, 5)]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      let query = supabase.from("movies").select("*");
      if (activeFilter !== "All") query = query.eq("category", activeFilter);
      const { data } = await query.limit(8); 
      if (data) setMovies(data as MovieType[]);
      setLoading(false);
    };
    fetchMovies();
  }, [activeFilter]);

  return (
    <section className="movies-foryou-section py-5 bg-black">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="text-white fw-bold">{t("Sizin üçün Filmlər", "Movies For You", "Фильмы для вас")}</h2>
          <div className="filter-container">
            <div className="filter-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="text-uppercase small fw-bold">
                {t("Filtr", "Filter", "Фильтр")}: <span style={{ color: "#fd6500" }}>{activeFilter}</span>
              </span>
              <FaChevronDown className={`ms-2 ${isDropdownOpen ? 'rotate' : ''}`} />
            </div>
            {isDropdownOpen && (
              <ul className="filter-menu">
                {categories.map((cat) => (
                  <li key={cat} className={activeFilter === cat ? "active" : ""} onClick={() => { setActiveFilter(cat); setIsDropdownOpen(false); }}>
                    {cat === "All" ? t("Hamısı", "All", "Все") : cat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ${loading ? 'opacity-50' : ''}`}>
          {movies.map((movie) => (
            <div key={movie.id} className="col">
              <div className="mfy-card" onClick={() => navigate(`/pages13/${movie.id}`)}>
                <div className="mfy-img-box">
                  <img src={movie.image} alt={movie.title} />
                  <div className="mfy-badge">1:57:13</div>
                </div>
                <div className="mfy-info bg-white">
                  <h6 className="text-black fw-bold mb-1 text-truncate">{movie.title}</h6>
                  <div className="mfy-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="empty" /></div>
                  <div className="mfy-footer">
                    <span>{movie.category}</span>
                    <span className="dot"></span>
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

export default MoviesForYou;