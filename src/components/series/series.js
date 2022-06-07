import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Richcard from "../card/Richcard";
import './series.css'

const Serie = (props) => {
    const [season1, setSeason1] = useState(null);
    const [season2, setSeason2] = useState(null);
    const [season3, setSeason3] = useState(null);
    const [season4, setSeason4] = useState(null);
    const [season5, setSeason5] = useState(null);
    const [season6, setSeason6] = useState(null);
    const [season7, setSeason7] = useState(null);
    const [season8, setSeason8] = useState(null);
    const bgimg = props.bg;

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await axios.get(props.s1);
            setSeason1(response1.data.episodes);
            
            const response2 = await axios.get(props.s2);
            setSeason2(response2.data.episodes);
            
            const response3 = await axios.get(props.s3);
            setSeason3(response3.data.episodes);
            
            const response4 = await axios.get(props.s4);
            setSeason4(response4.data.episodes);
            
            const response5 = await axios.get(props.s5);
            setSeason5(response5.data.episodes);
            
            const response6 = await axios.get(props.s6);
            setSeason6(response6.data.episodes);
            
            const response7 = await axios.get(props.s7);
            setSeason7(response7.data.episodes);
            
            const response8 = await axios.get(props.s8);
            setSeason8(response8.data.episodes);
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
                        <p>{props.season === 1 ? `${props.season} season` : `${props.season} seasons`}</p>
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
                <h4 className="seasonTitles" style={ props.season >= 1 ? null : {display: "none"}}>Saison 1</h4>
                {
                    season1 !== null ?
                        season1.map((episode) => {
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
                <h4 className="seasonTitles" style={ props.season >= 2 ? null : {display: "none"}}>Saison 2</h4>
                {
                    season2 !== null ?
                        season2.map((episode) => {
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
                        : null
                }
                <h4 className="seasonTitles" style={ props.season >= 3 ? null : {display: "none"}}>Saison 3</h4>
                {
                    season3 !== null ?
                        season3.map((episode) => {
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
                        : null
                }
                <h4 className="seasonTitles" style={ props.season >= 4 ? null : {display: "none"}}>Saison 4</h4>
                {
                    season4 !== null ?
                        season4.map((episode) => {
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
                        : null
                }
                <h4 className="seasonTitles" style={ props.season >= 5 ? null : {display: "none"}}>Saison 5</h4>
                {
                    season5 !== null ?
                        season5.map((episode) => {
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
                        : null
                }
                <h4 className="seasonTitles" style={ props.season >= 6 ? null : {display: "none"}}>Saison 6</h4>
                {
                    season6 !== null ?
                        season6.map((episode) => {
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
                        : null
                }
                <h4 className="seasonTitles" style={ props.season >= 7 ? null : {display: "none"}}>Saison 7</h4>
                {
                    season7 !== null ?
                        season7.map((episode) => {
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
                        : null
                }
                <h4 className="seasonTitles" style={ props.season >= 8 ? null : {display: "none"}}>Saison 8</h4>
                {
                    season8 !== null ?
                        season8.map((episode) => {
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
                        : null
                }
            </div>
        </section>
    )
}

export default Serie;