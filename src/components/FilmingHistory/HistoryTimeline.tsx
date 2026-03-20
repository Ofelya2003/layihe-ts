import React from 'react';
import '../../assets/css/FilmingHistory/HistoryTimeline.css';
import mainCircle from "../../assets/image/Timeline.jpg"; 
import subCircle1 from "../../assets/image/Timeline-2.jpg";
import subCircle2 from "../../assets/image/Timeline-3.jpg";
import { useL } from "../../useL";

const HistoryTimeline: React.FC = () => {
  const t = useL();
  const timelineData = [
    { 
        id: 1, 
        year: t('2000-2005-ci illərdən', 'From 2000-2005', 'С 2000-2005 годов'), 
        icon: 'fa-mug-hot', 
        desc: t('Fəaliyyətimizin ilk illərində kiçik layihələrlə başladıq və böyük hədəflərə doğru inamla addımladıq.', 'In the first years, we started with small projects and moved confidently towards big goals.', 'В первые годы мы начинали с малых проектов и уверенно шли к большим целям.') 
    },
    { 
        id: 2, 
        year: t('2005-2010-ci illərdən', 'From 2005-2010', 'С 2005-2010 годов'), 
        icon: 'fa-star', 
        desc: t('Yaradıcılıq yolumuzda ilk uğurlarımızı qazandıq və sektorun tanınan simalarından birinə çevrildik.', 'We achieved our first successes and became one of the recognized figures in the sector.', 'Мы добились первых успехов и стали одной из узнаваемых фигур в секторе.') 
    },
    { 
        id: 3, 
        year: t('2010-2015-ci illərdən', 'From 2010-2015', 'С 2010-2015 годов'), 
        icon: 'fa-award', 
        desc: t('Beynəlxalq festivallarda iştirak edərək peşəkarlığımızı sübut etdik və nüfuzlu mükafatlara layiq görüldük.', 'We proved our professionalism by participating in international festivals.', 'Мы доказали свой профессионализм, участвуя в международных фестивалях.') 
    },
  ];

  return (
    <section className="timeline-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <div className="timeline-head mb-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="orange-line"></span>
                <span className="orange-label">{t("TARİXÇƏ", "HISTORY", "ИСТОРИЯ")}</span>
              </div>
              <h2 className="timeline-main-title">{t("Tariximiz Haqqında Bəzi Məlumatlar", "Some Information About Our History", "Некоторая информация о нашей истории")}</h2>
            </div>
            <div className="timeline-items">
              {timelineData.map((item, index) => (
                <div key={item.id} className="timeline-single d-flex gap-4">
                  <div className="timeline-visual">
                    <div className="icon-box-main">
                      <i className={`fa-solid ${item.icon}`}></i>
                      <div className="mini-check"><i className="fa-solid fa-check"></i></div>
                    </div>
                    {index !== timelineData.length - 1 && <div className="connector-line"></div>}
                  </div>
                  <div className="timeline-text pb-4">
                    <h4 className="item-year">{item.year}</h4>
                    <p className="item-desc text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-orange-more mt-4">
              {t("Daha Çox", "Read More", "Подробнее")} <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </button>
          </div>
          <div className="col-lg-6 position-relative mt-5 mt-lg-0">
            <div className="circles-wrapper">
              <div className="big-circle shadow-lg"><img src={mainCircle} alt="History" /></div>
              <div className="small-circle top-right shadow"><img src={subCircle1} alt="Sub 1" /></div>
              <div className="small-circle bottom-left shadow"><img src={subCircle2} alt="Sub 2" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;