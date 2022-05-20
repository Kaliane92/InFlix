import './richcard.css'

const Richcard = (props) => {
    return (
        <div className='richcard'>
            <img className="cardLeft" src={props.preview} alt={props.eptitle}/>
            <div className="cardRight">
                <div className="cardTitle">
                    <h4>{props.epnb}. {props.eptitle}</h4>
                    <p>{props.epduration}</p>
                </div>
                <div className="progressBarContainer">
                    <div className="progressBar">
                        <div className="progress"></div>
                    </div>
                </div>
                <div className="miscInfos">
                    <p>★{props.rating}</p>
                    <p>{props.year}</p>
                </div>
            </div>
        </div>
    )
}

export default Richcard;