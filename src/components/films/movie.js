import React, { useState } from "react";
import './movie.css'

const Movie = (props) => {
    const [play, setPlay] = useState(false);
    const bgimg = props.bg;
    return (
        play !== true ? <section className='content movie' id="main-content" style={{backgroundImage: "url("+bgimg+")"}}>
            <div id="sideM" className="movie-infos">
                <img className="titleimg" src={props.logo} alt={props.titre} />
                <div className="title">
                    <h2>{props.title}</h2>
                    <p>{props.year}</p>
                    <p>{props.duration}</p>
                </div>
                <p className="summary">
                {props.summary}
                </p>
                <div className="data">
                    <div className="dataname">
                        <p><strong>Réalisation</strong></p>
                        <p><strong>Rôles Principaux</strong></p>
                        <p><strong>Genres</strong></p>
                    </div>
                    <div className="datainfos">
                        <p>{props.director}</p>
                        <p>{props.mainRoles}</p>
                        <p>{props.genre}</p>
                    </div>
                </div>
                <div className="btn-movie">
                    <button className="btn btn-play" onClick={() => setPlay(true)}>Regarder</button>
                    <button className="btn btn-watchlist">Watchlist</button>
                </div>
            </div>
        </section> : 
        <div className="player">
            <iframe
                src={props.video}
                width="100%"
                height="100%"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
            </iframe>
        </div>
    )
}

export default Movie;