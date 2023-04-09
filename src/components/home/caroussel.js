import './caroussel.css';
import Data from '../../assets/dataHome'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Carrousel = () => {
    const durée = 5000;
    const [slide, setSlide] = useState(0)
    setTimeout(() => {
        setSlide(slide + 1)
    }, durée);
    const resetSlide = () => {
        if (slide > Data.length-1) {
            setSlide(0);
        } else {}
    }
    resetSlide();
    return (
        <>
            <section style={{display: "flex", width: "max-content", position: "relative"}} className='homeCarroussel'>
            {
                Data.map((item, key)=>{
                    return (
                        <>
                            <div className="visibleTimebar"></div>
                            <section key={key} className={slide === key ? 'carrousel' : 'notvisible'} style={{backgroundImage: `url(${item.background})`, backgroundColor: "black"}}>
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <Link to={`/${item.type}/${item.title.toLowerCase().normalize('NFD').replace(/([^a-zA-Z0-9 ]*)(\s*)/g, "")}`} className='cta-home'><strong>Regarder</strong></Link>
                                    <div className='dots'>
                                        <div className={slide === 0 ? 'selectedDot' : null}></div>
                                        <div className={slide === 1 ? 'selectedDot' : null}></div>
                                        <div className={slide === 2 ? 'selectedDot' : null}></div>
                                        <div className={slide === 3 ? 'selectedDot' : null}></div>
                                        <div className={slide === 4 ? 'selectedDot' : null}></div>
                                    </div>
                            </section>
                        </>
                    )
                })
            }
            </section>
            <section className='display'>
                <h5>Nouveautés</h5>
                <div className='displayImg'>
                    {
                        Data.map((item, key)=>{
                            return (
                                <img key={key} onClick={() => setSlide(key)} className={slide === key ? 'selectedNew thumbNew' : 'thumbNew'} src={item.thumb_home} title={item.title} alt={item.title}></img>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Carrousel;