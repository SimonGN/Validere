import React, { useState, useEffect } from "react";
import Link from "next/link";

import { NavStyle } from "./NavStyle";

import Paragraph from "../../styles/fontsStyles/paragraph";



import { withTranslation } from '../../i18n'

const Nav = props => {
    const { t, handleScroll } = props;
    const [ view, setView ] = useState(false);
    const [ url, setUrl ] = useState("");
    const handleOpen = () => {
        const value = !view;
        setView(value);
    }
    useEffect(() => {
        setUrl(window.location.href)
      }, [])

    return (
        <NavStyle view={view}>
            <header>
                <div className="movil">
                    <Link href="/index"><img className="simbolo" src="/static/svg/simboloValidere.svg" /></Link>
                    <div onClick={handleOpen} cursor={"true"}className="hamburguer">
                        <div className="divHamburguer1"></div>
                        <div className="divHamburguer2"> </div>
                    </div>
                </div>
                <nav>
                {handleScroll && (
                    <Paragraph 
                        size="13px" 
                        onClick={() => handleScroll()} 
                    >
                       {t("nav1")}
                    </Paragraph>
                )}
                {!handleScroll && (
                    <Link as="/" href={{ pathname: "/", query: { scroll: true } }}>
                        <Paragraph size="13px" capital={url.includes('about') ? 'uppercase' : ''}>{t("nav1")}</Paragraph>
                    </Link>
                )}
                    <Link href="/about"><Paragraph size="13px" capital={url.includes('about') ? 'uppercase' : ''}>{t("nav2")}</Paragraph></Link>
                    <Link href="/index"><img className="logo" src="/static/svg/logoValidere.svg" /></Link>
                    <Link href="/validate"><Paragraph size="13px" capital={url.includes('validate') ? 'uppercase' : ''}>{t("nav3")}</Paragraph></Link>
                    <Link href="/contact"><Paragraph size="13px" capital={url.includes('contact') ? 'uppercase' : ''}>{t("nav4")}</Paragraph></Link>
                </nav>
            </header>

        </NavStyle>
    );
};

export default withTranslation("nav")(Nav);
