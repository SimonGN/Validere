import React from "react";
import { ValidateStyle } from "./ValidateStyle";

const ValidatePage = props => {

    return (

        <ValidateStyle>
               <div className="global">
                <div className="column1">
                    <div className="about">
                        <ParagraphTitle data-aos="fade-in" data-aos-duration="1000">{t("titleAbout")}</ParagraphTitle>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionAbout1")}</Paragraph>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionAbout2")}</Paragraph>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionAbout3")}</Paragraph>
                    </div>
                    <div className="mision">
                        <ParagraphTitle data-aos="fade-in" data-aos-duration="1000">{t("titleMision")}</ParagraphTitle>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionMision1")}</Paragraph>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionMision2")}</Paragraph>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionMision3")}</Paragraph>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000" >{t("descriptionMision4")}</Paragraph>
                    </div>
                    <div className="contact">
                        <ParagraphTitle data-aos="fade-in" data-aos-duration="1000">{t("titleContact")}</ParagraphTitle>
                        <Paragraph data-aos="fade-in" data-aos-duration="1000">{t("descriptionContact1")}</Paragraph>
                        <div className="emailPhone" data-aos="fade-in" data-aos-duration="1000">
                            <a href={`mailto:${email}`}><Paragraph>{t("email")}</Paragraph></a>
                            <a href={`tel:${tel}`}><Paragraph>{t("tel")}</Paragraph></a>
                        </div>

                        <div className="button" data-aos="fade-in" data-aos-duration="1000">
                            <a href={t("mailto")}> <button><h5>{t("button")}</h5></button> </a>

                        </div>
                    </div>

                </div>
                <div className="column2">
                    <div >
                        <img className="simbolo" src="/static/svg/simboloColorValidere.svg" data-aos="fade-in" data-aos-duration="1000"/>
                    </div>
                </div>
            </div>
            <div className="image"data-aos="fade-in" data-aos-duration="1000">
                <img src="/static/img/imgAbout.jpg" />
            </div>

        </ValidateStyle>
    )

}

export default ValidatePage;