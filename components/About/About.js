import React, { useState } from "react";
import Link from "next/link";

import { AboutStyle } from "./AboutStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";
import Titleh3 from "../../styles/fontsStyles/titleh3"
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"



import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Abouttext = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <AboutStyle >
            <div className="column1">
            <div className="About">
            <ParagraphTitle >{t("titleAbout")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionAbout1")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionAbout2")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionAbout3")}</ParagraphTitle>
            </div>
            <div className="Mision">
            <ParagraphTitle >{t("titleMision")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionMision1")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionMision2")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionMision3")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionMision4")}</ParagraphTitle>
            </div>
            <div className="Contact">
                <ParagraphTitle >{t("titleContact")}</ParagraphTitle>
                <ParagraphTitle >{t("descriptionContact1")}</ParagraphTitle>
                <ParagraphTitle >{t("emial")}</ParagraphTitle>
                <ParagraphTitle >{t("tel")}</ParagraphTitle>
                <div>
                    <button></button>
                </div>

            </div>
        
            </div>
            <div className="column2">

            </div>

        </AboutStyle>
    );
};

export default withTranslation("about")(Abouttext);
