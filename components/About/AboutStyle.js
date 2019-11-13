import styled from 'styled-components';


const AboutStyle = styled.div`
    a{
        text-decoration:none;
    }
    width:100%;
    .global{
        display:flex;
        flex-flow: column;
    }

    .column1{
        display:flex;
        flex-flow:column;
        padding-top:38%;
        margin: 0 auto;
        width:90%;
        h2{
            margin-bottom:5%;
        }
        p{
            margin-bottom:3%;
        }
        div{
            
        }
        p:last-child{
            margin-bottom:15%;
        }
    }
    .contact{
        order:1;
    }

    .about{
        order:2;
    }
    .mision{
        order:3;
    }

    .emailPhone{
        p:last-child{
            margin-bottom:5%;
        }
    }
    .column2{
        margin: 0 auto;
        padding: 20% 0 20% 0;
        img{
            display: flex;
            justify-content: center;
            width:80%;
            margin: 0 auto;
        }
    }
    .image{
        width:100%;
        z-index:10;
        img{
            width:100%;
            object-fit:cover;
            z-index:10;
        }
    }
    button{
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 2% 20% 2% 20%;  
    }
    .button{
        padding-top:10%;
        padding-bottom:20%;
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding: 15% 5% 10% 5%;
        }
        .column2{
            width:50%;
            padding-top:15%;
            div{
                display: flex;
                justify-content: center;
            }

            img{
                position:fixed;
                width:17%;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding-top:15%;
        }
        .about, .mision, .contact{
            margin: 0 12% 0 12%;
        }
        .column2{
            width:50%;
            padding-top:15%;
            div{
                display: flex;
                justify-content: center;
            }

            img{
                position:fixed;
                width:10%;
            }
        }
        .contact{
            order:3;
        }

        .about{
            order:1;
        }
        .mision{
            order:2;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding-top:15%;
        }
        .about, .mision, .contact{
            margin: 0 15% 0 15%;
        }
        .column2{
            width:50%;
            padding-top:15%;
            div{
                display: flex;
                justify-content: center;
            }

            img{
                position:fixed;
                width:10%;
            }
        }
        .contact{
            order:3;
        }

        .about{
            order:1;
        }
        .mision{
            order:2;
        }
    }
    @media only screen and (min-width:1441px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding-top:15%;
        }
        .about, .mision, .contact{
            margin: 0 20% 0 20%;
        }
        .column2{
            width:50%;
            padding-top:15%;
            div{
                display: flex;
                justify-content: center;
            }

            img{
                position:fixed;
                width:10%;
            }
        }
        .contact{
            order:3;
        }

        .about{
            order:1;
        }
        .mision{
            order:2;
        }
    }

`;

export { AboutStyle };
