import { useState, useEffect } from "react";
import car1 from "../images/hero/hero-1.jpg";
import car2 from "../images/hero/hero-2.jpg";
// import car3 from "../images/hero/car3.jpg";
// import car4 from "../images/hero/car4.jpg";
// import car5 from "../images/hero/car5.jpg";
// import car6 from "../images/hero/car6.jpg";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FiArrowUp } from "react-icons/fi";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const carImages = [car1, car2 ];

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % carImages.length;
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + carImages.length) % carImages.length;
    setCurrentIndex(prevIndex);
  };

  const scrollToTop = () => {
    setScrollPosition(0);
  };

  // Automatic Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle Scroll Position and Restore on Refresh
  useEffect(() => {
    const savedScrollPosition = parseInt(localStorage.getItem("scrollPosition")) || 0;
    setScrollPosition(savedScrollPosition);
  }, []);

  useEffect(() => {
    localStorage.setItem("scrollPosition", scrollPosition);
  }, [scrollPosition]);

  return (
    <div
      className="hero-section"
    >
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${carImages[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></div>

      <div className="carousel-nav">
        <button onClick={goToPreviousImage} className="carousel-button">
          <SlArrowLeft />
        </button>

        <div className="hero-content">
          <span>
            Drive Your <span className="dreme"> Dream</span> Car
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
