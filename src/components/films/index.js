import React from "react";
import Slider from '../slider/index';

const Films = () => {
    return (
        <section className='content'>
          <Slider
            publisher='Marvel'
          />
          <Slider
            publisher='Wizarding World'
          />
          <Slider
            publisher='Star Wars'
          />
          <Slider
            publisher='Tolkien'
          />
        </section>
    )
}

export default Films;