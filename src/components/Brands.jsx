import React from "react";
import Toyota from "../images/brands/1.png";
import Ford from "../images/brands/2.png";
import Bentley from "../images/brands/3.png";
import Cheavrolet from "../images/brands/4.png";
import Hyundai from "../images/brands/5.png";
import Mercedes from "../images/brands/6.png";

function Brands() {
  const brandLogos = [
    { src: Toyota, name: "Toyota" },
    { src: Ford, name: "Ford" },
    { src: Bentley, name: "Bentley" },
    { src: Cheavrolet, name: "Cheavrolet" },
    { src: Hyundai, name: "Hyundai" },
    { src: Mercedes, name: "Mercedes" },
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-header">
          <h3 className="brands-subtitle">Find your car by car brand</h3>
          <h2 className="brands-title">Browse by Brands</h2>
        </div>

        <div className="brands-cards-wrapper">
          <div className="brands-cards-container">
            {brandLogos.map((logo, index) => (
              <div key={index} className="brands-card">
                <img
                  className="brands-card__image"
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                />
                <p className="brands-card__name">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
