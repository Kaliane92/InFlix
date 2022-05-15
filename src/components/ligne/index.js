import React from 'react'
import Slider from '../slider/index';
import Theme from '../publisher/index';
import logo from '../../assets/img/marvel-theme.png'

const Ligne = () => {
    return (
            <div className='ligne'>
                <Theme 
                    studio='Marvel'
                    logo={logo}
                />
                <Slider />
            </div>
    )
}

export default Ligne;