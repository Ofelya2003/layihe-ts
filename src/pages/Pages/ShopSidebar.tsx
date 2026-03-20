import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import type { MovieType } from "../../types";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";
import { toggleWishlist } from "../../store/features/wishlistSlice";
import { useAuth } from "../../context/AuthContext"; 
import type { RootState } from "../../store/store";
import { useL } from "../../useL";
import "../../assets/css/Pages/ShopSidebar.css";

const ShopSidebar = () => {
  const t = useL();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth(); 
  
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const urlQuery = searchParams.get("query")?.replace(/\+/g, " ") || "";
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await supabase.from("movies").select("*");
      if (data) setMovies(data as MovieType[]);
    };
    fetchMovies();
  }, []);

  // Həm Film Adı, həm də Kateqoriya üzrə Axtarış Məntiqi
  const filteredMovies = movies.filter((m) => {
    const queryLower = urlQuery.toLowerCase().trim();
    
    const matchesSearch = 
      queryLower === "" || 
      m.title.toLowerCase().includes(queryLower) || 
      m.category.toLowerCase().includes(queryLower);

    const matchesSidebarCategory = 
      selectedCategory === "All" || 
      m.category.toUpperCase() === selectedCategory.toUpperCase();

    return matchesSearch && matchesSidebarCategory;
  });

  const handleAddToCart = (movie: MovieType) => {
    if (authLoading) return; 
    if (!user) {
      navigate("/auth");
      return;
    }
    dispatch(addToCart(movie));
  };

  const categories = [t("Bütün Filmlər", "All Movies", "Все фильмы"), ...new Set(movies.map((m) => m.category.toUpperCase()))];

  return (
    <div className="shop-sidebar-area bg-black text-white" style={{ paddingTop: "140px", minHeight: "100vh", paddingBottom: "100px" }}>
      <div className="container">
        <div className="row g-5">
          
          {/* FİLMLƏR SİYAHISI */}
          <div className="col-lg-9 order-2 order-lg-1">
            <div className="row g-3">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => {
                  const isInCart = cartItems.some((item) => item.id === movie.id);
                  const isInWishlist = wishlistItems.some((item) => item.id === movie.id);

                  return (
                    <div key={movie.id} className="col-md-6 col-xl-4 mb-5 animate-card" style={{ animationDelay: `${index * 0.05}s` }}>
                      <div className="card h-100 border-0 bg-transparent shadow-hover">
                        
                        {/* Şəkil Hissəsi (Yumşaldılmış Künclər) */}
                        <div className="position-relative overflow-hidden group" style={{ borderRadius: "12px" }}>
                          <button 
                            onClick={() => dispatch(toggleWishlist(movie))} 
                            className="position-absolute border-0 d-flex align-items-center justify-content-center" 
                            style={{ 
                              top: "12px", 
                              right: "12px", 
                              width: "32px", 
                              height: "32px", 
                              zIndex: 10, 
                              borderRadius: "50%", 
                              backgroundColor: "rgba(0,0,0,0.6)", 
                              border: "1px solid rgba(255,255,255,0.1)",
                              transition: "0.3s"
                            }}
                          >
                            <i className={`${isInWishlist ? "fas fa-heart text-danger" : "far fa-heart text-white"}`} style={{fontSize: '12px'}}></i>
                          </button>
                          
                          <Link to={`/pages13/${movie.id}`}>
                            <div className="img-zoom-container">
                                <img src={movie.image} className="card-img-top img-fluid" alt={movie.title} style={{ height: "380px", objectFit: "cover" }} />
                            </div>
                          </Link>
                        </div>

                        {/* Məlumat Hissəsi */}
                        <div className="card-body px-0 py-3 text-start">
                          <h6 className="card-title fw-bold text-white text-uppercase mb-1" style={{ fontSize: "13px", letterSpacing: "0.5px" }}>{movie.title}</h6>
                          <p className="mb-3 fw-bold" style={{ color: "#fd6500", fontSize: "16px" }}>${movie.price.toFixed(2)}</p>
                          
                          {/* DÜYMƏLƏR YAN-YANA VƏ İNCƏ (Radius: 8px) */}
                          <div className="d-flex gap-2">
                            <button 
                              onClick={() => handleAddToCart(movie)} 
                              className="btn flex-grow-1 py-2 fw-bold text-white border-0 d-flex align-items-center justify-content-center gap-2" 
                              style={{ 
                                backgroundColor: isInCart ? "#2ecc71" : "#fd6500", 
                                borderRadius: "8px", 
                                fontSize: "11px",
                                transition: "0.4s ease"
                              }}
                              disabled={authLoading}
                            >
                              {isInCart ? <i className="fas fa-check" style={{fontSize: "12px"}}></i> : <i className="fas fa-shopping-basket" style={{fontSize: "12px"}}></i>}
                              <span>{isInCart ? "" : t("ƏLAVƏ ET", "ADD", "КУПИТЬ")}</span>
                            </button>

                            <Link 
                                to={`/pages13/${movie.id}`} 
                                className="btn btn-outline-light py-2 fw-bold d-flex align-items-center justify-content-center"
                                style={{ 
                                  borderRadius: "8px", 
                                  fontSize: "11px", 
                                  border: "1px solid #333", 
                                  whiteSpace: "nowrap",
                                  paddingLeft: "15px",
                                  paddingRight: "15px",
                                  transition: "0.3s"
                                }}
                            >
                                {t("DETALLAR", "DETAILS", "ДЕТАЛИ")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-12 text-center py-5">
                  <h4 className="text-secondary">{t("Axtarışa uyğun nəticə tapılmadı.", "No matches found.", "Ничего не найдено.")}</h4>
                </div>
              )}
            </div>
          </div>

          {/* SİDEBAR (SAĞ TƏRƏF) */}
          <div className="col-lg-3 order-1 order-lg-2">
            <div className="p-4" style={{ backgroundColor: "#0c0c0c", border: "1px solid #222", position: "sticky", top: "120px", borderRadius: "12px" }}>
              <h6 className="fw-bold mb-3 text-white text-uppercase" style={{ borderLeft: "3px solid #fd6500", paddingLeft: "12px", fontSize: "14px" }}>
                {t("Axtarış", "Search", "Поиск")}
              </h6>
              <div className="search-box mb-4">
                <input 
                  type="text" 
                  className="form-control bg-black text-white border-secondary px-3 py-2"
                  placeholder={t("Ad və ya kateqoriya...", "Title or category...", "Название или категория...")}
                  value={urlQuery}
                  onChange={(e) => setSearchParams({ query: e.target.value })}
                  style={{ fontSize: "13px", borderRadius: "8px" }}
                />
              </div>

              <h6 className="fw-bold mb-3 text-white text-uppercase" style={{ borderLeft: "3px solid #fd6500", paddingLeft: "12px", fontSize: "14px" }}>
                {t("Kateqoriyalar", "Categories", "Категории")}
              </h6>
              <ul className="list-unstyled">
                {categories.map((cat) => {
                    const isAll = cat === t("Bütün Filmlər", "All Movies", "Все фильмы");
                    const catKey = isAll ? "All" : cat;
                    const isActive = selectedCategory.toUpperCase() === catKey.toUpperCase();

                    return (
                        <li key={cat} className="mb-1">
                            <button 
                            onClick={() => {
                                setSelectedCategory(catKey);
                                setSearchParams(isAll ? {} : { query: catKey });
                            }}
                            className={`btn btn-sm w-100 text-start py-2 px-3 ${isActive ? 'text-white' : 'text-secondary bg-transparent'}`}
                            style={{ 
                                backgroundColor: isActive ? "#fd6500" : "transparent",
                                fontSize: "12px",
                                borderRadius: "8px",
                                border: isActive ? "none" : "1px solid transparent",
                                transition: "0.3s"
                            }}
                            >
                            {cat}
                            </button>
                        </li>
                    );
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;