import React, { useState } from "react";
import Link from "next/link";

import { IntroStyle } from "./IntroStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";
import Fonth1 from "../../styles/fontsStyles/titleh1"

import Scroll from "../Scroll/Scroll";


import {withTranslation } from '../../i18n'


const Intro = props => {
    const { t } = props;
    return (
        <IntroStyle >


            <div className="colum1" data-aos="fade-in" data-aos-duration="2000">
                <img src="/static/img/validere.jpg" />
            </div>

            <div className="colum2">
                <div className="element">
                    <Scroll />
                </div>
                <div className="text">
                    <div className="title" data-aos="fade-in" data-aos-duration="2000">
                        <Fonth1>{t("title1")}</Fonth1>
                        <Fonth1>{t("title2")}</Fonth1>
                    </div>
                    <Paragraph className="textp" data-aos="fade-in" data-aos-duration="2000">{t("description1")}</Paragraph>
                    <Paragraph  data-aos="fade-in" data-aos-duration="2000">{t("description2")}</Paragraph>
                </div>

                <div className="button" data-aos="fade-in" data-aos-duration="1000">
                    <a href={t("mailto")}> <Paragraph >{t("enlace1")}</Paragraph> </a>
                    <a className="line"  href={t("mailto")}> <img src="/static/svg/line.svg" /> </a>

                </div>

            </div>



        </IntroStyle>
    );
};

export default withTranslation("home")(Intro);
