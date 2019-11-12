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
    const email = t("email");
    const phone = t("phone");
    return (
        <FooterStyle >
            <div className="footer">
                <div className="option">
                    <a href={`mailto:${email}`}><Paragraph size="13px" >{t("email")}</Paragraph></a>
                    <a href={`tel:${phone}`}><Paragraph size="13px" >{t("phone")}</Paragraph></a>
                    <a href="/"><Paragraph size="13px" >{t("termsConditions")}</Paragraph></a>
                    <a href="/"><Paragraph size="13px" >{t("privacyPolicy")}</Paragraph></a>
                </div>
                <div className="len">
                    <Paragraph size="13px" decoration={language === 'es' ? "underline" : ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</Paragraph>
                    <Paragraph size="13px" >/</Paragraph>
                    <Paragraph size="13px" decoration={language === 'en' ? "underline" : ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</Paragraph>
                </div>
            </div>
            <div className="copy">
                <Paragraph size="10px" spacing="0,5px" lineheight="13px">
                    Copyright © by Tailor hub S.L, 2019. All rights reserved. All materials
                    on this website are intellectual property of Tailor hub S.L.
                </Paragraph>
            </div>

        </FooterStyle>
    );
};

export default withTranslation("footer")(Footer);
