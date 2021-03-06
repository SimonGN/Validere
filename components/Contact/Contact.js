import React from "react";
import { ContactStyle } from "./ContactStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"
import Titleh3 from "../../styles/fontsStyles/titleh3"

import { withTranslation } from '../../i18n'

import FormContact from "../Form/FormContact"

const ContactPage = props => {
    const { t } = props;
    const email = t("email");
    const phone = t("tel");
    return (

        <ContactStyle>
            <div className="global">
                <div className="column1">
                    <ParagraphTitle >{t("title1")}</ParagraphTitle>
                    <Paragraph >{t("description")}</Paragraph>
                    <div>
                    <a href={`mailto:${email}`}><Paragraph>{t("email")}</Paragraph></a> 
                    <a href={`tel:${phone}`}><Paragraph>{t("tel")}</Paragraph></a>
                    </div>
                </div>

                {/* <div className="contact">
                    <ParagraphTitle align="center">{t("title2")}</ParagraphTitle>
                    <Titleh3 >{t("subtitle")}</Titleh3>
                    <FormContact />
                </div> */}
            </div>

        </ContactStyle>
    )

}

export default withTranslation("contact")(ContactPage);