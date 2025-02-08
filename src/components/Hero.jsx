import { useState, useEffect } from "react";
import car1 from "../images/hero/hero-1.jpg";
import car2 from "../images/hero/hero-2.jpg";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FiArrowUp } from "react-icons/fi";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const carImages = [car1, car2];

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % carImages.length;
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + carImages.length) % carImages.length;
    setCurrentIndex(prevIndex);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${carImages[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="carousel-nav">
        <button onClick={goToPreviousImage} className="carousel-button">
          <SlArrowLeft />
        </button>

        <div className="hero-content">
          <span>
            Drive Your <span className="dreme"> Dream</span> Car.
          </span>
        </div>

        <button onClick={goToNextImage} className="carousel-button">
          <SlArrowRight />
        </button>
      </div>

      {scrollPosition > 200 && (
        <button onClick={scrollToTop} className="scroll-up">
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}

export default Hero;
