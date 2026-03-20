import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleWishlist } from "../../store/features/wishlistSlice";
import { addToCart } from "../../store/features/cartSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 
import { toast } from "react-toastify"; 
import { useL } from "../../useL"; 

const Wishlist = () => {
  const t = useL(); 
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (movie: any) => {
    Swal.fire({
      title: t('Siyahıdan silinsin?', 'Remove from wishlist?', 'Удалить из списка?'),
      text: t(`"${movie.title}" istək siyahınızdan çıxarılacaq.`, `"${movie.title}" will be removed from your wishlist.`, `"${movie.title}" будет удален из вашего списка желаний.`),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#fd6500',
      confirmButtonText: t('Bəli, sil', 'Yes, remove', 'Да, удалить'),
      cancelButtonText: t('Xeyr, saxla', 'No, keep', 'Нет, оставить'),
      background: '#0c0c0c',
      color: '#fff'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(toggleWishlist(movie));
        toast.info(t("İstək siyahısından çıxarıldı", "Removed from wishlist", "Удалено из списка желаний"), { theme: "dark" });
      }
    });
  };

  const handleAddToCartFromWishlist = (movie: any) => {
    dispatch(addToCart(movie));
    toast.success(t("Səbətə əlavə edildi! 🛒", "Added to cart! 🛒", "Добавлено в корзину! 🛒"), { theme: "dark", position: "bottom-right" });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container text-center" style={{ marginTop: "180px", minHeight: "60vh" }}>
        <h2 className="text-white fw-light">{t("İstək siyahınız hazırda boşdur.", "Your wishlist is currently empty.", "Ваш список желаний пуст.")}</h2>
        <Link to="/pages11" className="btn mt-4 px-5 py-2 rounded-0 text-white fw-bold" style={{ backgroundColor: "#fd6500" }}>
            {t("MAĞAZAYA QAYIT", "BACK TO SHOP", "ВЕРНУТЬСЯ В МАГАЗИН")}
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page bg-black text-white" style={{ paddingTop: "150px", minHeight: "100vh", paddingBottom: "100px" }}>
      <div className="container">
        <h1 className="fw-bold mb-5 display-6 border-start border-5 ps-3 text-uppercase" style={{ borderColor: "#fd6500" }}>
            {t("Mənim İstək Siyahım", "My Wishlist", "Мой список желаний")}
        </h1>
        <div className="row g-4">
          {wishlistItems.map((movie) => {
            const isInCart = cartItems.some(item => item.id === movie.id);
            return (
              <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card bg-black border-secondary h-100 rounded-0" style={{ border: "1px solid #333 !important" }}>
                  <div className="position-relative overflow-hidden" style={{ border: "2px solid transparent", transition: "0.3s" }} onMouseEnter={(e) => e.currentTarget.style.borderColor="#fd6500"} onMouseLeave={(e) => e.currentTarget.style.borderColor="transparent"}>
                    <img src={movie.image} className="card-img-top" alt={movie.title} style={{ height: "350px", objectFit: "cover" }} />
                    <button 
                      onClick={() => handleRemoveFromWishlist(movie)} 
                      className="btn btn-sm position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center" 
                      style={{ width: "35px", height: "35px", backgroundColor: "rgba(0,0,0,0.7)", border: "1px solid #ff4d4d", borderRadius: "50%", color: "#ff4d4d" }}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <div className="card-body bg-black text-center pt-4">
                    <h6 className="text-white fw-bold mb-2 text-uppercase" style={{ letterSpacing: "1px" }}>{movie.title}</h6>
                    <p className="fw-bold mb-3" style={{ color: "#fd6500" }}>${movie.price.toFixed(2)}</p>
                    <div className="d-grid gap-2">
                      <button 
                        onClick={() => handleAddToCartFromWishlist(movie)} 
                        className="btn btn-sm rounded-0 border-0 text-white py-2 fw-bold" 
                        style={{ backgroundColor: isInCart ? "#28a745" : "#fd6500" }}
                      >
                        {isInCart ? t("SƏBƏTDƏDİR ✓", "IN CART ✓", "В КОРЗИНЕ ✓") : t("SƏBƏTƏ AT", "ADD TO CART", "В КОРЗИНУ")}
                      </button>
                      <Link to={`/pages13/${movie.id}`} className="btn btn-sm btn-outline-light rounded-0 py-2 fw-bold" style={{ borderColor: "#333", fontSize: "11px" }}>
                        {t("DETALLARA BAX", "VIEW DETAILS", "ПОДРОБНЕЕ")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;