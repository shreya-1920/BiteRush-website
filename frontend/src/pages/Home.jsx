import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import StatsCounter from "../components/StatsCounter/StatsCounter";
import FeaturedRestaurants from "../components/FeaturedRestaurants/FeaturedRestaurants";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/HowItWorks/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <StatsCounter />
      <Categories />
      <HowItWorks />
      <FeaturedRestaurants />
      <Footer />
    </>
  );
}

export default Home;