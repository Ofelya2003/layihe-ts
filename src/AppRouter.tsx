import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";


import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Portfolio from "./pages/Portfolio/Gallery";
import Blog from "./pages/Blog/BlogStandard";
import Contact from "./pages/Contact/Contact";
import MovieAndFilm from "./pages/Home/MovieAndFilm";
import ShopSidebar from "./pages/Pages/ShopSidebar";
import ShopDetails from "./pages/Pages/ShopDetails";
import Cart from "./pages/Pages/Cart"; 
import Wishlist from "./pages/Pages/Wishlist";
import AdminProducts from "./pages/AdminProducts";
import Auth from "./pages/Auth/Auth";
import Faq from "./pages/Pages/Faq";
import BlogStandard from "./pages/Blog/BlogStandard";
import Checkout from "./pages/Checkout";
import About from "./pages/Pages/About";
import FilmingWorks from "./pages/Home/FilmingWorks";
import FilmingHistory from "./pages/Home/FilmingHistory";
import Services from "./pages/Pages/Service";
import Pricing from "./pages/Pages/Pricing";
import NotFound from "./pages/Pages/NotFound";
import ServiceDetails from "./pages/Pages/ServiceDetails";
import Team from "./pages/Pages/Team";
import TeamDetails from "./pages/Pages/TeamDetails";
import Gallery from "./pages/Portfolio/Gallery";
import PortfolioDetails from "./pages/Portfolio/PortfolioDetails";
import BlogDetails from "./pages/Blog/BlogDetails";
import BlogWide from "./pages/Blog/BlogWide";
import MovieDetails from "./pages/Movie/MovieDetails";

const AppRouter = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="home-1" element={<FilmingWorks />} />
          <Route path="home-2" element={<MovieAndFilm />} />
          <Route path="home-3" element={<FilmingHistory />} />
          <Route path="movie-1" element={<Movie />} />
          <Route path="movie-details" element={<MovieDetails />} /> 
          <Route path="portfolio-1" element={<Gallery />} />
          <Route path="portfolio-2" element={<PortfolioDetails />} />
          <Route path="pages1" element={<About />} />
          <Route path="pages2" element={<Services />} />
          <Route path="pages3" element={<ServiceDetails />} />
          <Route path="pages4" element={<Team />} />
          <Route path="pages5" element={<TeamDetails />} />
          <Route path="pages6" element={<Faq />} />
          <Route path="pages7" element={<Pricing />} />
          <Route path="pages8" element={<Cart />} />
          <Route path="pages9" element={<Contact />} /> 
          <Route path="pages10" element={<NotFound />} />
          <Route path="pages11" element={<ShopSidebar />} />
          <Route path="pages13/:id?" element={<ShopDetails />} />
          <Route path="pages14" element={<Wishlist />} />
          <Route path="blog-1" element={<BlogStandard />} />
          <Route path="blog-2" element={<BlogWide />} />
          <Route path="blog-3" element={<BlogDetails />} />
          <Route path="admin" element={<AdminProducts />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;