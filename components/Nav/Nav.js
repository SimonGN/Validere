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
        <NavStyle >
            <div>
                <Link href="/about"><Paragraph size="13px" >{t("nav1")}</Paragraph></Link>
                <Link href="/index"><img className="simbolo" src="/static/svg/simboloValidere.svg" /></Link>
                <Link href="/index"><img className="logo" src="/static/svg/logoValidere.svg" /></Link>
                <a href="mailto:email@validere.es?body=Complete this information:%0D%0D%0DName and Subname%0D%0DPhone%0D%0DContry%0D%0DName University/Center%0D%0DName of Title University%0D%0DDuration%0D%0DName of Titulation%0D%0D%0D%0DAnd add your text Email"> <Paragraph size="13px" >{t("nav2")}</Paragraph> </a>
            </div>

        </NavStyle>
    );
};

export default withTranslation("nav")(Nav);
