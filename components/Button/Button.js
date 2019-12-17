import React from "react";

import { ButtonStyle } from "./ButtonStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";

const Button = props => {


    return (
        <ButtonStyle 
        backgroundColor={props.backgroundColor}
        className="readmore"
        onClick={props.method ? props.method : ''}
        data-aos="fade-in"
         >
            <Paragraph color={props.color} size={props.size}> {props.content}</Paragraph>
          
        </ButtonStyle>
    );
};

export default Button;

