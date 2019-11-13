import React, { useState } from "react";
import Link from "next/link";

import { ExperiencesStyle } from "./ExperiencesStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";
import Titleh3 from "../../styles/fontsStyles/titleh3"
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"



import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Experiences = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <ExperiencesStyle >
            <div className="column1">
                <ParagraphTitle >{t("titleNosotros")}</ParagraphTitle>
                <div className="button">
                    <a href="/"><Paragraph >{t("enlace2")}</Paragraph></a>
                    <img className="line" src="/static/svg/line.svg" />
                </div>
            </div>
            <div className="column2">
                <div className="experiences1">
                    <img className="picture" src="/static/img/img1.jpg" />
                    <div className="text">
                        <Titleh3 >{t("name1")}</Titleh3>
                        <Paragraph >{t("nameDescription1")}</Paragraph>
                    </div>
                </div>
                <div className="experiences2">
                    <img className="picture" src="/static/img/img2.jpg" />
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
