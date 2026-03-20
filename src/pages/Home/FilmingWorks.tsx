import FilmingAboutSection from "../../components/FilmingWorks/FilmingAboutsection";
import FilmingGallery from "../../components/FilmingWorks/FilmingGallery";
import FilmingHero from "../../components/FilmingWorks/FilmingHero"
import FilmingServices from "../../components/FilmingWorks/FilmingServices";
import LatestBlog from "../../components/FilmingWorks/LatestBlog";
import FeedbackCard from "../../components/Home/FeedbackCard";

const FilmingWorks: React.FC = () => {
    return (
        <main className="filming-works-page">
            <FilmingHero />
            <FilmingAboutSection />
            <FilmingServices/>
            <FilmingGallery />
            <FeedbackCard/>
            <LatestBlog/>
        </main>
    );
}; export default FilmingWorks
