import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Richcard from "../card/Richcard";
import './series.css'

const Movie = (props) => {
    const [data, setData] = useState(null);
    const bgimg = props.bg;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(props.dataUrl);
            console.log(response.data.episodes);
            setData(response.data.episodes);
        };
    
        fetchData();
      }, []);

    return (
        <section className='content movie' id="main-content" style={{backgroundImage: "url("+bgimg+")"}}>
            <div id="sideS" className="serie-infos">
                
            </div>
            <div id="sideS" className="episodes">
                {
                    data !== null ? 
                    
                        data.map((episode) => {
                            return(
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

export default Movie;