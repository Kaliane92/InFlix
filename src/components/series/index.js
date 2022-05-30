import React, { useState, useEffect } from "react";
import './series.css';
import { Link } from "react-router-dom";
import Data from '../../assets/dataSeries'
import Aos from "aos";
import "aos/dist/aos.css"

const Series = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const [series, setSeries] = useState(Data);
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");
    const modifiedDataP = Data.filter((e) => {
        return e.platform.includes(platform)
    })
    const modifiedDataG = Data.filter((e) => {
        return e.genre.includes(genre)
    })
    useEffect(() => {
        setSeries(modifiedDataP)
    }, [platform])
    useEffect(() => {
        setSeries(modifiedDataG)
    }, [genre])

    return (
        <section className='content'>
            <section className="visible">
                <div id="filters">
                    <div className="form1">
                        <select id="genre" className="form-input" name="genre" onChange={(e) => {
                            setGenre(e.target.value)
                        }}>
                            <option value="">-- Genres --</option>
                            <option value="Action">Action</option>
                            <option value="Aventure">Aventure</option>
                            <option value="Comédie">Comédie</option>
                            <option value="Policier">Policier</option>
                            <option value="Western">Western</option>
                            <option value="Super-Héros">Super-Héros</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Drame">Drame</option>
                            <option value="Espionnage">Espionnage</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Science-Fiction">Science-Fiction</option>
                            <option value="Suspense">Suspense</option>
                        </select>
                    </div>
                    <div className="form1">
                        <select id="platform" className="form-input" name="platform" onChange={(e) => {
                            setPlatform(e.target.value)
                        }}>
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
                <div data-aos="fade-up" className="scroll-serie">
                    {
                        series.map((serie, key) => {
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