import React, { useState } from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";



import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Footer = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <FooterStyle backgroundColor={props.backgroundColor} >
            <div className="option">
                <a href="mailto:elcorreoquequieres@correo.com"><Paragraph>{t("email")}</Paragraph></a>
                <a href="tel:+34678567876"><Paragraph>{t("phone")}</Paragraph></a>
                <a href="/"><Paragraph>{t("termsConditions")}</Paragraph></a>
                <a href="/"><Paragraph>{t("privacyPolicy")}</Paragraph></a>
            </div>
            <div className="len">
                <Paragraph decoration={language === 'es' ? "underline" : ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</Paragraph>
                <Paragraph>/</Paragraph>
                <Paragraph decoration={language === 'en' ? "underline" : ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</Paragraph>
            </div>

            <h3>
                Copyright © by Tailor hub S.L, 2019. All rights reserved. All materials
                on this website are intellectual property of Tailor hub S.L.
            </h3>
        </FooterStyle>
    );
};

export default withTranslation("ContactNavFooter")(Footer);
