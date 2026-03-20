import { useState } from 'react';
import { FaPlus, FaMinus, FaEnvelope, FaHeadset } from 'react-icons/fa';
import bgImage from '../../assets/image/backgroundpages.png';
import "../../assets/css/Pages/Faq.css";
import { useL } from "../../useL";

const Faq = () => {
    const t = useL();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    
    const faqData = [
        { 
            q: t("Veb saytdakı şəkillərə necə daxil ola bilərəm?", "How can I access images on the website?", "Как я могу получить доступ к изображениям?"), 
            a: t("Hər bir film səhifəsindəki 'Media' sekmesine keçid edərək bütün yüksək keyfiyyətli afişalara və çəkiliş kadrlarına baxa bilərsiniz.", "You can view all posters and shots by going to the 'Media' tab.", "Вы можете просмотреть все постеры и кадры, перейдя на вкладку 'Медиа'.") 
        },
        { 
            q: t("Müəyyən bir film nə vaxt DVD formatında çıxacaq?", "When will a specific movie be released on DVD?", "Когда выйдет конкретный фильм на DVD?"), 
            a: t("Filmlərin əksəriyyəti kinoteatr nümayişindən təxminən 3-4 ay sonra DVD və Blu-ray formatında yayımlanır.", "Most films are released 3-4 months after cinema release.", "Большинство фильмов выходит через 3-4 месяца после проката.") 
        },
        { 
            q: t("Film premyeralarına biletləri necə əldə edə bilərəm?", "How can I get tickets to premieres?", "Как купить билеты на премьеры?"), 
            a: t("Premyera biletləri eksklüziv olaraq bizim Qızıl və Platin üzvlərimiz üçün əlçatandır.", "Premiere tickets are exclusive to Gold and Platinum members.", "Билеты на премьеры доступны только Gold и Platinum участникам.") 
        },
        { 
            q: t("Müəyyən bir aktyorla necə əlaqə saxlaya bilərəm?", "How can I contact a specific actor?", "Как я могу связаться с актером?"), 
            a: t("Məxfilik səbəbiylə birbaşa əlaqə məlumatlarını təqdim etmirik.", "We do not provide direct contact info due to privacy.", "Мы не предоставляем прямые контакты из-за конфиденциальности.") 
        },
        { 
            q: t("Hədiyyə kartı balansımı yoxlaya bilərəm?", "Can I check my gift card balance?", "Могу ли я проверить баланс подарочной карты?"), 
            a: t("Bəli, 'Hesab Ayarları' bölməsində balansınızı yoxlaya bilərsiniz.", "Yes, you can check your balance in Account Settings.", "Да, вы можете проверить баланс в настройках аккаунта.") 
        }
    ];

    return (
        <div className="faq-page-wrapper bg-black">
            {/* ÜST BREADCRUMB HİSSƏSİ */}
            <section 
                className="faq-breadcrumb-area" 
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.95)), url(${bgImage})` }}
            >
                <div className="container text-center">
                    <h1 className="display-3 fw-bold text-white mb-2">FAQ</h1>
                    <div className="breadcrumb-nav">
                        <span className="text-orange">{t("Ana Səhifə", "Home", "Главная")}</span>
                        <span className="text-white-50 mx-2">:</span>
                        <span className="text-white">FAQ</span>
                    </div>
                </div>
            </section>

          
            <div className="faq-main-content py-5">
                <div className="container mt-5">
                    <div className="row">
                        
                       
                        <div className="col-lg-5 mb-5 pe-lg-5">
                            <span className="faq-subtitle text-uppercase">
                                {t("Dəstək Mərkəzi", "Support Center", "Центр поддержки")}
                            </span>
                            <h2 className="display-5 fw-bold text-white mt-2">
                                {t("Hər hansı", "Have any", "Есть")} <span className="text-orange">{t("Sualınız Var?", "Questions?", "Вопросы?")}</span>
                            </h2>
                            <p className="text-white-50 mt-3">
                                {t("Axtardığınızı tapa bilmirsinizsə, bizimlə əlaqə saxlayın.", "If you can't find what you're looking for, contact us.", "Если вы не нашли то, что искали, свяжитесь с нами.")}
                            </p>

                            <div className="contact-info-card p-4 mt-4">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div className="contact-icon-box"><FaHeadset /></div>
                                    <div>
                                        <h6 className="text-white mb-0">{t("24/7 Dəstək", "24/7 Support", "24/7 Поддержка")}</h6>
                                        <p className="text-white-50 small mb-0">{t("Canlı Yardım", "Live Help", "Живая помощь")}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div className="contact-icon-box"><FaEnvelope /></div>
                                    <div>
                                        <h6 className="text-white mb-0">{t("Bizə Yazın", "Email Us", "Пишите нам")}</h6>
                                        <p className="text-white-50 small mb-0">support@faime.com</p>
                                    </div>
                                </div>
                                <button className="btn-faime-orange w-100">
                                    {t("MESAJ GÖNDƏR", "SEND MESSAGE", "ОТПРАВИТЬ")}
                                </button>
                            </div>
                        </div>

                        
                        <div className="col-lg-7">
                            <div className="faq-accordion">
                                {faqData.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className={`faq-card-item ${activeIndex === index ? 'is-active' : ''}`} 
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    >
                                        <div className="faq-question-row">
                                            <span className="faq-q-text">{item.q}</span>
                                            <div className="faq-toggle-btn">
                                                {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                            </div>
                                        </div>
                                        <div className="faq-answer-row">
                                            <div className="faq-answer-content">
                                                <p className="mb-0">{item.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;