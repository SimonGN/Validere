import React from "react";
import { ScrollStyle } from "./ScrollStyle";

const Scroll = props => {

    return (

        <ScrollStyle>
            <div className="movil">
                <div className="scroll box1"></div>
                <div className="scroll box2"></div>
                <div className="scroll box3"></div>
                <div className="scroll box4"></div>
            </div>
            <div className="pc">
                <div  className="scroll box1"></div>
                <div  className="scroll box2"></div>
                <div  className="scroll box3"></div>
                <div  className="scroll box4"></div>
                <div  className="scroll box5"></div>
                <div  className="scroll box6"></div>
            </div>

        </ScrollStyle>
    )

}

export default Scroll;