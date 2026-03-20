import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import bgImage from '../../assets/image/backgroundpages.png'; 
import "../../assets/css/Pages/Contact.css";
import { useL } from "../../useL";

const Contact = () => {
    const t = useL();

    return (
        <div className="faq-page-wrapper bg-black">

           
            <section
                className="faq-breadcrumb-area"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.95)), url(${bgImage})`,
                    paddingTop: "180px",
                    paddingBottom: "120px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-3 fw-bold text-white mb-2">
                                {t("Bizimlə Əlaqə", "Contact Us", "Связаться с нами")}
                            </h1>
                            <div className="breadcrumb-nav">
                                <span className="text-orange fw-bold">{t("Ana Səhifə", "Home", "Главная")}</span>
                                <span className="text-white-50 mx-2">:</span>
                                <span className="text-white">{t("Əlaqə", "Contact", "Контакт")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Əsas Məzmun */}
            <div className="faq-main-content py-5 position-relative">
                <div className="faq-glow-effect"></div>
                <div className="container mt-5">
                    <div className="contact-main-card-reveal shadow-lg border border-secondary border-opacity-25 rounded overflow-hidden">
                        <div className="row g-0">
                            
                           
                            <div className="col-lg-5 p-5 contact-info-sidebar" style={{ backgroundColor: '#0a0a0a' }}>
                                <span className="faq-subtitle text-uppercase text-orange fw-bold" style={{ letterSpacing: '2px', fontSize: '14px' }}>
                                    {t("Dəstək Mərkəzi", "Support Center", "Центр поддержки")}
                                </span>
                                <h2 className="display-6 fw-bold text-white mt-2 mb-4">
                                    {t("Bizimlə", "Contact", "Свяжитесь")} <span className="text-orange">{t("Əlaqə", "Us", "с нами")}</span>
                                </h2>
                                
                                <div className="d-flex align-items-center gap-4 mb-4 contact-item">
                                    <div className="contact-icon-box bg-orange p-3 rounded-circle text-white shadow">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h6 className="text-white mb-0 fw-bold">{t("Ünvanımız", "Our Address", "Наш адрес")}</h6>
                                        <p className="text-white-50 small mb-0">Aff Mall, 28 May, Bakı, Azərbaycan</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4 mb-4 contact-item">
                                    <div className="contact-icon-box bg-orange p-3 rounded-circle text-white shadow">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h6 className="text-white mb-0 fw-bold">{t("E-poçt", "Email", "Электронная почта")}</h6>
                                        <p className="text-white-50 small mb-0">support@faime.com</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4 mb-4 contact-item">
                                    <div className="contact-icon-box bg-orange p-3 rounded-circle text-white shadow">
                                        <FaPhoneAlt size={20} />
                                    </div>
                                    <div>
                                        <h6 className="text-white mb-0 fw-bold">{t("Telefon", "Phone", "Телефон")}</h6>
                                        <p className="text-white-50 small mb-0">+994 50 123 45 67</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-4 mt-5">
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white transition-hover social-link">
                                        <FaInstagram className="fs-3" />
                                    </a>
                                    <a href="https://wa.me/994501234567" target="_blank" rel="noreferrer" className="text-white transition-hover social-link">
                                        <FaWhatsapp className="fs-3" />
                                    </a>
                                </div>
                            </div>

                            
                            <div className="col-lg-7 p-5 bg-black border-start border-secondary border-opacity-25">
                                <form>
                                    <div className="mb-4">
                                        <label className="text-white-50 small mb-2">{t("Adınız", "Your Name", "Ваше имя")}</label>
                                        <input 
                                            type="text" 
                                            className="contact-input-field w-100 bg-transparent border-bottom border-secondary text-white py-2 shadow-none" 
                                            placeholder="..." 
                                            style={{ outline: 'none', border: 'none', borderBottom: '1px solid #444' }} 
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-white-50 small mb-2">{t("E-poçt ünvanınız", "Your Email", "Ваш Email")}</label>
                                        <input 
                                            type="email" 
                                            className="contact-input-field w-100 bg-transparent border-bottom border-secondary text-white py-2 shadow-none" 
                                            placeholder="..." 
                                            style={{ outline: 'none', border: 'none', borderBottom: '1px solid #444' }} 
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-white-50 small mb-2">{t("Mesajınız", "Your Message", "Ваше сообщение")}</label>
                                        <textarea 
                                            className="contact-input-field w-100 bg-transparent border-bottom border-secondary text-white py-2 shadow-none" 
                                            rows={4} 
                                            placeholder="..." 
                                            style={{ outline: 'none', border: 'none', borderBottom: '1px solid #444', resize: 'none' }}
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn-faime-orange w-100 py-3 fw-bold text-uppercase mt-3"
                                        style={{ backgroundColor: '#fd6500', color: '#fff', border: 'none', letterSpacing: '1px' }}
                                    >
                                        {t("MESAJI GÖNDƏR", "SEND MESSAGE", "ОТПРАВИТЬ СООБЩЕНИЕ")}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="contact-map-wrapper mt-5" style={{ filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490188644!2d49.845016376563!3d40.37719495804562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sAF%20Mall!5e0!3m2!1saz!2saz!4v1700000000000!5m2!1saz!2saz"
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            
        </div>
    );
};

export default Contact;