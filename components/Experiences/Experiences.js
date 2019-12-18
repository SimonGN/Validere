import React, { useState } from "react";
import Link from "next/link";

import { ExperiencesStyle } from "./ExperiencesStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";
import Titleh3 from "../../styles/fontsStyles/titleh3"
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"



import {withTranslation } from '../../i18n'



const Experiences = props => {
    const { t } = props;
    return (
        <ExperiencesStyle >
            <div className="column1" >
                <div className="sticky">
                    <ParagraphTitle data-aos="fade-in" data-aos-duration="1000" >{t("titleNosotros")}</ParagraphTitle>
                    <div className="button" data-aos="fade-in" data-aos-duration="1000">
                        <Link href="/about" ><Paragraph >{t("enlace2")}</Paragraph></Link>
                        <Link href="/about" ><img className="line" src="/static/svg/line.svg" /></Link>
                    </div>
                </div>

            </div>
            <div className="column2">
                <div className="experiences1" data-aos="fade-in" data-aos-duration="2000">
                    <img className="picture" src="/static/img/img2.jpg" />
                    <div className="text">
                        <Titleh3 >{t("name1")}</Titleh3>
                        <Paragraph >{t("nameDescription1")}</Paragraph>
                    </div>
                </div>
                <div className="experiences2" data-aos="fade-in" data-aos-duration="1000">
                    <img className="picture" src="/static/img/img1.jpg" />
                    <div className="text">
                        <Titleh3 >{t("name2")}</Titleh3>
                        <Paragraph >{t("nameDescription2")}</Paragraph>
                    </div>
                </div>
            </div>

        </ExperiencesStyle>
    );
};

export default withTranslation("home")(Experiences);
