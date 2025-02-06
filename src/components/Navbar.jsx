import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/logo2.png";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { Button, Modal, Box, Typography } from "@mui/material";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navbarRef = useRef(null);

  const openNav = () => {
    setNav(!nav);
  };

  // Get user data from localStorage without refreshing the page
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("carBookingData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("carBookingData"); 
    setUserData(null); 
    setOpen(false); 
    window.location.reload(); 
  };
  

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsSticky(!entry.isIntersecting);
  //     },
  //     {
  //       root: null,
  //       threshold: 0,
  //     }
  //   );

  //   if (navbarRef.current) {
  //     observer.observe(navbarRef.current);
  //   }

  //   return () => {
  //     if (navbarRef.current) {
  //       observer.unobserve(navbarRef.current);
  //     }
  //   };
  // }, []);

  return (
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
          <li>
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li>

          {!userData ? (
            <>
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
            </>
          ) : (
            <li>
              <div className="profile-info" onClick={handleOpen}>
                <img
                  src={`https://ui-avatars.com/api/?name=${userData.mobile}`}
                  alt="profile-avatar"
                  className="profile-avatar"
                />
              </div>
            </li>
          )}
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
          {!userData ? (
            <>
              <Link className="navbar__buttons__sign-in" to="/">
                Sign In
              </Link>
              <Link className="navbar__buttons__register" to="/">
                Register
              </Link>
            </>
          ) : (
            <div className="profile-info" onClick={handleOpen}>
              <img
                src={`https://ui-avatars.com/api/?name=${userData.mobile}`}
                alt="profile-avatar"
                className="profile-avatar"
              />
            </div>
          )}
        </div>

        <div className="mobile-hamb" onClick={openNav}>
          <FiMenu />
        </div>
      </div>

      {/* MUI Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Information
          </Typography>
          <div className="profile-modal__content">
            {userData ? (
              <>
                <div><strong>National ID:</strong> {userData.nationalId || "N/A"}</div>
                <div><strong>Mobile No:</strong> {userData.mobile || "N/A"}</div>
              </>
            ) : (
              <div>No user data available.</div>
            )}
          </div>
          <Button
            startIcon={<FiLogOut />}
            onClick={handleLogout}
            sx={{ mt: 2 }}
            variant="contained"
            color="error"
          >
            Logout
          </Button>
        </Box>
      </Modal>
    </nav>
  );
}

const style = {
  position: "absolute",
  top: "22%",
  right: "0%",
  transform: "translate(-5%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default Navbar;
