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
        <video className="player" frameBorder={"0"} marginWidth={"0"} marginHeight={"0"} scrolling="no" allowFullScreen>
             <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default Movie;