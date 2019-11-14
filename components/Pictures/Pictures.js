import React from "react";
import { PicturessStyle } from "./PicturesStyle.js";

const Pictures = props => {

    return (

        <PicturessStyle>
            <div className="column1" >
                <div className="country1" data-aos="fade-in" data-aos-duration="1000">
                    <div className="color uno"></div>
                    <img className="people1" src="/static/img/img4.jpg" />
                </div>
                <div className="country2" data-aos="fade-in" data-aos-duration="1000">
                    <div className="color dos"></div>
                    <img className="people1" src="/static/img/img6.jpg"/>
                </div>
            </div>
            <div className="column2">
                <div className="country3" data-aos="fade-in" data-aos-duration="1000">
                    <div className="color tres"></div>
                    <img className="people1" src="/static/img/img5.jpg" />
                </div>
                <div className="country4" data-aos="fade-in" data-aos-duration="1000">
                    <div className="color cuatro"></div>
                    <img className="people1" src="/static/img/img3.jpg" />
                </div>
            </div>




        </PicturessStyle>
    )

}

export default Pictures;