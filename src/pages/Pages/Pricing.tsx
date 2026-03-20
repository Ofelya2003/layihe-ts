import React, { useState, useEffect } from 'react';
import "../../assets/css/Pages/Pricing.css";
import bgImage from '../../assets/image/backgroundpages.png';
import { useL } from "../../useL";

const Pricing: React.FC = () => {
    const t = useL();
    const [isYearly, setIsYearly] = useState(false);

   
    useEffect(() => {
        const revealElements = () => {
            const elements = document.querySelectorAll('.reveal-up');
            elements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 100) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealElements);
        revealElements(); 
        return () => window.removeEventListener('scroll', revealElements);
    }, []);

    const pricingData = [
        {
            title: t("Başlanğıc", "Basic", "Базовый"),
            monthlyPrice: 19,
            yearlyPrice: 190,
            features: [
                t("Limitsiz məhsul inteqrasiyası", "Unlimited product integration", "Безлимитная интеграция"),
                "24/7 " + t("dəstək", "support", "поддержка"),
                "20 GB " + t("yaddaş", "storage", "память")
            ],
            btnText: t("QEYDİYYATDAN KEÇ", "SIGN UP", "РЕГИСТРАЦИЯ")
        },
        {
            title: t("Standart", "Standard", "Стандарт"),
            monthlyPrice: 29,
            yearlyPrice: 290,
            features: [
                t("Limitsiz məhsul inteqrasiyası", "Unlimited product integration", "Безлимитная интеграция"),
                "24/7 " + t("dəstək", "support", "поддержка"),
                "50 GB " + t("yaddaş", "storage", "память")
            ],
            btnText: t("QEYDİYYATDAN KEÇ", "SIGN UP", "РЕГИСТРАЦИЯ"),
            featured: true
        },
        {
            title: t("Professional", "Professional", "Профессиональный"),
            monthlyPrice: 49,
            yearlyPrice: 490,
            features: [
                t("Limitsiz məhsul inteqrasiyası", "Unlimited product integration", "Безлимитная интеграция"),
                "24/7 " + t("dəstək", "support", "поддержка"),
                "150 GB " + t("yaddaş", "storage", "память")
            ],
            btnText: t("QEYDİYYATDAN KEÇ", "SIGN UP", "РЕГИСТРАЦИЯ")
        }
    ];

    return (
        <div className="pricing-page bg-black overflow-hidden">
            
            
            <section 
                className="page-breadcrumb-area" 
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})` }}
            >
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">
                        {t("Qiymət Planları", "Pricing Plans", "Тарифные планы")}
                    </h1>
                    <div className="breadcrumb-nav">
                        <span className="text-white-50">{t("Ana Səhifə", "Home", "Главная")}</span>
                        <span style={{ color: '#fd6500' }} className="mx-2">:</span>
                        <span className="text-white">{t("Qiymətlər", "Pricing", "Цены")}</span>
                    </div>
                </div>
            </section>

            
            <section className="pricing-content-area py-5">
                <div className="container py-5 text-center">
                    <h2 className="text-white fw-bold mb-4">
                        {t("Qiymət planımız", "Our Pricing Plan", "Наш тарифный план")}
                    </h2>
                    
                   
                    <div className="pricing-toggle-wrapper mb-5 reveal-up">
                        <button 
                            className={`toggle-btn ${!isYearly ? 'active' : ''}`} 
                            onClick={() => setIsYearly(false)}
                        >
                            {t("AYLIQ", "MONTHLY", "МЕСЯЦ")}
                        </button>
                        <button 
                            className={`toggle-btn ${isYearly ? 'active' : ''}`} 
                            onClick={() => setIsYearly(true)}
                        >
                            {t("İLLİK", "YEARLY", "ГОД")}
                        </button>
                    </div>

                   
                    <div className="row g-4 align-items-center">
                        {pricingData.map((plan, index) => (
                            <div 
                                key={index} 
                                className="col-lg-4 reveal-up" 
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={`dark-price-card ${plan.featured ? 'featured' : ''}`}>
                                    <h5 className="text-white-50 mb-4">{plan.title}</h5>
                                    <div className="price-value mb-4">
                                        <span className="currency">$</span>
                                        <span className="amount">
                                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                        </span>
                                        <span className="period">
                                            /{isYearly ? t('il', 'yr', 'год') : t('ay', 'mo', 'мес')}
                                        </span>
                                    </div>
                                    
                                    
                                    <ul className="feature-list list-unstyled mb-5">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="text-white-50 small mb-2">
                                                <i className="fa-solid fa-check text-orange me-2"></i> {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="sign-up-btn">
                                        {plan.btnText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    <div className="all-packages-info mt-5 pt-5 reveal-up">
                        <h6 className="text-white mb-4">
                            {t("Bütün paketlərə daxildir:", "Included in all packages:", "Включено во все пакеты:")}
                        </h6>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            <div className="include-item text-white-50 small">
                                <i className="fa-solid fa-circle-check text-orange me-2"></i>
                                {t("14 günlük geri ödəniş", "14-day money back", "14-дневная гарантия")}
                            </div>
                            <div className="include-item text-white-50 small">
                                <i className="fa-solid fa-circle-check text-orange me-2"></i>
                                {t("Şəxsi kabinet", "Private dashboard", "Личный кабинет")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;