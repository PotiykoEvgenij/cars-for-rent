import React from "react";
import CarsCard from "../../components/carsCard/CarsCard";
import styles from "./Cars.module.css"


export default function Cars() {
    return (
        <div className={styles.wrapper}>
            <div>Cars</div>
            <CarsCard />
        </div>
    );
};