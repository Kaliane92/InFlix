import React from "react";
import './series.css'

const Movie = (props) => {
    const bgimg = props.bg;
    return (
        <section className='content movie' id="main-content" style={{backgroundImage: "url("+bgimg+")"}}>
            <div id="sideS" className="serie-infos">
                
            </div>
            <div id="sideS" className="episodes">
                
            </div>
        </section>
    )
}

export default Movie;