import AboutSection from "../../components/Home/AboutSection"; 
import FeaturedFilms from "../../components/Home/FeaturedFilms";
import FeedbackCard from "../../components/Home/FeedbackCard";
import Homeslider from "../../components/Home/Homeslider";
import  ServicesSection from "../../components/Home/ServicesSection";
import TeamSection from "../../components/Home/TeamSection";



const Home = () => {
  return (
    <>
      <Homeslider />
      <AboutSection />
      <ServicesSection />
      <FeaturedFilms/>
      <FeedbackCard />
      <TeamSection />
     
    </>
  );
}; export default Home ;    