import React from "react";
import { PicturessStyle } from "./PicturesStyle.js";

const Pictures = props => {

    return (

        <PicturessStyle>
            <div className="column1">
                <div>
                    <img className="country" src="/static/img/country1.jpg" />
                </div>
                <div>
                    <img className="country" src="/static/img/country3.jpg" />
                </div>
            </div>
            <div className="column2">
                <div>
                    <img className="country" src="/static/img/country2.jpg" />
                </div>
                <div>
                    <img className="country" src="/static/img/country4.jpg" />
                </div>
            </div>




        </PicturessStyle>
    )

}

export default Pictures;