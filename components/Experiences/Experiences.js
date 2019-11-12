import React, { useState } from "react";
import Link from "next/link";

import { ExperiencesStyle } from "./ExperiencesStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";



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
            <div>
                <a href="/"><Paragraph size="13px" >{t("nav1")}</Paragraph></a>
                <img className="simbolo" src="/static/svg/simboloValidere.svg" />
                <img className="logo" src="/static/svg/logoValidere.svg" />
                <a href="/"><Paragraph size="13px" >{t("nav2")}</Paragraph></a>
            </div>

        </ExperiencesStyle>
    );
};

export default withTranslation("home")(Experiences);
