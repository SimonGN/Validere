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
    const email = t("email");
    const tel = t("tel");
    return (
        <AboutStyle >
            <div className="global">
                <div className="column1">
                    <div className="about">
                        <ParagraphTitle >{t("titleAbout")}</ParagraphTitle>
                        <Paragraph >{t("descriptionAbout1")}</Paragraph>
                        <Paragraph >{t("descriptionAbout2")}</Paragraph>
                        <Paragraph >{t("descriptionAbout3")}</Paragraph>
                    </div>
                    <div className="mision">
                        <ParagraphTitle >{t("titleMision")}</ParagraphTitle>
                        <Paragraph >{t("descriptionMision1")}</Paragraph>
                        <Paragraph >{t("descriptionMision2")}</Paragraph>
                        <Paragraph >{t("descriptionMision3")}</Paragraph>
                        <Paragraph >{t("descriptionMision4")}</Paragraph>
                    </div>
                    <div className="contact">
                        <ParagraphTitle >{t("titleContact")}</ParagraphTitle>
                        <Paragraph >{t("descriptionContact1")}</Paragraph>
                        <div className="emailPhone">
                            <a href={`mailto:${email}`}><Paragraph>{t("email")}</Paragraph></a>
                            <a href={`tel:${tel}`}><Paragraph>{t("tel")}</Paragraph></a>
                        </div>

                        <div className="button">
                            <a href="mailto:email@validere.es?body=Complete this information:%0D%0D%0DName and Subname%0D%0DPhone%0D%0DContry%0D%0DName University/Center%0D%0DName of Title University%0D%0DDuration%0D%0DName of Titulation%0D%0D%0D%0DAnd add your text Email"> <button><h5>{t("button")}</h5></button> </a>

                        </div>
                    </div>

                </div>
                <div className="column2">
                    <div>
                        <img className="simbolo" src="/static/svg/simboloColorValidere.svg" />
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="/static/img/imgAbout.jpg" />
            </div>
        </AboutStyle>
    );
};

export default withTranslation("about")(Abouttext);
