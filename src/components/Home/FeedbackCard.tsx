import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../assets/css/Home/FeedbackSection.css";
import { useL } from "../../useL";

const FeedbackCard = () => {
    const t = useL();
    const feedbacks = [
        { id: 1, name: "Aydan Məmmədova", role: t("Baş Prodüser", "Executive Producer", "Генеральный продюсер"), text: t("Faime Production ilə işləmək layihələrimizə vizual zənginlik qatdı. Hər bir kadr sənət əsəridir!", "Working with Faime Production added visual richness to our projects. Every shot is a work of art!", "Работа с Faime Production добавила визуального богатства нашим проектам. Каждый кадр — произведение искусства!") },
        { id: 2, name: "Kənan Həsənov", role: t("Rejissor", "Director", "Режиссер"), text: t("Çəkiliş sonrası montaj və rəng korreksiyası gözlədiyimizdən qat-qat üstün oldu. Peşəkar komanda!", "Post-production editing and color correction exceeded our expectations. Professional team!", "Монтаж и цветокоррекция после съемок превзошли все ожидания. Профессиональная команда!") },
        { id: 3, name: "Lalə Səfərova", role: t("Sənədli Film Müəllifi", "Documentary Author", "Автор документальных фильмов"), text: t("Kreativ yanaşma və texniki avadanlıqların keyfiyyəti Faime-ni bazarda bir nömrə edir.", "Creative approach and quality of technical equipment make Faime number one in the market.", "Креативный подход и качество технического оборудования делают Faime номером один на рынке.") }
    ];

    return (
        <section className="feedback-section">
            <div className="container">
                <h2 className="text-white text-center mb-5">{t("Peşəkar Rəylər", "Professional Reviews", "Профессиональные отзывы")}</h2>
                <Swiper modules={[Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 3500, disableOnInteraction: false }} pagination={{ clickable: true }} breakpoints={{ 992: { slidesPerView: 2 } }}>
                    {feedbacks.map((f) => (
                        <SwiperSlide key={f.id}>
                            <div className="feedback-card-pinterest">
                                <div className="quote-icon"><i className="bi bi-quote"></i></div>
                                <p className="feedback-text">"{f.text}"</p>
                                <div className="user-info">
                                    <h5 className="user-name">{f.name}</h5>
                                    <span className="user-role">{f.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default FeedbackCard;