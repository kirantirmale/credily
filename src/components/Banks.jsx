import React from "react";
import alrajhibanklogo from "../images/bank/alrajhibanklogo.png";
import anbBankLogo from "../images/bank/anbBankLogo.png";
import BankAljazira from "../images/bank/BankAljazira.png";
import emiratesnbdlogok from "../images/bank/emiratesnbdlogok.png";
import riyadhbankpng from "../images/bank/riyadhbankpng.png";
import SNBLogo from "../images/bank/SNBLogo.png";

function Banks() {
  const bankLogos = [
    { src: alrajhibanklogo, name: "Al Rajhi Bank" },
    { src: anbBankLogo, name: "ANB Bank" },
    { src: BankAljazira, name: "Bank Al Jazira" },
    { src: emiratesnbdlogok, name: "Emirates NBD" },
    { src: riyadhbankpng, name: "Riyadh Bank" },
    { src: SNBLogo, name: "SNB Bank" },
  ];

  return (
    <>
      <section className="banks-section">
        <div className="container">
          <div className="banks-container__title">
            <h3>Partnered with all prominent</h3>
            <h2>Banks & Financing Companies</h2>
          </div>

          <div className="bank-cards-wrapper">
            <div className="bank-cards-container">
              {[...bankLogos, ...bankLogos].map((logo, index) => (
                <div key={index} className="bank-card">
                  <img src={logo.src} alt={`${logo.name} Logo`} />
                  <p>{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banks;


