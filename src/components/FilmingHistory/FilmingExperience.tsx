import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useL } from "../../useL"; 
import "../../assets/css/FilmingHistory/FilmingExperience.css";

import filmSet1 from "../../assets/image/Filmingex.jpg";
import filmSet2 from "../../assets/image/Filmingex-2.jpg";
import filmSet3 from "../../assets/image/Filmingex-3.jpg";

const FilmingExperience: React.FC = () => {
  const navigate = useNavigate();
  const t = useL();

  return (
    <section className="filming-experience-wrapper py-5 bg-white">
      <div className="container py-lg-5">
        <div className="row align-items-center">

         
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="experience-img-grid">
              <div className="row g-4">
                <div className="col-7">
                  <div className="img-holder main-holder">
                    <img src={filmSet1} alt="Experience 1" className="img-fluid" />
                  </div>
                </div>
                <div className="col-5">
                  <div className="d-flex flex-column gap-4">
                    <div className="img-holder side-holder">
                      <img src={filmSet2} alt="Experience 2" className="img-fluid" />
                    </div>
                    <div className="img-holder ">
                      <img src={filmSet3} alt="Experience 3" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 ps-lg-5">
            <div className="experience-content-box">
              <div className="label-wrapper d-flex align-items-center gap-3 mb-4">
                <span className="orange-line-short"></span>
                <span className="label-text">{t("HAQQIMDA", "ABOUT ME", "ОБО МНЕ")}</span>
              </div>

              <h2 className="main-display-title mb-4">
                {t("Dünyanın Ən Məşhur Aktyoru", "The World's Most Famous Actor", "Самый знаменитый актер в мире")}
              </h2>

              <div className="description-block">
                <p className="desc-text mb-4">
                  {t("Faime Production, peşəkar rejissor heyəti ilə həm yerli, həm də beynəlxalq səviyyədə fəaliyyət göstərən tam xidmətli bir prodüksiyon evidir.", "Faime Production is a full-service production house with a professional director staff, operating both locally and internationally.", "Faime Production — это продюсерский центр полного цикла, работающий как на местном, так и на международном уровне.")}
                </p>
                <p className="desc-text mb-5">
                  {t("Biz inanırıq ki, film və hərəkətli görüntülər mühüm dəyişikliklər yaratmaq gücünə malikdir. Brendlərə bu gücü dərk etməyə, agentliklərə isə yaradıcı vizyonlarını həyata keçirməyə kömək edirik.", "We believe that film and moving images have the power to create significant changes. We help brands realize this power and agencies bring their creative visions to life.", "Мы верим, что кино и движущиеся изображения способны вызвать важные изменения. Мы помогаем брендам осознать эту силу, а агентствам воплотить в жизнь их творческие замыслы.")}
                </p>
              </div>

              <button onClick={() => navigate('/contact')} className="btn-orange-action d-flex align-items-center gap-2">
                {t("Məni İşə Al", "Hire Me", "Нанять меня")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FilmingExperience;