import React from "react";
import { ValidateStyle } from "./ValidateStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"
import Titleh3 from "../../styles/fontsStyles/titleh3"

import { withTranslation } from '../../i18n'

import FormValidate from "../Form/FormValidate"

const ValidatePage = props => {
    const { t } = props;

    return (

        <ValidateStyle>
            <div className="global">
                <div className="column1">
                    <ParagraphTitle data-aos="fade-in">{t("titleValidate")}</ParagraphTitle>
                    <Paragraph data-aos="fade-in">{t("subtitleValidate")}</Paragraph>
                </div>

                <div className="contact">
                    <ParagraphTitle data-aos="fade-in">{t("titleValidate2")}</ParagraphTitle>
                    <Titleh3 data-aos="fade-in">{t("subtitleValidate2")}</Titleh3>
                    <FormValidate />

                </div>
            </div>

        </ValidateStyle>
    )

}

export default withTranslation("validate")(ValidatePage);