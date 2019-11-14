import React, { useState } from "react";
import Link from "next/link";

import { IntroStyle } from "./IntroStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";
import Fonth1 from "../../styles/fontsStyles/titleh1"

import Scroll from "../Scroll/Scroll";


import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Intro = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <IntroStyle >


            <div className="colum1">
                <img src="/static/img/validere.jpg" />
            </div>

            <div className="colum2">
                <div className="element">
                    <Scroll />
                </div>
                <div className="text">
                    <div className="title">
                        <Fonth1>{t("title1")}</Fonth1>
                        <Fonth1>{t("title2")}</Fonth1>
                    </div>
                    
                    <Paragraph  >{t("description1")}</Paragraph>
                    <Paragraph  >{t("description2")}</Paragraph>
                </div>

                <div className="button">
                    <a href="mailto:email@validere.es?body=Complete this information:%0D%0D%0DName and Subname%0D%0DPhone%0D%0DContry%0D%0DName University/Center%0D%0DName of Title University%0D%0DDuration%0D%0DName of Titulation%0D%0D%0D%0DAnd add your text Email"> <Paragraph >{t("enlace1")}</Paragraph> </a>
                    <a className="line"  href="mailto:email@validere.es?body=Complete this information:%0D%0D%0DName and Subname%0D%0DPhone%0D%0DContry%0D%0DName University/Center%0D%0DName of Title University%0D%0DDuration%0D%0DName of Titulation%0D%0D%0D%0DAnd add your text Email"> <img src="/static/svg/line.svg" /> </a>

                </div>

            </div>



        </IntroStyle>
    );
};

export default withTranslation("home")(Intro);
