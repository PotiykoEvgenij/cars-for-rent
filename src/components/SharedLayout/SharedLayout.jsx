// import React from "react";
// import { Routes, Route } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";

export default function SharedLayout() {
    return (
        <div>
            <div className={styles.SharedLayout}>
                <NavLink to="/" className={styles.NavLink}>Main</NavLink>
                <NavLink to="/cars" className={styles.NavLink}>Catalog</NavLink>
                <NavLink to="/favorite" className={styles.NavLink}>Favorite</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};