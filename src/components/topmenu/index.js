import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/index";
import './topmenu.css'

const Topmenu = () => {
    return (
        <nav className="search">
            <div className="categories">
                <Link to="/films">Films</Link>
                <Link to="/series">Séries</Link>
                <Link to="/animes">Animes</Link>
            </div>
            <Searchbar />
            <div className="spacer"></div>
        </nav>
    )
}

export default Topmenu;