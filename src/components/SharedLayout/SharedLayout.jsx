// import React from "react";
// import { Routes, Route } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <div>
            <div>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/cars">Catalog</NavLink>
                <NavLink to="/favorite">Favorite</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};