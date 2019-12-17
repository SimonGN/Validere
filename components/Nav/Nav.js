import React from "react";
import Link from "next/link";

import { NavStyle } from "./NavStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";



import {withTranslation } from '../../i18n'

const Nav = props => {
    const { t } = props;
    return (
        <NavStyle >
            <div>
                <Link href="/about"><Paragraph size="13px" >{t("nav1")}</Paragraph></Link>
                <Link href="/about"><Paragraph size="13px" >{t("nav2")}</Paragraph></Link>
                <Link href="/index"><img className="simbolo" src="/static/svg/simboloValidere.svg" /></Link>
                <Link href="/index"><img className="logo" src="/static/svg/logoValidere.svg" /></Link>
                <Link href="/validate"><Paragraph size="13px" >{t("nav3")}</Paragraph></Link>
                <Link href="/contact"><Paragraph size="13px" >{t("nav4")}</Paragraph></Link>
            </div>

        </NavStyle>
    );
};

export default withTranslation("nav")(Nav);
