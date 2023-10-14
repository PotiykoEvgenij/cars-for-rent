import React from "react";
import CarsCard from "../../components/carsCard/CarsCard";
import styles from "./Cars.module.css"
import { getCars } from "../../API/API";

export default function Cars() {
    const cars = getCars();

    return (
        <div className={styles.wrapper}>
            <h1>Cars</h1>
            <CarsCard cars={cars} />
        </div>
    );
};