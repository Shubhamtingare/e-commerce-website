import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouseldata } from './MainCarouseldata';


const MainCarousel = () => {
    const items = MainCarouseldata.map((item)=> <img className='cursor-pointer' src={item.image} alt='' role='presentation'/>)

    return(
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
    />
    );
    };

export default MainCarousel;