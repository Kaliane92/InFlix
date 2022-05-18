import { React, useState } from 'react';
import Card from '../card/index';
import Theme from '../theme/index';
import Marvel from '../../assets/marvel';
import StarWars from '../../assets/starwars';
import Wizarding from '../../assets/wizarding';
import Tolkien from '../../assets/tolkien';
import './slider.css';

const Slider = (props) => {

    const pictureWidth = 428 + 44;
    const [translate, setTranslate] = useState(0);
    let translateCopy = translate;
    const [style, setStyle] = useState({ transform: `translateX(${translate}px)` });
    const sliding = (n) => {
        (n === 'droite') ? setTranslate(translateCopy -= pictureWidth * 2) : setTranslate(translateCopy += pictureWidth * 2);
        setStyle({ transform: `translateX(${translateCopy}px)` });
    }

    return (
        <>
            <div className='ligne'>
                <Theme
                    logo={props.logo}
                    publisher={props.publisher}
                />
                <div className='thumbnails'>
                    {   
                        (Math.abs(translate) > (
                            (props.publisher === "Marvel") ? Marvel.length * pictureWidth - pictureWidth * 3 :
                            (props.publisher === "Tolkien") ? Tolkien.length * pictureWidth - pictureWidth * 3 :
                            (props.publisher === "Star Wars") ? StarWars.length * pictureWidth - pictureWidth * 3 :
                            (props.publisher === "Wizarding") ? Wizarding.length * pictureWidth - pictureWidth * 3 : null
                            )) ? null :
                            <div className="btn-slide slide-right" onClick={() => sliding('droite')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path
                                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                                </svg>
                            </div>
                    }
                    {
                        (translate === 0) ? null :
                            <div className="btn-slide slide-left" onClick={() => sliding('gauche')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path
                                        d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                                </svg>
                            </div>
                    }
                    <div className='slides' style={style}>
                        {
                            (props.publisher === "Marvel") ?
                                Marvel.map((item, key) => {
                                    return (
                                        <Card
                                            clé={key}
                                            lien={`/films/${item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")}`}
                                            miniature={item.thumb}
                                            titre={item.title}
                                        />
                                    )
                                }) : (props.publisher === "Tolkien") ?
                                    Tolkien.reverse().map((item, key) => {
                                        return (
                                            <Card
                                                clé={key}
                                                lien={`/films/${item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")}`}
                                                miniature={item.thumb}
                                                titre={item.title}
                                            />
                                        )
                                    }) : (props.publisher === "Star Wars") ?
                                        StarWars.map((item, key) => {
                                            return (
                                                <Card
                                                    clé={key}
                                                    lien={`/films/${item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")}`}
                                                    miniature={item.thumb}
                                                    titre={item.title}
                                                />
                                            )
                                        }) : (props.publisher === "Wizarding") ?
                                            Wizarding.map((item, key) => {
                                                return (
                                                    <Card
                                                        clé={key}
                                                        lien={`/films/${item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z ]*)(\s*)/g, "")}`}
                                                        miniature={item.thumb}
                                                        titre={item.title}
                                                    />
                                                )
                                            }) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider