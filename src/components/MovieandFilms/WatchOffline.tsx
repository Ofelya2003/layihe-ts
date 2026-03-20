import "../../assets/css/MovieandFilms/watchoffline.css";
import imagemovie1 from "../../assets/image/movieandfilm-1.jpg"
import imagemovie2 from "../../assets/image/movieandfilm-2.jpg"
import imagemovie3 from "../../assets/image/movieandfilm-3.jpg"
import imagemovie4 from "../../assets/image/movieandfilm-4.jpg"
import imagemovie5 from "../../assets/image/movieandfilm-5.jpg"
import imagemovie6 from "../../assets/image/movieandfilm-6.jpg"
import { useL } from "../../useL";

const WatchOffline = () => {
  const t = useL();
  return (
    <section className="watch-offline-section py-5 bg-black">
      <div className="container">
        <div className="offline-banner-container">
          <div className="row align-items-center h-100">
            <div className="col-lg-5 mb-5 mb-lg-0 z-index-2">
              <div className="offline-text-content px-md-5">
                <span className="offline-label">{t("Oflayn TV İzlə", "Watch TV Offline", "Смотреть ТВ офлайн")}</span>
                <h2 className="offline-main-title">
                  {t("Verilişləri yükləyin və oflayn izləyin", "Download shows and watch offline", "Загружайте шоу и смотрите офлайн")}
                </h2>
                <div className="quality-row my-4">
                  <span className="hd-text">HD</span>
                  <span className="fourk-text">4K</span>
                </div>
                <button className="download-button">{t("İndi Yüklə", "Download Now", "Загрузить сейчас")}</button>
              </div>
            </div>
            <div className="col-lg-7 position-relative">
              <div className="mosaic-wrapper">
                <div className="mosaic-column col-1">
                  <img src={imagemovie1} alt="m1" /><img src={imagemovie2} alt="m2" />
                </div>
                <div className="mosaic-column col-2">
                  <img src={imagemovie3} alt="m3" /><img src={imagemovie4} alt="m4" />
                </div>
                <div className="mosaic-column col-3">
                  <img src={imagemovie5} alt="m5" /><img src={imagemovie6} alt="m6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchOffline;