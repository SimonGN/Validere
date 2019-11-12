import React, { useState } from "react";
import Link from "next/link";

import { NavStyle } from "./NavStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";



import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Nav = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <NavStyle backgroundColor={props.backgroundColor} >
            

            <a href="/"><Paragraph size="13px" >{t("Nav1")}</Paragraph></a>
            <img className="logo" src="/static/svg/logoValidere.svg" />
            <a href="/"><Paragraph size="13px" >{t("Nav2")}</Paragraph></a>
        </NavStyle>
    );
};

export default withTranslation("nav")(Nav);
