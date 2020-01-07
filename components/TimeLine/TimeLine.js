import React from "react";

import Paragraph from "../../styles/fontsStyles/paragraph";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"

import { TimeLineStyle, Line, Circle } from "./TimeLineStyle";

import { withTranslation } from '../../i18n'


const TimeLine = props => {
    const { t } = props;
    const { mobile } = props;
    return (
        <TimeLineStyle >
            <div className="title">
                <ParagraphTitle>{t("titleProcess")}</ParagraphTitle>
            </div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle1" />
                <div data-aos="fade-left" className="text1">
                    <Paragraph>{t("descriptionProcess2")}</Paragraph>
                </div>
                <div data-aos="fade-right" className="imgs1">
                    <ParagraphTitle size="30px">{t("descriptionProcess1")}</ParagraphTitle>
                </div>

            </div>
            <div className="line" data-aos="fade-in"></div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle2" />
                <div data-aos={mobile ? "fade-right" : "fade-left"} className="imgs2">
                    <ParagraphTitle size="30px">{t("descriptionProcess3")}</ParagraphTitle> 
                </div>
                <div data-aos={mobile ? "fade-left" : "fade-right"} className="text2">
                    <Paragraph>{t("descriptionProcess4")}</Paragraph>                
                </div>

            </div>
            <div className="line" data-aos="fade-in"></div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle1" />
                <div data-aos="fade-left" className="text3">
                    <Paragraph>{t("descriptionProcess6")}</Paragraph>      
                </div>
                <div data-aos="fade-right" className="imgs3">
                    <ParagraphTitle size="30px">{t("descriptionProcess5")}</ParagraphTitle> 
                </div>
            </div>
            <div className="line" data-aos="fade-in"></div>
            <div className="box">
                <Line data-aos="fade-in" />
                <Circle data-aos="fade-in" className="circle2" />
                <div data-aos={mobile ? "fade-right" : "fade-left"} className="imgs4">
                    <ParagraphTitle size="30px">{t("descriptionProcess7")}</ParagraphTitle>
                </div>
                <div data-aos={mobile ? "fade-left" : "fade-right"} className="text4">
                    <Paragraph>{t("descriptionProcess6")}</Paragraph>
                </div>
            </div>
            <div className="imgs">
                <img src="/static/svg/simboloValidere.svg" />
            </div>

        </TimeLineStyle>
    );
};

export default withTranslation("about")(TimeLine);
