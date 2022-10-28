import React from "react";
import Carousel from "../components/Carousel";
import Data from "../components/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../components/SimpleSlider";
import Bilka from "../images/Bilka.png"
import Netto from "../images/Netto.png"



export default function HomePage() {
  
    return (  
        <section>
             <h3>Populære tilbud</h3>
            <SimpleSlider options={{
                    className: "slider variable-width",
                    dots: false,
                    infinite: true,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    prevArrow: false,
                    nextArrow: false,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true
                }}/>
<h3>Mine favoritter</h3>
        <div className="fav_container">
        
            <img src={Bilka}/>
            <img src={Netto}/>
        </div>


        <div className="avis_container">
        <h3>Tilbudsaviser</h3>
            <Carousel images={Data} />
        </div>

            
        </section>

        
    );
}
