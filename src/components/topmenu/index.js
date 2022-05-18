import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../searchbar/index";
import './topmenu.css'

const Topmenu = () => {
    return (
        <nav className="search">
            <div className="categories">
                <NavLink className={({ isActive }) => isActive ? "selected" : null} to="/films">Films</NavLink>
                <NavLink className={({ isActive }) => isActive ? "selected" : null} to="/series">Séries</NavLink>
                <NavLink className={({ isActive }) => isActive ? "selected" : null} to="/animes">Animes</NavLink>
            </div>
            <Searchbar />
            <div className="spacer"></div>
        </nav>
    )
}

export default Topmenu;