import React from "react";

import { ButtonStyle } from "./ButtonStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";

const Button = props => {
    return (
        <ButtonStyle
            backgroundColor={props.backgroundColor}
            className="readmore"
            disabled={props.disabled ? props.disabled : false}
            onClick={props.method ? (event) => { event.preventDefault(); props.method() } : ''}
            type={props.type}
        >
            <Paragraph color={props.color} size={props.size}> {props.content}</Paragraph>
        </ButtonStyle>
    );
};

export default Button;

