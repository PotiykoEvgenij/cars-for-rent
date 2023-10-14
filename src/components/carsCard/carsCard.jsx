import React from "react";
import styles from "./CarsCard.module.css";

export default function CarsCard({cars}) {
    return (
        <ul className={styles.cards}>
            {cars.map((car) => (
                <li  className={styles.cardWrapper}>
                    <div className={styles.imgWrapper}>
                        <img src={car.img} alt={car.make} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3>{car.make}</h3>
                    <h4>{car.model}</h4>
                    <h5>{car.type}</h5>
                </li>
            ))}
        </ul>
    );
};