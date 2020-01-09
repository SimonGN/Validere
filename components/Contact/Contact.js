import React from "react";
import { ContactStyle } from "./ContactStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"
import Titleh3 from "../../styles/fontsStyles/titleh3"

import { withTranslation } from '../../i18n'

import FormContact from "../Form/FormContact"

const ContactPage = props => {
    const { t } = props;

    return (

        <ContactStyle>
            <div className="global">
                <div className="column1">
                    <ParagraphTitle>{t("title1")}</ParagraphTitle>
                    <Paragraph >{t("description")}</Paragraph>
                    <div>
                        <Paragraph >{t("email")}</Paragraph>
                        <Paragraph >{t("tel")}</Paragraph>
                    </div>
                </div>

                <div className="contact">
                    <ParagraphTitle>{t("title2")}</ParagraphTitle>
                    <Titleh3 >{t("subtitle")}</Titleh3>
                    <FormContact />

                </div>
            </div>

        </ContactStyle>
    )

}

export default withTranslation("contact")(ContactPage);