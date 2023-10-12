import React from "react";
import styles from "./mainPage.module.css";
// import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                Select your car
            </div>
            <button className={styles.buttonCatalog}>Catalog</button>
        </div>
    )
}