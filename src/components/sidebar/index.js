import { React, useState } from 'react';
import logo from '../../assets/img/svg/logo.svg';
import Home from '../../assets/img/svg/home';
import Favs from '../../assets/img/svg/favs';
import Dark from '../../assets/img/svg/dark';
import Light from '../../assets/img/svg/light';
import Settings from '../../assets/img/svg/settings';
import { Link } from "react-router-dom";
import './sidebar.css';


const Header = () => {
    const [light, setLight] = useState(true);

    return (
        <header className="menu">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="favs">
                <Link className='favoris item-menu' to="/">
                    <Home 
                        width='28'
                        height='28'
                    />
                    <p>
                        Accueil
                    </p>
                </Link>
                <a href='./' className="favoris item-menu">
                    <Favs 
                        width='28'
                        height='29'
                    />
                    <p>
                        Watchlist
                    </p>
                </a>
            </div>
            <div className="settings">
                <a href='./' className="colormode item-menu">
                    <Dark
                        width='28'
                        height='29'
                        active={(light===true)?'none':'block'}
                    />
                    <Light
                        width='28'
                        height='29'
                        active={(light===false)?'none':'block'}
                    />
                    <label className="switch">
                        <input id="lightmode" type="checkbox" onClick={() => {
                            setLight(!light)
                            }}/>
                        <span className="slider round"></span>
                    </label>
                </a>
                <a href="./" className="parametres item-menu">
                    <Settings
                        width='28'
                        height='29'
                    />
                    <p>
                        Paramètres
                    </p>
                </a>
            </div>
        </header>
    )
}

export default Header