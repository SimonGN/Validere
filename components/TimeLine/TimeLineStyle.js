import styled from 'styled-components';

const TimeLineStyle = styled.div`
    width:100%;
    height:auto;
    padding-top: 10%;
    padding-bottom: 10%;
    background-color:white;
    margin-bottom:30%;
    .title{
        display: flex;
        justify-content: center;
        margin-bottom: 10%;
    }
    .imgs{
        display:none;
    }

    .box {
        width:90%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        margin-bottom: 10%;
        vertical-align: baseline;
        justify-content: space-between;
        align-items: center;
    }
    .imgs1, .imgs2, .imgs3, .imgs4{
        width: auto;
    margin: 0;
    }
    .text1, .text2, .text3, .text4{
        width:100%;
        h3{
            margin-bottom:3%;
        }
    }
    .text1,.text3{
        order:2;
    }
    .imgs1, .imgs3{
        order:1;
    } 
    
    @media only screen and (min-width:415px) and (max-width:768px){
        width:90%;
        margin:0 auto;
        .text1, .text2, .text3, .text4{
            width:40%;
        }
        .text1, .text3{
            order:3;
        }
        .text2, .text4{
            order:1;
        }
        .imgs1, .imgs3{
            order:1;
            margin: 0;
            width: auto;
        } 
        .imgs2, .imgs4{
            order:3;
            width: auto;
            margin: 0;
            margin-right: 5%;
        }
        .imgs1, .imgs2, .imgs3, .imgs4{
            margin: 0 auto;
        }
        .imgs1, .imgs2, .imgs4{
            width: 20%;
        }
        .imgs3{
            width: 59%;
        }

        .box{
            width:85%;
            margin: 0 auto;
            margin-bottom: 10%;
            position: relative;
            flex-direction: row;
            h3{
                width:100%;
            }
            p{
                width:100%;
            }
        }
        .imgs{
            display: flex;
            justify-content: center;
            img{
                width: 10%;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:90%;
        margin:0 auto;
        .text1, .text2, .text3, .text4{
            width:40%;
        }
        .text1, .text3{
            order:3;
        }
        .text2, .text4{
            order:1;
        }
        .imgs1, .imgs3{
            order:1;
            margin: 0;
            width: auto;
        } 
        .imgs2, .imgs4{
            order:3;
            width: auto;
            margin: 0;
            margin-right: 5%;
        }
        .imgs1, .imgs2, .imgs3, .imgs4{
            margin: 0 auto;
        }
        .imgs1, .imgs2, .imgs4{
            width: 20%;
        }
        .imgs3{
            width: 41%;
        }

        .box{
            width:85%;
            margin: 0 auto;
            margin-bottom: 10%;
            position: relative;
            flex-direction: row;
            h3{
                width:100%;
            }
            p{
                width:100%;
            }
        }
        .imgs{
            display: flex;
            justify-content: center;
            img{
                width: 8%;
            }
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width:70%;
        margin:0 auto;
        .text1, .text2, .text3, .text4{
            width:40%;
        }
        .text1, .text3{
            order:3;
        }
        .text2, .text4{
            order:1;
        }
        .imgs1, .imgs3{
            order:1;
            margin: 0;
            width: auto;
        } 
        .imgs2, .imgs4{
            order:3;
            width: auto;
            margin: 0;
            margin-right: 5%;
        }
        .imgs1, .imgs2, .imgs3, .imgs4{
            margin: 0 auto;
        }
        .imgs1, .imgs2, .imgs4{
            width: 20%;
        }
        .imgs3{
            width: 41%;
        }

        .box{
            width:85%;
            margin: 0 auto;
            margin-bottom: 10%;
            position: relative;
            flex-direction: row;
            h3{
                width:100%;
            }
            p{
                width:100%;
            }
        }
        .imgs{
            display: flex;
            justify-content: center;
            img{
                width: 7%;
            }
        }
    }
    @media only screen and (min-width:1441px){
        width:70%;
        margin:0 auto;
        .text1, .text2, .text3, .text4{
            width:40%;
        }
        .text1, .text3{
            order:3;
        }
        .text2, .text4{
            order:1;
        }
        .imgs1, .imgs3{
            order:1;
            margin: 0;
            width: auto;
        } 
        .imgs2, .imgs4{
            order:3;
            width: auto;
            margin: 0;
            margin-right: 5%;
        }
        .imgs1, .imgs2, .imgs3, .imgs4{
            margin: 0 auto;
        }
        .imgs1, .imgs2, .imgs4{
            width: 20%;
        }
        .imgs3{
            width: 41%;
        }

        .box{
            width:85%;
            margin: 0 auto;
            margin-bottom: 10%;
            position: relative;
            flex-direction: row;
            h3{
                width:100%;
            }
            p{
                width:100%;
            }
        }
        .imgs{
            display: flex;
            justify-content: center;
            img{
                width: 5%;
            }
        }
    }
   
`;

const Line = styled.div`
    @media only screen and (min-width:415px) and (max-width:768px){
        display:block;
        position:absolute;
        left: 50%;
        height: 190%;
        width:2px;
        color: black;
        border-right: 2px solid black;
      }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display:block;
        position:absolute;
        left: 50%;
        height:230%;
        width:2px;
        color: black;
        border-right: 2px solid black;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display:block;
        position:absolute;
        left: 50%;
        height:240%;
        width:2px;
        color: black;
        border-right: 2px solid black;
    }
    @media only screen and (min-width:1441px){
        display:block;
        position:absolute;
        left: 50%;
        height:380%;
        width:2px;
        color: black;
        border-right: 2px solid black;
    }
`;

const Circle = styled.div`
    display: none;
    position: absolute;
    left: calc(50% - 9.5px);
    @media only screen and (min-width:415px) and (max-width:768px){
        display:block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-color: white;
        border: 2px solid black;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display:block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-color: white;
        border: 2px solid black;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display:block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: white;
        border: 2px solid black;
    }
    @media only screen and (min-width:1441px){
        left: calc(50% - 9px);
        display:block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: white;
        border: 2px solid black;
    }
`;



export { TimeLineStyle, Line, Circle };