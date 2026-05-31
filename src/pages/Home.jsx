import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseMe from "../components/WhyChooseMe";
import FiverrSection from "../components/FiverrSection";
import MyPortfolio from "../components/MyPortfolio";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseMe />
      <FiverrSection />
      <MyPortfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;