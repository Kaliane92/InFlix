import React from 'react';
import './theme.css';

const Theme = (props) => {
    return (
        <div className="theme">
            <div className="publisher">
                <img loading="lazy" src={props.logo} alt={props.publisher}></img>
                <h3>{props.publisher}</h3>
            </div>
        </div>
    )
}

export default Theme