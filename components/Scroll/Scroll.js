import React from "react";
import { ScrollStyle } from "./ScrollStyle";

const Scroll = props => {

    return (

        <ScrollStyle>
            <div className="movil">
                <div data-aos="fade-in" data-aos-duration="2500" className=" scroll box1"></div>
                <div data-aos="fade-in" data-aos-duration="2600"className=" scroll box2"></div>
                <div data-aos="fade-in" data-aos-duration="2700"className=" scroll box3"></div>
                <div data-aos="fade-in" data-aos-duration="2800"className=" scroll box4"></div>
            </div>
            <div className="pc">
                <div data-aos="fade-in" data-aos-duration="2300" className=" scroll box1"></div>
                <div data-aos="fade-in" data-aos-duration="2400" className=" scroll box2"></div>
                <div data-aos="fade-in" data-aos-duration="2500" className=" scroll box3"></div>
                <div data-aos="fade-in" data-aos-duration="2600" className=" scroll box4"></div>
                <div data-aos="fade-in" data-aos-duration="2700" className=" scroll box5"></div>
                <div data-aos="fade-in" data-aos-duration="2800" className=" scroll box6"></div>
            </div>

        </ScrollStyle>
    )

}

export default Scroll;