import React, { useState } from "react";
import Link from "next/link";

import { TodoStyle } from "./TodoStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";
import Titleh3 from "../../styles/fontsStyles/titleh3"



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
            <div>
                <Paragraph>{t("subTitulo1")}</Paragraph>
                <Titleh3>{t("description3")}</Titleh3>
            </div>
            <div>
                <Paragraph>{t("subTitulo2")}</Paragraph>
                <Paragraph>{t("description4")}</Paragraph>
            </div>
            <div>
                <Paragraph>{t("subTitulo3")}</Paragraph>
                <Paragraph>{t("description5")}</Paragraph>
            </div>
            <div>
                <Paragraph>{t("subTitulo4")}</Paragraph>
                <Paragraph>{t("description6")}</Paragraph>
            </div>

        </TodoStyle>
    );
};

export default withTranslation("home")(Todo);
