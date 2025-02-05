import React from "react";
import Sedan from "../images/vehicle/c7.png";
import Luxury from "../images/vehicle/c8.png";
import SUVs from "../images/vehicle/c9.png";
import Pickup from "../images/vehicle/c10.png";
import Supercar from "../images/vehicle/c11.png";
import Minivans from "../images/vehicle/c12.png";

function Vehicle() {
    const vehicleTypes = [
        { src: Sedan, name: "Sedan" },
        { src: Luxury, name: "Luxury" },
        { src: SUVs, name: "SUVs" },
        { src: Pickup, name: "Pickup" },
        { src: Supercar, name: "Supercar" },
        { src: Minivans, name: "Minivans" },
    ];

    return (
        <section className="vehicle-section">
            <div className="vehicle-container">
                <div className="vehicle-header">
                    <h2 className="vehicle-title">Explore by vehicle type</h2>
                </div>

                <div className="vehicle-cards-wrapper">
                    <div className="vehicle-cards">
                        {vehicleTypes.map((vehicle, index) => (
                            <div key={index} className="vehicle-card">
                                <img
                                    className="vehicle-card__image"
                                    src={vehicle.src}
                                    alt={`${vehicle.name} Image`}
                                />
                                <p className="vehicle-card__name">{vehicle.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vehicle;
