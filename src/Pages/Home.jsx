import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import Banks from "../components/Banks";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Brands from "../components/Brands";
import Vehicle from "../components/Vehicle";


function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <Banks />
      <Vehicle/>
      <Brands/>
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
