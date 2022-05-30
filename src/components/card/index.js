import { React } from 'react'
import { Link } from "react-router-dom";
import './card.css'

const Card = (props) => {

    return (
        <Link to={props.lien} key={props.clé}>
            <img className='cardImg' loading="lazy" src={props.miniature} title={props.titre} alt={props.titre}></img>
            <h4>{props.titre}</h4>
        </Link>
    )
}

export default Card;