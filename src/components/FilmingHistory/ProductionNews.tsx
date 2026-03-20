import React from 'react';
import '../../assets/css/FilmingHistory/ProductionNews.css';
import blog1 from "../../assets/image/blog1.jpg"; 
import blog2 from "../../assets/image/blog2.jpg";
import blog3 from "../../assets/image/blog3.jpg";
import { useL } from "../../useL";

const ProductionNews: React.FC = () => {
  const t = useL();
  const newsData = [
    { id: 1, img: blog1, date: t('13 Yan 2026', 'Jan 13, 2026', '13 Янв 2026'), comments: t('0 Şərh', '0 Comments', '0 Комментариев'), title: t('İnsanların Gözü ilə Fergusonun Hekayəsi', "Ferguson's Story Through the Eyes of People", "История Фергюсона глазами людей") },
    { id: 2, img: blog2, date: t('13 Yan 2026', 'Jan 13, 2026', '13 Янв 2026'), comments: t('0 Şərh', '0 Comments', '0 Комментариев'), title: t('Oppenheimer Filminə Jason Clarke və Louise Lombard Əlavə Olundu', "Jason Clarke and Louise Lombard Added to Oppenheimer", "Джейсон Кларк и Луиза Ломбард добавлены в Оппенгеймер") },
    { id: 3, img: blog3, date: t('13 Yan 2026', 'Jan 13, 2026', '13 Янв 2026'), comments: t('0 Şərh', '0 Comments', '0 Комментариев'), title: t('Morbius Yeni Treylerdə Mənfi Qəhrəman Rolunu Üstələnir', "Morbius Takes on the Villain Role in New Trailer", "Морбиус берет на себя роль злодея в новом трейлере") }
  ];

  return (
    <section className="news-section py-5">
      <div className="container py-5 text-center">
        <div className="news-head mb-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <span className="n-line"></span>
            <span className="n-label">{t("SON BLOQLAR", "LATEST BLOGS", "ПОСЛЕДНИЕ БЛОГИ")}</span>
            <span className="n-line"></span>
          </div>
          <h2 className="news-main-title">{t("Son Bloqlar və Xəbərlər", "Latest Blogs and News", "Последние блоги и новости")}</h2>
        </div>
        <div className="row g-4">
          {newsData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="news-card text-start shadow-sm">
                <div className="news-img-container"><img src={item.img} alt={item.title} /></div>
                <div className="news-body p-4">
                  <div className="news-meta d-flex gap-3 mb-3">
                    <span className="meta-item"><i className="fa-regular fa-calendar me-1"></i> {item.date}</span>
                    <span className="meta-item"><i className="fa-regular fa-comment me-1"></i> {item.comments}</span>
                  </div>
                  <h4 className="news-card-title">{item.title}</h4>
                  <a href="#" className="read-more-link mt-3 d-inline-block">
                    {t("Daha Çox", "Read More", "Подробнее")} <i className="fa-solid fa-arrow-right-long ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionNews;