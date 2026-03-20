import { FaPlay } from "react-icons/fa";
import "../../assets/css/MovieandFilms/Hero.css";
import { useL } from "../../useL";

const Hero = () => {
  const t = useL();
  return (
    <div className="video-hero-container">
      <div className="video-foreground">
        <iframe
          src="https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&mute=1&controls=0&loop=1&playlist=zSWdZVtXT7E&rel=0&showinfo=0&iv_load_policy=3"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="Hero Video"
        ></iframe>
      </div>
      <div className="video-overlay"></div>
      <div className="video-text-content container">
        <span className="movie-badge">{t("YENİ BURAXILIŞ", "NEW RELEASE", "НОВЫЙ ВЫПУСК")}</span>
        <h1 className="display-1 fw-bold text-white mb-3">INTERSTELLAR</h1>
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="imdb-tag">IMDb 8.7</span>
          <span className="text-white-50">2014 • {t("Elm-Fantastika", "Sci-Fi", "Научная фантастика")} • 2s 49d</span>
        </div>
        <p className="lead text-white-50 w-50 mb-5 d-none d-md-block">
          {t("Bir qrup tədqiqatçı bəşəriyyətin sağ qalmasını təmin etmək üçün kosmosdakı qurd dəliyindən keçərək səyahət edir.", "A team of researchers travels through a wormhole in space to ensure humanity's survival.", "Группа исследователей отправляется через червоточину в космосе, чтобы обеспечить выживание человечества.")}
        </p>
        <div className="d-flex gap-3">
          <button className="btn-faime-orange d-flex align-items-center gap-2">
            <FaPlay /> {t("İNDİ İZLƏ", "WATCH NOW", "СМОТРЕТЬ СЕЙЧАС")}
          </button>
          <button className="btn-faime-outline">{t("DETALLAR", "DETAILS", "ДЕТАЛИ")}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;