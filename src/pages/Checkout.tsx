import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/Checkout.css";

import type { RootState } from "../store/store"; 
import { clearCart } from "../store/features/cartSlice";
import { useL } from "../useL"; 

const Checkout: React.FC = () => {
  const t = useL(); 
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
   
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.0;
  const total = subtotal + shipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      Swal.fire({ 
        title: t("Səbətiniz boşdur!", "Your cart is empty!", "Ваша корзина пуста!"), 
        icon: "warning", 
        background: "#111", 
        color: "#fff",
        confirmButtonColor: "#fd6500"
      });
      return;
    }

    Swal.fire({
      title: t('Sifarişi təsdiqləyirsiniz?', 'Confirm order?', 'Подтвердить заказ?'),
      text: `${t("Ümumi məbləğ", "Total amount", "Итоговая сумма")}: ${total.toFixed(2)} AZN`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#fd6500',
      cancelButtonColor: '#333',
      confirmButtonText: t('Bəli, Sifariş et!', 'Yes, Order!', 'Да, заказать!'),
      cancelButtonText: t('Ləğv et', 'Cancel', 'Отмена'),
      background: "#111",
      color: "#fff"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire({
          title: t("Uğurlu!", "Success!", "Успешно!"),
          text: t("Sifarişiniz qəbul olundu. Tezliklə əlaqə saxlanılacaq.", "Order received. We will contact you soon.", "Заказ принят. Мы скоро с вами свяжемся."),
          icon: "success",
          background: "#111",
          color: "#fff",
          confirmButtonColor: "#fd6500"
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="checkout-wrapper bg-black py-5">
      <div className="container" style={{ paddingTop: '100px' }}>
        
        <div className="mb-5" data-aos="fade-right">
            <span className="text-orange fw-bold text-uppercase small" style={{letterSpacing: '2px'}}>
                {t("Son Addım", "Final Step", "Последний шаг")}
            </span>
            <h2 className="display-5 fw-bold text-white">
                {t("SİFARİŞİN TAMAMLANMASI", "CHECKOUT", "ОФОРМЛЕНИЕ ЗАКАЗА")}
            </h2>
            <div style={{width: '80px', height: '4px', background: '#fd6500', marginTop: '10px'}}></div>
        </div>

        <div className="row g-5">
          {/* Sol Tərəf - Form */}
          <div className="col-lg-7" data-aos="fade-up">
            <div className="checkout-form-container p-4 p-md-5 bg-dark rounded shadow">
              <h4 className="fw-bold mb-4 text-white border-bottom border-secondary pb-3">
                  {t("Çatdırılma Məlumatları", "Shipping Details", "Детали доставки")}
              </h4>
              <form onSubmit={handleSubmitOrder}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="text-white-50 small mb-2 text-uppercase">{t("Ad", "Name", "Имя")}</label>
                    <input type="text" className="form-control checkout-input" required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="text-white-50 small mb-2 text-uppercase">{t("Soyad", "Surname", "Фамилия")}</label>
                    <input type="text" className="form-control checkout-input" required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-white-50 small mb-2 text-uppercase">{t("Çatdırılma Ünvanı", "Shipping Address", "Адрес доставки")}</label>
                  <input type="text" className="form-control checkout-input" placeholder={t("Küçə, ev nömrəsi...", "Street, house number...", "Улица, номер дома...")} required />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="text-white-50 small mb-2 text-uppercase">{t("Şəhər / Rayon", "City", "Город")}</label>
                    <input type="text" className="form-control checkout-input" required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="text-white-50 small mb-2 text-uppercase">{t("Mobil Nömrə", "Phone Number", "Номер телефона")}</label>
                    <input type="tel" className="form-control checkout-input" placeholder="+994" required />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="text-white-50 small mb-2 text-uppercase">{t("Sifariş Qeydləri", "Order Notes", "Примечания к заказу")}</label>
                  <textarea className="form-control checkout-input" rows={3} placeholder={t("Kuryer üçün qeydlər...", "Notes for courier...", "Заметки для курьера...")}></textarea>
                </div>

                <h4 className="fw-bold mb-4 text-white border-bottom border-secondary pb-3">
                    {t("Ödəniş Üsulu", "Payment Method", "Способ оплаты")}
                </h4>
                <div className="payment-box p-4 mb-5 border border-secondary rounded">
                    <div className="form-check mb-3">
                        <input className="form-check-input custom-radio" type="radio" name="payMethod" id="bank" defaultChecked />
                        <label className="form-check-label ms-2 text-white" htmlFor="bank">
                            {t("Kartla Ödəniş (Onlayn)", "Card Payment (Online)", "Оплата картой (онлайн)")}
                        </label>
                    </div>
                    <div className="form-check mt-4 border-top border-secondary pt-3">
                        <input className="form-check-input custom-radio" type="radio" name="payMethod" id="cod" />
                        <label className="form-check-label ms-2 text-white" htmlFor="cod">
                            {t("Qapıda Ödəniş (Nağd)", "Cash on Delivery", "Оплата при доставке")}
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn-order-now w-100 py-3 fw-bold text-uppercase" style={{backgroundColor: '#fd6500', color: '#fff', border: 'none'}}>
                  {t("SİFARİŞİ TƏSDİQLƏ", "CONFIRM ORDER", "ПОДТВЕРДИТЬ ЗАКАЗ")}
                </button>
              </form>
            </div>
          </div>

          {/* Sağ Tərəf - Summary */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="sticky-top" style={{ top: "120px", zIndex: 1 }}>
              <div className="order-summary-box p-4 bg-dark rounded shadow border border-secondary">
                <h4 className="fw-bold mb-4 text-white">{t("Sifarişiniz", "Your Order", "Ваш заказ")}</h4>
                
                <div className="order-items-list mb-4" style={{maxHeight: '400px', overflowY: 'auto'}}>
                    {cartItems.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
                            <div className="d-flex align-items-center">
                                <div className="position-relative">
                                    <img src={item.image} alt={item.title} style={{width: '55px', height: '75px', objectFit: 'cover', borderRadius: '4px'}} />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-1 small fw-bold text-white text-uppercase" style={{fontSize: '11px'}}>{item.title}</h6>
                                    <span className="text-white-50 small">{item.price} AZN</span>
                                </div>
                            </div>
                            <span className="fw-bold text-orange" style={{color: '#fd6500'}}>{(item.price * item.quantity).toFixed(2)} AZN</span>
                        </div>
                    ))}
                </div>

                <div className="summary-details mt-4">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-white-50">{t("Məbləğ", "Subtotal", "Сумма")}</span>
                        <span className="text-white fw-bold">{subtotal.toFixed(2)} AZN</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-white-50">{t("Çatdırılma", "Shipping", "Доставка")}</span>
                        <span className="text-white fw-bold">{shipping.toFixed(2)} AZN</span>
                    </div>
                    <hr className="border-secondary my-4" />
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold mb-0 text-white">{t("CƏMİ", "TOTAL", "ИТОГО")}</h4>
                        <h3 className="fw-bold mb-0" style={{color: '#fd6500'}}>{total.toFixed(2)} AZN</h3>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;