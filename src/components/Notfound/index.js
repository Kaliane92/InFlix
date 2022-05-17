import React from "react";
import { Link } from "react-router-dom";
import './notfound.css'

const Notfound = () => {
    return (
        <section className='content404'>
            <div className="left">
                <h2>404</h2>
            </div>
            <div className="right">
                <p>Nous n'avons pas pu trouver la page que vous recherchiez.</p>
                <Link to='/' className="btn-404">Accueil</Link>
            </div>
        </section>
    )
}

export default Notfound;