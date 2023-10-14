import React from "react";

export default function CarsCard({cars}) {
    return (
        <ul>
            {cars.map((car) => (
                <li>
                    <h3>{car.make}</h3>
                    <h4>{car.model}</h4>
                    <h5>{car.type}</h5>
                    <img src={car.img} alt={car.make} width="250px"/>
                </li>
            ))}
        </ul>
    );
};