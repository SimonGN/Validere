import styled from 'styled-components';


const FooterStyle = styled.div`
    a{
        text-decoration:none;
    }
    border-top: 1px solid black;
    margin:0 auto;
    display:flex;
    flex-flow: column;
    width:94%;
    
    
    .footer{
        width:95%;
        margin:0 auto;
        display:flex;
        flex-flow:column;
        justify-content:space-between;
        padding-top: 9%;
    }
    .option{
        
        display:flex;
        flex-flow:column;
        justify-content:space-between;
        width:65%;
    }
    .len{
        display:flex;
        justify-content:space-between;
        width:40%;
        cursor: pointer;
    }
    .copy{
        padding-top: 9%;
        width:95%;
        margin:0 auto;
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        .footer{
            flex-flow:row;
            padding-top: 5%;
        }
        .option{
            width:70%;
        }
        .len{
            width:20%;
        }
        .copy{
            padding-top: 5%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .footer, .option{
            flex-flow:row;
        }       
        .footer{
            padding-top: 5%;
        }
        .option{
            width:80%;
        }
        .len{
            width:14%;
        }
        .copy{
            padding-top: 5%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width:80%;
        .footer, .option{
            flex-flow:row;
        }       
        .footer{
            padding-top: 3%;
        }
        .option{
            width:80%;
        }
        .len{
            width:12%;
        }
        .copy{
            padding-top: 3%;
        }
    }
    @media only screen and (min-width:1441px){
        width:80%;
        .footer, .option{
            flex-flow:row;
        }       
        .footer{
            padding-top: 2%;
        }
        .option{
            width:80%;
        }
        .len{
            width:10%;
        }
        .copy{
            padding-top: 2%;
        }
    }

`;

export { FooterStyle };
