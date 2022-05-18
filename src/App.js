import './App.css';

import logo from './assets/img/svg/logo.svg';
import Homeicon from './assets/img/svg/home';
import Favs from './assets/img/svg/favs';
import Dark from './assets/img/svg/dark';
import Light from './assets/img/svg/light';
import Settings from './assets/img/svg/settings';
import './components/sidebar/sidebar.css';

import Films from './components/films/index';
import Series from './components/series/index';
import Animes from './components/animes/index';
import Home from './components/home/index';
import Topmenu from './components/topmenu';
import dbMarvel from './assets/data';
import dbSeries from './assets/dataSeries';
import Cookies from 'js-cookie';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Movie from './components/films/movie';
import Serie from './components/series/series'
import Notfound from './components/Notfound';

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
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
              {
              dbMarvel.map((item, key) => {
                return (
                  <Route key={key} path={"/films/"+item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")} element={<Movie
                    logo={item.logo}
                    bg={item.background}
                    title={item.title}
                    year={item['release-year']}
                    duration={item.duration}
                    summary={item.synospis}
                    director={item.director}
                    mainRoles={item['main-roles']}
                    genre={item.genre}
                  />} />
                )
              })}
          <Route path="/series" element={<Series />} />
              {
              dbSeries.map((item, key) => {
                return (
                  <Route key={key} path={"/series/"+item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")} element={<Serie
                    bg={item.bg}
                  />} />
                )
              })}
          <Route path="/animes" element={<Animes />} />
        </Routes>
      </main>

      {/* ------------------------------------------ */}
    </div>
  );
}

export default App;