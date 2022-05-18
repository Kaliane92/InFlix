import React from "react";
import './series.css'

const Movie = (props) => {
    const bgimg = props.bg;
    return (
        <section className='content movie' id="main-content" style={{backgroundImage: "url("+bgimg+")"}}>
            <div id="side" className="serie-infos">
                
            </div>
            <div id="side" className="serie-infos">
                
            </div>
        </section>
    )
}

export default Movie;