import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import supabase from "../../utils/supabase";
import type { MovieType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";
import type { RootState } from "../../store/store";
import { useL } from "../../useL";

const ShopDetails = () => {
  const { id } = useParams();
  const t = useL();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (id) {
      const fetchMovieDetail = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from("movies")
          .select("*")
          .eq("id", id)
          .single();
        
        if (data) setMovie(data as MovieType);
        if (error) console.error("Error fetching movie:", error);
        setLoading(false);
      };
      fetchMovieDetail();
    }
    window.scrollTo(0, 0);
  }, [id]);

 
  if (!id) {
    return (
      <div className="container text-center text-white" style={{ paddingTop: "200px", minHeight: "80vh" }}>
        <div className="animate-card" style={{ animation: "fadeInUp 0.6s ease" }}>
          <i className="fas fa-film fa-4x mb-4 opacity-25" style={{ color: "#fd6500" }}></i>
          <h2 className="fw-bold display-6">{t("Film Seçilməyib", "Movie Not Selected", "Фильм не выбран")}</h2>
          <p className="text-secondary mt-3">
            {t("Detallara baxmaq üçün mağaza bölməsindən bir film seçməlisiniz.", "You must select a movie from the shop section to view details.", "Вы должны выбрать фильм в магазине, чтобы просмотреть детали.")}
          </p>
          <Link to="/pages11" className="btn mt-4 px-5 py-3 rounded-0 text-white fw-bold shadow-lg" style={{ backgroundColor: "#fd6500" }}>
            {t("MAĞAZAYA QAYIT", "BACK TO SHOP", "ВЕРНУТЬСЯ В МАГАЗИН")}
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center text-white" style={{ paddingTop: "200px", minHeight: "80vh" }}>
        <div className="spinner-border" style={{ color: "#fd6500" }} role="status">
          <span className="visually-hidden">Yüklənir...</span>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center text-white" style={{ paddingTop: "200px", minHeight: "80vh" }}>
        <h2 className="fw-bold">{t("Xəta: Film tapılmadı.", "Error: Movie not found.", "Ошибка: Фильм не найден.")}</h2>
        <Link to="/pages11" className="btn mt-4 text-white px-4 py-2" style={{ backgroundColor: "#fd6500" }}>
            {t("Mağazaya Dön", "Back to Shop", "Вернуться в магазин")}
        </Link>
      </div>
    );
  }

  const isInCart = cartItems.some(item => item.id === movie.id);

  return (
    <div className="movie-details-page bg-black text-white" style={{ minHeight: "100vh" }}>
      
      <div 
        className="position-relative" 
        style={{ 
          height: "70vh", 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), #000), url(${movie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        <div className="container h-100 d-flex align-items-end pb-5">
          <div className="animate-card" style={{ animation: "fadeInUp 0.8s ease" }}>
            <span className="badge mb-3 px-3 py-2 text-uppercase" style={{ backgroundColor: "#fd6500", borderRadius: "0" }}>
                {movie.category}
            </span>
            <h1 className="display-3 fw-bold mb-3">{movie.title}</h1>
            <div className="d-flex align-items-center gap-4 text-secondary mb-4 small fw-bold text-uppercase">
               <span><i className="fas fa-star text-warning me-2"></i>8.5 IMDb</span>
               <span>2024</span>
               <span>2 {t("saat", "hrs", "часа")} 15 {t("dəq", "min", "мин")}</span>
               <span className="border border-secondary px-2 py-0">4K Ultra HD</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <h4 className="fw-bold border-start border-5 ps-3 mb-4 text-uppercase" style={{ borderColor: "#fd6500", letterSpacing: "1px" }}>
                {t("Filmin Məzmunu", "Movie Plot", "Сюжет фильма")}
            </h4>
            <p className="text-secondary lh-lg" style={{ fontSize: "1.1rem" }}>
              {t(
                `Bu möhtəşəm "${movie.title}" filmi sizi xəyallarınızın ötesinə aparacaq. Kinematoqrafiyanın ən son texnologiyaları ilə çəkilmiş bu əsər, həm vizual effektləri, həm də dərin süjet xətti ilə seçilir.`,
                `This magnificent film "${movie.title}" will take you beyond your dreams. Shot with the latest technologies of cinematography, this work stands out for both its visual effects and deep storyline.`,
                `Этот великолепный фильм «${movie.title}» перенесет вас за пределы ваших мечтаний. Снятая с использованием новейших технологий кинематографии, эта работа выделяется как своими визуальными эффектами, так и глубоким сюжетом.`
              )}
            </p>
            
            <div className="mt-5 p-4 border border-secondary" style={{ backgroundColor: "#080808" }}>
               <h5 className="mb-3 fw-bold text-white text-uppercase">{t("Niyə bu filmi izləməli?", "Why watch this movie?", "Почему стоит посмотреть этот фильм?")}</h5>
               <ul className="list-unstyled text-secondary">
                  <li className="mb-2"><i className="fas fa-check me-2" style={{ color: "#fd6500" }}></i> {t("Eksklüziv 4K görüntü keyfiyyəti", "Exclusive 4K image quality", "Эксклюзивное качество изображения 4K")}</li>
                  <li className="mb-2"><i className="fas fa-check me-2" style={{ color: "#fd6500" }}></i> {t("Orijinal dublyaj və alt-yazı seçimi", "Original dubbing and subtitle options", "Оригинальный дубляж и варианты субтитров")}</li>
                  <li className="mb-2"><i className="fas fa-check me-2" style={{ color: "#fd6500" }}></i> {t("İstənilən cihazda izləmə imkanı", "Ability to watch on any device", "Возможность просмотра на любом устройстве")}</li>
               </ul>
            </div>
          </div>

         
          <div className="col-lg-4">
            <div className="p-4 sticky-top shadow-lg border border-secondary" style={{ backgroundColor: "#0c0c0c", top: "120px" }}>
               <p className="text-secondary small mb-1">{t("Rəqəmsal nüsxə qiyməti:", "Digital copy price:", "Цена цифровой копии:")}</p>
               <h2 className="fw-bold mb-4" style={{ color: "#fd6500" }}>${movie.price.toFixed(2)}</h2>
               
               <button 
                  onClick={() => dispatch(addToCart(movie))}
                  className="btn w-100 py-3 fw-bold text-white mb-3 border-0 rounded-0"
                  style={{ backgroundColor: isInCart ? "#2ecc71" : "#fd6500", transition: "0.3s" }}
               >
                  {isInCart ? t("SƏBƏTDƏDİR ✓", "IN CART ✓", "В КОРЗИНЕ ✓") : t("SƏBƏTƏ ƏLAVƏ ET", "ADD TO CART", "В КОРЗИНУ")}
               </button>
               
               <button className="btn w-100 btn-outline-light py-3 fw-bold rounded-0" style={{ borderColor: "#333" }}>
                  {t("İNDİ İZLƏ", "WATCH NOW", "СМОТРЕТЬ СЕЙЧАС")}
               </button>

               <div className="mt-4 pt-3 border-top border-secondary opacity-50 text-center small">
                  <i className="fas fa-shield-alt me-2 text-warning"></i> {t("100% Təhlükəsiz Ödəniş", "100% Secure Payment", "100% Безопасный платеж")}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;