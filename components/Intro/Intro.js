import React, { useState } from "react";
import Link from "next/link";

import { IntroStyle } from "./IntroStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";
import Fonth1 from "../../styles/fontsStyles/titleh1"



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
                <Fonth1 className="title" >{t("title")}</Fonth1>
                <Paragraph  >{t("description")}</Paragraph>

                <div className="button">
                    <a href="/"><Paragraph >{t("enlace1")}</Paragraph></a>
                    <img className="line" src="/static/svg/line.svg" />

                </div>

            </div>



        </IntroStyle>
    );
};

export default withTranslation("home")(Intro);
