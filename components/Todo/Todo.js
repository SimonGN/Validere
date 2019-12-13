import React, { useState } from "react";
import Link from "next/link";

import { TodoStyle } from "./TodoStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";
import Titleh3 from "../../styles/fontsStyles/titleh3"
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle"


import { withTranslation } from '../../i18n'




const Todo = props => {
    const { t } = props;
    return (
        <TodoStyle >
            <div className="colum1">
                <div className="box1">
                    <div className="queHacemos" data-aos="fade-in" data-aos-duration="1000">
                        <Paragraph>{t("subTitulo1")}</Paragraph>
                        <ParagraphTitle>{t("description3")}</ParagraphTitle>
                    </div>
                </div>
                <div className="noUni" data-aos="fade-in" data-aos-duration="1000">
                    <Titleh3>{t("subTitulo3")}</Titleh3>
                    <ul>
                        <li><Paragraph>{t("description5")}</Paragraph></li>
                        <li><Paragraph>{t("description5")}</Paragraph></li>
                    </ul>
                    <Paragraph>{t("description5")}</Paragraph>
                </div>
            </div>
            <div className="colum2">
                <div className="box2">
                    <div className="uni" data-aos="fade-in" data-aos-duration="1000">
                        <Titleh3>{t("subTitulo2")}</Titleh3>
                        <ul>
                            <li><Paragraph>{t("description4")}</Paragraph></li>
                            <li><Paragraph>{t("description5")}</Paragraph></li>
                            <li><Paragraph>{t("description6")}</Paragraph></li>
                        </ul>
                        <Paragraph>{t("description7")}</Paragraph>
                    </div>
                </div>

                <div className="consul" data-aos="fade-in" data-aos-duration="1000">
                    <Titleh3>{t("subTitulo4")}</Titleh3>
                    <Paragraph>{t("description11")}</Paragraph>
                </div>
            </div>


        </TodoStyle>
    );
};

export default withTranslation("home")(Todo);
