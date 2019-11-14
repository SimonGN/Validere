import styled from 'styled-components';


const AboutStyle = styled.div`
    overflow: hidden;
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
        padding: 20% 0 35% 0;
        img{
            display: flex;
            justify-content: center;
            width:40%;
            margin: 0 auto;
            z-index:-1;
           
        }
    }
    .image{
        width:100%;
        z-index:1;
        padding-bottom: 10%;
        img{
            width: 280vw;
            z-index:10;
        }
    }
    button{
        display:flex;
        justify-content:center;
        cursor: pointer;
        align-items:center;
        padding: 8% 10% 7% 10%;  
        background: linear-gradient(to right, rgba(255,194,158,1) 0%, rgba(186,181,232,1) 50%, rgba(156,232,199,1) 100%);
        outline:none;
    }
    .button{
        margin-bottom:15%;
    }

    h5{
        font-family: "Pressura";
        color: black;
        font-size: 16px;
        letter-spacing: 0.3px;
        margin:0;
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
        .image{
            padding-bottom: 8%;
            img{
                width: 100vw;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding-top:13%;
        }
        .about, .mision, .contact{
            margin: 0 12% 0 12%;
        }
        .column2{
            width:50%;
            padding-top:13%;
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
        .image{
            padding-bottom: 7%;
            img{
                width: 100vw;
            }
        }
        button{
            padding: 5% 10% 4% 10%;  
        }
        .button{
            margin-bottom:20%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding-top:13%;
        }
        .about, .mision, .contact{
            margin: 0 15% 0 15%;
        }
        .column2{
            width:50%;
            padding-top:13%;
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
        .image{
            padding-bottom: 6%;
            img{
                width: 100vw;
            }
        }
        button{
            padding: 5% 10% 4% 10%;  
        }
        .button{
            margin-bottom:25%;
        }
    }
    @media only screen and (min-width:1441px){
        .global{
            flex-flow:row;
        }
        .column1{
            width:50%;
            padding-top:13%;
        }
        .about, .mision, .contact{
            margin: 0 20% 0 20%;
        }
        .column2{
            width:50%;
            padding-top:13%;
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
        .image{
            padding-bottom: 5%;
            img{
                width: 100vw;
            }
        }
        button{
            padding: 5% 10% 4% 10%;  
        }
        .button{
            margin-bottom:25%;
        }
    }

`;

export { AboutStyle };
