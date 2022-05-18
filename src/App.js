import './App.css';

import logo from './assets/img/svg/logo.svg';
import Homeicon from './assets/img/svg/home';
import Favs from './assets/img/svg/favs';
import Dark from './assets/img/svg/dark';
import Light from './assets/img/svg/light';
import Settings from './assets/img/svg/settings';
import EterLogo from "./assets/img/titleimg/films/titleimg-eternels.png";
import EterBg from "./assets/img/bgimg/films/bgimg-eternels.png";
import './components/sidebar/sidebar.css';

import Films from './components/films/index';
import Series from './components/series/index';
import Animes from './components/animes/index';
import Home from './components/home/index';
import Topmenu from './components/topmenu';
/* import Data from './assets/data'; */
import Cookies from 'js-cookie';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Movie from './components/films/movie';

function App() {

  function setCookie(n, v, d) {
    Cookies.set(n, v, { expires: d });
    setLight(!light);
  }
  function checkCookie(n) {
    if (Cookies.get(n)) {
      setLight(false)
    }
  }
  function supprCookie(n) {
    Cookies.remove(n);
    setLight(!light);
  }
  const [light, setLight] = useState(true);

  return (

    <div onLoad={() => checkCookie('dark')} className={(light === true) ? 'light' : 'dark'}>

      {/* -------------- SIDEBAR ------------------- */}

      <header className="menu">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="favs">
          <Link className='favoris item-menu' to="/">
            <Homeicon
              width='28'
              height='28'
            />
            <p>
              Accueil
            </p>
          </Link>
          <Link to='likes' className="favoris item-menu">
            <Favs
              width='28'
              height='29'
            />
            <p>
              Watchlist
            </p>
          </Link>
        </div>
        <div className="settings">
          <div tabIndex={0} className="colormode item-menu">
            <Dark
              width='28'
              height='29'
              active={(light === true) ? 'none' : 'block'}
            />
            <Light
              width='28'
              height='29'
              active={(light === false) ? 'none' : 'block'}
            />
            <label className="switch">
              <input id="lightmode" type="checkbox" onChange={() => light} onClick={() => {
                (light === true) ? setCookie('dark', true, 365) : supprCookie('dark');
              }} />
              <span className="slider round"></span>
            </label>
          </div>
          <Link to="settings" className="parametres item-menu">
            <Settings
              width='28'
              height='29'
            />
            <p>
              Paramètres
            </p>
          </Link>
        </div>
      </header>

      {/* ------------------------------------------ */}

      {/* ----------- TOPMENU + CONTENT ------------ */}

      <main>
        <Topmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
            <Route path="/films/leseternels" element={<Movie
              logo={EterLogo}
              bg={EterBg}
              title="Les Éternels"
              year="2021"
              duration="2 h 36 m"
              summary="La réapparition mystérieuse des Déviants, des créatures monstrueuses censées avoir disparu depuis des siècles, contraint les Éternels à se retrouver pour défendre une fois de plus l’Humanité."
              director="Chloé Zhao"
              mainRoles="Gemma Chan, Richard Madden, Kumail Nanjiani"
              genre="Action"
            />} />
          <Route path="/series" element={<Series />} />
          <Route path="/animes" element={<Animes />} />
        </Routes>
      </main>

      {/* ------------------------------------------ */}

    </div>
  );
}

export default App;