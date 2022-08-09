import './Sliders.css'
import Carousel from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'
import  slidesmap  from '../Components/Slide'
import React from 'react';

export function Sliders() {
    return (
        <div className='contenedor'>
            <div className='titulo'>
                <h2>Mis Proyectos</h2>
         
            </div>
            <Carousel
                arrows
                slidesPerPage={5}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={slidesmap}
                breakpoints={{
                    960:{
                        slidesPerPage: 1,
                        arrows: false,
                        itemWidth:250,

                    }
                }}
                />
        </div>
    )
}
