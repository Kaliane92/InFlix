import React from "react";
import Slider from '../slider/index';
import Logos from '../../assets/logos'

const Films = () => {
    return (
        <section className='content'>
        {
          Logos.map((item) => {
            return (
              <Slider
                logo={item.logo}
                publisher={item.publisher}
              />
            )
          })
        }
        </section>
    )
}

export default Films;