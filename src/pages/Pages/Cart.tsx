import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { useL } from "../../useL"; 

import type { RootState } from "../../store/store";
import { removeFromCart, clearCart, addToCart, decreaseQuantity } from "../../store/features/cartSlice";

const Cart = () => {
  const t = useL();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 5.0 : 0;
  const total = subtotal + shipping;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success ms-2",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false,
    background: "#0c0c0c",
    color: "#fff"
  });

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      swalWithBootstrapButtons.fire({
        title: t("Səbətiniz boşdur!", "Your cart is empty!", "Ваша корзина пуста!"),
        text: t("Ödəniş etmək üçün əvvəlcə səbətə məhsul əlavə etməlisiniz.", "Add products to cart before checkout.", "Добавьте товары в корзину перед оплатой."),
        icon: "warning"
      });
      return;
    }

    swalWithBootstrapButtons.fire({
      title: t("Təbriklər!", "Congratulations!", "Поздравляем!"),
      text: t("Ödəniş səhifəsinə yönləndirilirsiniz...", "Redirecting to checkout...", "Перенаправление на страницу оплаты..."),
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true
    }).then(() => {
      navigate("/checkout"); 
    });
  };

  const handleRemoveProduct = (id: any, title: string) => {
    swalWithBootstrapButtons.fire({
      title: t("Əminsiniz?", "Are you sure?", "Вы уверены?"),
      text: `"${title}" ${t("səbətdən silinəcək!", "will be removed!", "будет удален!")}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("Bəli, sil!", "Yes, delete!", "Да, удалить!"),
      cancelButtonText: t("Xeyr, saxla!", "No, keep it!", "Нет, оставить!"),
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        swalWithBootstrapButtons.fire({
          title: t("Silindi!", "Deleted!", "Удалено!"),
          text: t("Məhsul uğurla səbətdən çıxarıldı.", "Product removed successfully.", "Товар успешно удален."),
          icon: "success"
        });
      }
    });
  };

  const handleClearCart = () => {
    swalWithBootstrapButtons.fire({
      title: t("Səbəti boşaltmaq istəyirsiniz?", "Clear cart?", "Очистить корзину?"),
      text: t("Bütün məhsullar silinəcək!", "All items will be removed!", "Все товары будут удалены!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("Bəli, hamısını sil!", "Yes, clear all!", "Да, очистить все!"),
      cancelButtonText: t("Xeyr, kalsın!", "No, keep them!", "Нет, оставить!"),
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <div className="cart-page bg-black text-white" style={{ paddingTop: "150px", minHeight: "100vh", paddingBottom: "100px" }}>
      <div className="container">
        <h1 className="fw-bold mb-5 border-start border-5 ps-3" style={{ borderColor: '#fd6500' }}>
          {t("Alış-veriş Səbəti.", "Shopping Cart.", "Корзина покупок.")}
        </h1>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="table-responsive border border-secondary" style={{ backgroundColor: "#000" }}>
              <table className="table table-dark m-0">
                <thead>
                  <tr className="text-secondary small" style={{ borderBottom: '2px solid #fd6500' }}>
                    <th className="py-4 ps-4">{t("MƏHSUL", "PRODUCT", "ТОВАР")}</th>
                    <th className="py-4 text-center">{t("QİYMƏT", "PRICE", "ЦЕНА")}</th>
                    <th className="py-4 text-center">{t("SAY", "QTY", "КОЛ-ВО")}</th>
                    <th className="py-4 text-center">{t("CƏM", "TOTAL", "ИТОГО")}</th>
                    <th className="py-4 pe-4 text-end">{t("SİL", "REMOVE", "УДАЛИТЬ")}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? cartItems.map((item) => (
                    <tr key={item.id} className="align-middle" style={{ borderBottom: '1px solid #fd6500' }}>
                      <td className="py-4 ps-4">
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.title} style={{ width: "70px", height: "90px", objectFit: "cover", border: '2px solid #fd6500', padding: '2px' }} className="me-3" />
                          <div>
                            <h6 className="mb-0 fw-bold">{item.title}</h6>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">${item.price.toFixed(2)}</td>
                      <td className="text-center">
                        <div className="d-inline-flex align-items-center border border-secondary bg-black">
                          <button className="btn btn-sm text-white px-2 border-0" onClick={() => dispatch(decreaseQuantity(item.id))}><FaMinus size={10} /></button>
                          <span className="px-2 fw-bold">{item.quantity}</span>
                          <button className="btn btn-sm text-white px-2 border-0" onClick={() => dispatch(addToCart(item))}><FaPlus size={10} /></button>
                        </div>
                      </td>
                      <td className="text-center fw-bold" style={{ color: '#fd6500' }}>${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="text-end pe-4">
                        <button onClick={() => handleRemoveProduct(item.id, item.title)} className="btn btn-link text-danger p-0"><FaTrashAlt /></button>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={5} className="py-5 text-center text-secondary">{t("Səbətiniz hazırda boşdur.", "Your cart is empty.", "Ваша корзина пуста.")}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button onClick={() => navigate("/pages11")} className="btn btn-outline-secondary text-white rounded-0 px-4 py-2">
                ← {t("Mağazaya Qayıt", "Back to Shop", "Назад в магазин")}
              </button>
              {cartItems.length > 0 && (
                <button onClick={handleClearCart} className="btn btn-outline-danger rounded-0 px-4 py-2">
                  {t("Səbəti Təmizlə", "Clear Cart", "Очистить корзину")}
                </button>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-4 border border-secondary shadow-lg" style={{ backgroundColor: "#000" }}>
              <h4 className="fw-bold mb-4" style={{ borderBottom: '1px solid #fd6500', paddingBottom: '10px' }}>{t("Ödəniş Məlumatı.", "Order Summary.", "Информация об оплате.")}</h4>
              <div className="d-flex justify-content-between mb-3 text-secondary">
                <span>{t("Məbləğ:", "Subtotal:", "Сумма:")}</span><span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-4 text-secondary">
                <span>{t("Çatdırılma:", "Shipping:", "Доставка:")}</span><span className="text-white">${shipping.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-4 mb-4">
                <h5 className="fw-bold mb-0">{t("Ümumi Cəm:", "Grand Total:", "Общий итог:")}</h5>
                <h4 className="fw-bold mb-0" style={{ color: "#fd6500" }}>${total.toFixed(2)}</h4>
              </div>
              <button onClick={handleCheckout} className="btn w-100 py-3 fw-bold rounded-0" style={{ backgroundColor: "#fd6500", color: "#fff" }}>
                {t("İNDİ ÖDƏNİŞ ET", "CHECKOUT NOW", "ОПЛАТИТЬ СЕЙЧАС")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;