import React from "react";

import Paragraph from "../../styles/fontsStyles/paragraph";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"

import { TimeLineStyle, Line, Circle } from "./TimeLineStyle";

import { withTranslation } from '../../i18n'


const TimeLine = props => {
    const { mobile } = props;
    const { number1, funcionaTitle1, funcionaSubtitle1, number2, funcionaTitle2, funcionaSubtitle2, number3, funcionaTitle3, funcionaSubtitle3, number4, funcionaTitle4, funcionaSubtitle4 } = info
    return (
        <TimeLineStyle >
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle1" />
                <div data-aos="fade-left" className="text1">
                    <FontTitle color="#56CC7E">{funcionaTitle1}</FontTitle>
                    <FonDescription>{funcionaSubtitle1}</FonDescription>
                </div>
                <div data-aos="fade-right" className="imgs1">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion5.svg`} />
                </div>

            </div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle2" />
                <div data-aos={mobile ? "fade-right" : "fade-left"} className="imgs2">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion6.svg`} />
                </div>
                <div data-aos={mobile ? "fade-left" : "fade-right"} className="text2">
                    <FontTitle color="#56CC7E">{funcionaTitle2}</FontTitle>
                    <FonDescription>{funcionaSubtitle2}</FonDescription>
                </div>

            </div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle1" />
                <div data-aos="fade-left" className="text3">
                    <FontTitle color="#56CC7E">{funcionaTitle3}</FontTitle>
                    <FonDescription>{funcionaSubtitle3}</FonDescription>
                </div>
                <div data-aos="fade-right" className="imgs3">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion7.svg`} />
                </div>

            </div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle2" />
                <div data-aos={mobile ? "fade-right" : "fade-left"} className="imgs4">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion8.svg`} />
                </div>
                <div data-aos={mobile ? "fade-left" : "fade-right"} className="text4">
                    <FontTitle color="#56CC7E">{funcionaTitle4}</FontTitle>
                    <FonDescription>{funcionaSubtitle4}</FonDescription>
                </div>

            </div>

        </TimeLineStyle>
    );
};

export default withTranslation("about")(TimeLine);
