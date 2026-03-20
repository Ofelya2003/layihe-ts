import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/Pages/NotFound.css";
import sadnessImg from '../../assets/image/NotFound.png';
import { useL } from "../../useL";

const NotFound: React.FC = () => {
    const t = useL();
    return (
        <div className="not-found-fullscreen-pixar bg-white vw-100 vh-100 d-flex align-items-center justify-content-center position-fixed top-0 left-0" style={{ zIndex: 99999 }}>
            <div className="content-404-pixar d-flex align-items-center justify-content-center flex-wrap gap-5 container">
                <div className="sadness-img-box">
                    <img src={sadnessImg} alt="Sadness" className="sadness-char-img" />
                </div>
                <div className="pixar-404-text text-start">
                    <h1 className="pixar-404-main mb-3">{t("Aaa... Ağlama.", "Aaa... Don't cry.", "Ааа... Не плачь.")}</h1>
                    <p className="pixar-404-sub small text-muted mb-4">{t("Bu sadəcə bir 404 xətasıdır!", "It's just a 404 error!", "Это всего лишь ошибка 404!")}</p>
                    <p className="pixar-404-desc text-muted mb-5" style={{lineHeight: '1.8'}}>
                        {t("Axtardığın səhifə, deyəsən,", "The page you are looking for seems to be", "Страница, которую вы ищете, кажется,")} <br /> 
                        <span className="fw-bold">{t("Uzunmüddətli Yaddaşda", "in Long-term Memory", "в Долговременной Памяти")}</span> {t("itib.", "lost.", "потерялась.")}
                    </p>
                    <Link to="/" className="pixar-btn-back px-5 py-3 rounded-0 text-decoration-none">
                        {t("ANA SƏHİFƏYƏ QAYIT", "BACK TO HOME", "ВЕРНУТЬСЯ НА ГЛАВНУЮ")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;