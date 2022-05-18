import React from "react";
import './series.css';
import { Link } from "react-router-dom";
import Data from '../../assets/dataSeries'

const Series = () => {
    return (
        <section className='content'>
            <section className="visible">
                <div id="filters">
                    <div className="form1">
                        <select id="genre" className="form-input" name="genre">
                            <option value="">-- Genres --</option>
                            <option value="action">Action</option>
                            <option value="aventure">Aventure</option>
                            <option value="comedy">Comédie</option>
                            <option value="drama">Drame</option>
                            <option value="espionage">Espionnage</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="sci-fi">Science-Fiction</option>
                            <option value="suspense">Suspense</option>
                        </select>
                    </div>
                    <div className="form1">
                        <select id="platform" className="form-input" name="platform">
                            <option value="">-- Plateformes --</option>
                            <option value="netflix">Netflix</option>
                            <option value="hbo">HBO</option>
                            <option value="prime">Prime Video</option>
                            <option value="disney">Disney+</option>
                        </select>
                    </div>
                    <div className="form1">
                        <input type="number" className="form-input" placeholder="Années" />
                    </div>
                </div>
                <div className="scroll-serie">
                    {
                        Data.map((serie, key) => {
                            return (
                                <Link to={`/series/${serie.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")}`} key={key} className="cover" tabIndex="0">
                                    <img loading="lazy" src={serie.cover} alt={serie.title} />
                                    <h4>{serie.title}</h4>
                                </Link>
                            )
                        }
                    )}
                </div>
            </section>
        </section>
    )
}

export default Series;

/*  */