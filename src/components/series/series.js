import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Richcard from "../card/Richcard";
import './series.css'

const Serie = (props) => {
    const [data, setData] = useState(null);
    const bgimg = props.bg;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(props.dataUrl);
            setData(response.data.episodes);
        };

        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <section className='content serie' id="main-content" style={{ backgroundImage: "url(" + bgimg + ")", backgroundSize: "cover" }}>
            <div id="sideS" className="serie-infos">{
                <>
                    <div className="infos">
                        <p>{props.genre}</p>
                        <p>{props.year}</p>
                        <p>{props.season} seasons</p>
                    </div>
                    <h2 className="Titre">
                        {props.title}
                    </h2>
                    <div className="progressBarContainer" style={{width: "100%"}}>
                        <div className="progressBar">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="btn-movie" style={{display: "flex"}}>
                        <button className="btn-play">Regarder</button>
                        <button className="btn-watchlist">Watchlist</button>
                    </div>
                </>

            }
            </div>
            <div id="sideS" className="episodes">
                {
                    data !== null ?
                        data.map((episode) => {
                            return (
                                <Richcard
                                    preview={episode.image}
                                    eptitle={episode.title}
                                    epnb={episode.episodeNumber}
                                    epduration={episode.duration}
                                    rating={episode.imDbRating}
                                    year={episode.released}
                                />)
                        })
                        : <div className="loader">
                            <div className="loading-bar"></div>
                        </div>
                }
            </div>
        </section>
    )
}

export default Serie;