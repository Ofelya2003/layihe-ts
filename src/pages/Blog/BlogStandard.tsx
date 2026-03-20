import { useState } from 'react'; 
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../assets/css/Blog/BlogStandart.css";
import { useL } from "../../useL";

import BlogImg1 from "../../assets/image/Blogstandartone.jpg"
import BlogImg2 from "../../assets/image/blogstandartwo.png"
import BlogImg3 from "../../assets/image/blogstandartthree.png"
import BlogImg4 from "../../assets/image/blogstandartfour.jpg"
import BlogImg5 from "../../assets/image/blogstandartfive.jpg"
import BlogImg6 from "../../assets/image/blogstandartsix.jpg"
import BlogImg7 from "../../assets/image/blogstandartseven.jpg"

const BlogStandard = () => {
  const t = useL();
  const [searchTerm, setSearchTerm] = useState(""); 

 
  const allPosts = [
    {
      id: "1",
      img: BlogImg1,
      cat: t("Cinayət", "Crime", "Криминал"),
      title: t("Ailəsi onun artıq qızı ilə birlikdə olduğunu bilməkdən təsəlli tapdıqlarını bildirdi", "The family said they were comforted...", "Семья сказала..."),
      desc: t("Potensial müştərilər qazanmağın bir çox yolu var...", "Many ways to gain potential...", "Много способов привлечь...")
    },
    {
      id: "2",
      img: BlogImg2,
      cat: t("Sənədli", "Documentary", "Документальный"),
      title: t("1980-ci illər boyu onlar ABŞ hit-paradlarında əsas güc olaraq qaldılar", "Throughout the 1980s...", "На протяжении 1980-х..."),
      desc: t("İstehsalat prosesində yeni yanaşmalar tətbiq etmək vacibdir...", "Important to apply new approaches...", "Важно применять новые подходы...")
    },
    {
      id: "3",
      img: BlogImg3,
      cat: t("Mistika", "Mystery", "Мистика"),
      title: t("Grammy mükafatlı müğənni Anita Pointer 74 yaşında vəfat etdi", "Grammy-winning singer Anita Pointer died...", "Обладательница Грэмми Анита Пойнтер умерла..."),
      desc: t("Dünya musiqi sənayesi böyük bir itki ilə üzləşdi...", "The music world faced a big loss...", "Музыкальный мир понес большую потерю...")
    }
  ];

  
  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

const stories = [
    { img: BlogImg4, title: t("Xəstəlik yayılmağa davam edir...", "Disease continues...", "Болезнь продолжается"), cat: "Marketinq" },
    { img: BlogImg5, title: t("Çindən gələn səyahətçilər...", "Travelers from China", "Путешественники из Китая"), cat: "Agentlik" },
    { img: BlogImg6, title: t("Kino sənayesi texnologiyaları...", "Film technologies", "Кинотехнологии"), cat: "İncəsənət" },
    { img: BlogImg7, title: t("Tayvan Prezidentinin müraciəti...", "Taiwan President's address", "Обращение президента Тайваня"), cat: "Siyasət" }
  ];

  return (
    <div className="blog-standard-container bg-black text-white">
      <div className="container">
        <div className="row">

          
          <div className="col-lg-8">
            <div className="blog-posts-list">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article key={post.id} className="blog-post-item mb-5 shadow-sm">
                    <div className="post-thumb mb-4 overflow-hidden" style={{ borderRadius: '15px' }}>
                      <img src={post.img} alt="blog" className="img-fluid w-100 main-img-effect" style={{ objectFit: 'cover', height: '450px' }} />
                    </div>
                    <div className="post-details">
                      <span className="text-orange fw-bold">{post.cat}</span>
                      <span className="text-secondary ms-3">• 14 May, 2026</span>
                      <h2 className="mt-3">
                        <Link to={`/blog-3/${post.id}`} className="text-white text-decoration-none post-title-hover">{post.title}</Link>
                      </h2>
                      <p className="text-secondary mt-3">{post.desc}</p>
                      <button className="read-more-btn-custom mt-3">{t("Bloqu Oxu", "Read Blog", "Читать блог")}</button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-5 shadow-sm sidebar-widget-card">
                  <h3>{t("Heç bir nəticə tapılmadı", "No results found", "Ничего не найдено")}</h3>
                  <p className="text-secondary">{t("Başqa sözlə yoxlayın", "Try another keyword", "Попробуйте другое слово")}</p>
                  <button onClick={() => setSearchTerm("")} className="read-more-btn-custom mt-3">
                    {t("Sıfırla", "Reset", "Сбросить")}
                  </button>
                </div>
              )}
            </div>
          </div>

         
          <div className="col-lg-4 ps-lg-5">
            <aside className="blog-sidebar">
              
              <div className="sidebar-widget-card mb-4">
                <div className="search-box-wrap">
                  <input 
                    type="text" 
                    placeholder={t("Axtar...", "Search...", "Поиск...")} 
                    className="bg-transparent text-white border-0 w-100"
                    style={{outline: 'none'}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                  />
                  <button className="bg-transparent border-0 text-orange"><FaSearch /></button>
                </div>
              </div>

              <div className="sidebar-widget-card mb-4">
                <h5 className="widget-title-line mb-4">{t("Əsas Hekayələr", "Top Stories", "Главные истории")}</h5>
                {stories.map((s, i) => (
                  <div key={i} className="mini-post-card d-flex align-items-center gap-3 mb-3" style={{cursor: 'pointer'}}>
                    <img src={s.img} alt="mini" className="sidebar-round-img" />
                    <div>
                      <h6 className="m-0 text-white small-title">{s.title.substring(0, 35)}...</h6>
                      <span className="text-orange x-small-text">{s.cat}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-widget-card mb-4">
                <h5 className="widget-title-line mb-4">{t("Kateqoriyalar", "Categories", "Категории")}</h5>
                <ul className="list-unstyled m-0">
                  <li className="cat-item-row d-flex justify-content-between" onClick={() => setSearchTerm("Action")}>
                    <span>Action</span> <span className="text-orange">10</span>
                  </li>
                  <li className="cat-item-row d-flex justify-content-between" onClick={() => setSearchTerm("Drama")}>
                    <span>Drama</span> <span className="text-orange">12</span>
                  </li>
                  <li className="cat-item-row d-flex justify-content-between border-0" onClick={() => setSearchTerm("Crime")}>
                    <span>Crime</span> <span className="text-orange">05</span>
                  </li>
                </ul>
              </div>

            </aside>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogStandard;