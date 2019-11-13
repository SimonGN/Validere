import React, { useState } from "react";
import Link from "next/link";

import { TodoStyle } from "./TodoStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";
import Titleh3 from "../../styles/fontsStyles/titleh3"
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"


import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Todo = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <TodoStyle >
            <div className="colum1">
                <div className="queHacemos">
                    <Paragraph>{t("subTitulo1")}</Paragraph>
                    <ParagraphTitle>{t("description3")}</ParagraphTitle>
                </div>
                <div className="uni">
                    <Titleh3>{t("subTitulo2")}</Titleh3>
                    <Paragraph>{t("description4")}</Paragraph>
                </div>
            </div>
            <div className="colum2">
                <div className="noUni">
                    <Titleh3>{t("subTitulo3")}</Titleh3>
                    <Paragraph>{t("description5")}</Paragraph>
                </div>
                <div className="consul">
                    <Titleh3>{t("subTitulo4")}</Titleh3>
                    <Paragraph>{t("description6")}</Paragraph>
                </div>
            </div>


        </TodoStyle>
    );
};

export default withTranslation("home")(Todo);
