import './caroussel.css';
import Data from '../../assets/dataHome'


const Carrousel = () => {
    return (
        <>
            <div style={{display: "flex", flexGrow: 1}}>
            {
                Data.map((item, key)=>{
                    return (
                            <section key={key} className='carrousel' style={{backgroundImage: `url(${item.background})`}}>
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <button className='cta-home'><strong>Regarder</strong></button>
                                    <div className='dots'>
                                        <div className={key === 0 ? 'selecteDot' : null}></div>
                                        <div className={key === 1 ? 'selecteDot' : null}></div>
                                        <div className={key === 2 ? 'selecteDot' : null}></div>
                                        <div className={key === 3 ? 'selecteDot' : null}></div>
                                        <div className={key === 4 ? 'selecteDot' : null}></div>
                                    </div>
                            </section>
                    )
                })
            }
            </div>
            <section className='display'>
                <h5>Nouveautés</h5>
                <div className='displayImg'>
                    {
                        Data.map((item, key)=>{
                            return (
                                <img key={key} className='thumbNew' loading="lazy" src={item.thumb_home} title={item.title} alt={item.title}></img>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Carrousel;