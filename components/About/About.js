import React from "react";

import { AboutStyle } from "./AboutStyle";

import Mobile from "../Mobile/Mobile"

import TimeLine from "../TimeLine/TimeLine"

import Paragraph from "../../styles/fontsStyles/paragraph";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"



import {withTranslation } from '../../i18n'


const Abouttext = props => {
    const { t } = props;
    return (
        <AboutStyle >
            <Mobile/>
            <div className="global">
                <div className="column1">
                    <div className="about">
                        <ParagraphTitle data-aos="fade-in">{t("titleAbout")}</ParagraphTitle>
                        <Paragraph data-aos="fade-in">{t("descriptionAbout1")}</Paragraph>
                        <Paragraph data-aos="fade-in">{t("descriptionAbout2")}</Paragraph>
                        <Paragraph data-aos="fade-in">{t("descriptionAbout3")}</Paragraph>
                    </div>
                    <div className="mision">
                        <ParagraphTitle data-aos="fade-in">{t("titleMision")}</ParagraphTitle>
                        <Paragraph data-aos="fade-in">{t("descriptionMision1")}</Paragraph>
                        <Paragraph data-aos="fade-in">{t("descriptionMision2")}</Paragraph>
                        <Paragraph data-aos="fade-in">{t("descriptionMision3")}</Paragraph>
                        <Paragraph data-aos="fade-in">{t("descriptionMision4")}</Paragraph>
                    </div>

                </div>
                <div className="column2">
                    <div >
                        <img className="simbolo" src="/static/svg/simboloColorValidere.svg" data-aos="fade-in" data-aos-duration="1000"/>
                    </div>
                </div>
            </div>
            <TimeLine/>
            <div className="image"data-aos="fade-in" data-aos-duration="1000">
                <img src="/static/img/imgAbout.jpg" />
            </div>
            
        </AboutStyle>
    );
};

export default withTranslation("about")(Abouttext);
