import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaCheckCircle } from "react-icons/fa";

const OwlCorousel = ({ data = [] }) => {
    return (
        <OwlCarousel className="owl-theme" 
        items="4"
        loop margin={10} nav
        >

            { data.map((x) => (
                <div className="item" key={x.id}>
                    <img src={require(`../../assets/img/${x.img}`).default} alt={x.name}/>
                    {x.show === true ? <FaCheckCircle className="icon-locate owl-icon" size={25} /> : ""}
                </div>

            ))}

        </OwlCarousel>

    )
}


export default OwlCorousel;