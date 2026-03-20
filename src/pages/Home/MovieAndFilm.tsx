import BrowseByGenre from "../../components/MovieandFilms/BrowseByGenre";
import Hero from "../../components/MovieandFilms/Hero";
import MoviesForYou from "../../components/MovieandFilms/MoviesForYou";
import PremiumSection from "../../components/MovieandFilms/PremiumSection";
import TrendingNow from "../../components/MovieandFilms/TrendingNow";
import WatchOffline from "../../components/MovieandFilms/WatchOffline";

const MovieAndFilm = () => {
  return (
    <div className="movie-page-wrapper bg-black">
      
      <Hero />
      <TrendingNow/>
      <BrowseByGenre/>
      <PremiumSection/>
      <MoviesForYou/>
      <WatchOffline/>
     
    </div>
  );
};

export default MovieAndFilm;       