import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/css/FilmingHistory/Testimonials.css';
import client1 from "../../assets/image/client.png";
import client2 from "../../assets/image/client-2.png";
import client3 from "../../assets/image/client-3.png";
import client4 from "../../assets/image/client-2.png";
import { useL } from "../../useL";

const Testimonials: React.FC = () => {
  const t = useL();
  const reviews = [
    { id: 1, name: "Zekson D. Silva", role: t("Ssenari Müəllifi", "Scriptwriter", "Сценарист"), text: t("Bu komanda ilə işləmək inanılmaz idi. Onların yaradıcı baxışı və detallara verdiyi önəm layihəmizi tamamilə yeni səviyyəyə daşıdı.", "Working with this team was amazing. Their creative vision took our project to a new level.", "Работать с этой командой было потрясающе. Их видение вывело наш проект на новый уровень."), stars: 5, img: client1 },
    { id: 2, name: "Kalima H. Dalia", role: t("Vizajist", "Makeup Artist", "Визажист"), text: t("Peşəkarlıq və operativlik axtarırsınızsa, doğru yerdəsiniz. Çəkiliş prosesi həm rahat, həm də çox məhsuldar keçdi.", "If you are looking for professionalism, you are in the right place.", "Если вы ищете профессионализм, вы в правильном месте."), stars: 4, img: client2 },
    { id: 3, name: "Zeki D. Silva", role: t("Kiçik Rejissor", "Assistant Director", "Ассистент режиссера"), text: t("Filmin hər bir kadrında hiss olunan o keyfiyyət məhz Faime Production sayəsində mümkün oldu. Hər kəsə tövsiyə edirəm!", "The quality in every frame was possible thanks to Faime Production.", "Качество в каждом кадре стало возможным благодаря Faime Production."), stars: 5, img: client3 },
    { id: 4, name: "Anna Karo", role: t("Prodüser", "Producer", "Продюсер"), text: t("İşinə bu qədər sevgi ilə yanaşan ikinci bir komanda tanımıram. Növbəti layihələrimizdə mütləq yenidən birlikdəyik.", "I don't know any other team that loves their work this much.", "Я не знаю другой команды, которая так любит свою работу."), stars: 5, img: client4 },
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container py-5">
        <div className="testimonial-head text-center mb-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <span className="t-line"></span>
            <span className="t-label">{t("MÜŞTƏRİ RƏYLƏRİ", "TESTIMONIALS", "ОТЗЫВЫ КЛИЕНТОВ")}</span>
            <span className="t-line"></span>
          </div>
          <h2 className="t-title">{t("İnsanlar Nə Deyir?", "What Do People Say?", "Что говорят люди?")}</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} slidesPerView={1} loop={true} speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="testimonial-swiper"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="client-info d-flex align-items-center gap-3 mb-4">
                  <img src={item.img} alt={item.name} className="client-img" />
                  <div className="text-start">
                    <h5 className="client-name">{item.name}</h5>
                    <span className="client-role">{item.role}</span>
                  </div>
                </div>
                <p className="client-text text-start text-muted">"{item.text}"</p>
                <div className="stars text-start">
                  {[...Array(item.stars)].map((_, i) => (<i key={i} className="fa-solid fa-star"></i>))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-nav mt-5 d-flex align-items-center justify-content-center gap-3">
          <span className="nav-line"></span>
          <button className="nav-btn nav-prev"><i className="fa-solid fa-arrow-left"></i></button>
          <button className="nav-btn nav-next active"><i className="fa-solid fa-arrow-right"></i></button>
          <span className="nav-line"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;