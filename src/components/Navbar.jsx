import { Link } from "react-router-dom";
import Logo from "../images/logo/logo2.png";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [bgColor, setBgColor] = useState(""); 
  const navbarRef = useRef(null);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setBgColor("white"); 
      } else {
        setBgColor(""); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef}>
       
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <FiX /> 
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            {/* <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li> */}
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/">
                Sign In
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/">
                Register
              </Link>

            </li>

          </ul>
        </div>

        {/* Desktop Navbar */}
        <div className={`navbar ${isSticky ? "sticky" : ""}`} style={{ backgroundColor: bgColor }}>
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>

          <div className="mobile-hamb" onClick={openNav}>
            <FiMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
