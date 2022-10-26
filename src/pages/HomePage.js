import {useState, useEffect} from "react";
import React from "react";
import Carousel from "../components/Carousel";
import Data from "../components/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SimpleSlider from "../components/SimpleSlider";



export default function HomePage() {
  
    return (  
        <section>
             <h2>Populære tilbud</h2>
            <SimpleSlider options={{
                    className: "slider variable-width",
                    dots: false,
                    infinite: true,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow:1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    prevArrow: false,
                    nextArrow: false,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true
                }}/>


        <div >
        <h2>Tilbudsaviser</h2>
            <Carousel images={Data} />
        </div>

            
        </section>

        
    );
}
