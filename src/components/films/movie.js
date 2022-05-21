import React from "react";
import './movie.css'

const Movie = (props) => {
    const bgimg = props.bg;
    return (
        <section className='content movie' id="main-content" style={{backgroundImage: "url("+bgimg+")"}}>
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
                <div className="btn-movie" style={{display: "none"}}>
                    <button className="btn-play">Regarder</button>
                    <button className="btn-watchlist">Watchlist</button>
                </div>
            </div>
        </section>
    )
}

export default Movie;