import HistoryAbout from "../../components/FilmingHistory/HistoryAbout.tsx";
import FilmingExperience from "../../components/FilmingHistory/FilmingExperience.tsx";
import HistoryTimeline from "../../components/FilmingHistory/HistoryTimeline.tsx";
import Testimonials from "../../components/FilmingHistory/Testimonials.tsx";
import ProductionNews from "../../components/FilmingHistory/ProductionNews.tsx";


const FilmingHistory = () => {
  return (
    <div className="filming-history-page">
     <HistoryAbout/>
     <FilmingExperience/>
     <HistoryTimeline/>
     <Testimonials/>
     <ProductionNews/>
    </div>
  );
};

export default FilmingHistory;