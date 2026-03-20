import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";
import "../../assets/css/MovieandFilms/genres.css";
import { useL } from "../../useL";

const BrowseByGenre = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();
  const t = useL();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("movies").select("category");
      if (data) {
        const uniqueCats = Array.from(new Set(data.map((m: any) => m.category)))
          .filter(Boolean)
          .slice(0, 6);
        setCategories(uniqueCats);
      }
    };
    fetchCategories();
  }, []);

  const getGenreClass = (index: number) => {
    const classes = ["g-action", "g-drama", "g-adventure", "g-cartoon", "g-comedy", "g-horror"];
    return classes[index % classes.length];
  };

  const handleGenreClick = (genre: string) => {
    const formattedGenre = genre.toUpperCase();
    navigate(`/pages11?query=${formattedGenre}`);
  };

  return (
    <section className="genres-section py-5 bg-black">
      <div className="container">
        <h2 className="text-white fw-bold mb-4">{t("Janra Görə Axtar", "Browse By Genre", "Поиск по жанру")}</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
          {categories.map((cat, index) => (
            <div key={index} className="col">
              <div className={`genre-card ${getGenreClass(index)}`} onClick={() => handleGenreClick(cat)} style={{ cursor: 'pointer' }}>
                <div className="genre-overlay">
                  <span className="genre-title">
                    {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByGenre;