import styled from 'styled-components';


const IntroStyle = styled.div`
    a{
        text-decoration:none;
    }
    overflow: hidden;

    .colum1{
        width:100%;
        img{
            width:100%;
            object-fit:cover;
        }
    }
    .element{
        margin-top: 2%;
        margin-bottom: 10%;
    }
    .colum2{
        display:flex;
        flex-flow:column;
        width:90%;
        margin: 0 auto;
        margin-top:10%;
    }
    .button{
        display:flex;
        margin-top:15%;
        margin-bottom: 20%;
    }
    .line{
        width:20%;
        margin-left: 3%;
    }
    .title{
        margin-bottom:20%;
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){
        .element{
            margin-top:8%;
            margin-bottom:5%;
        }
        .colum2{
            margin-top:5%;
        }
        .title{
            margin-bottom:6%;
        }
        .line{
            width:15%;
        }
        .button{
            display:flex;
            margin-top:13%;
            margin-bottom: 15%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display:flex;
        .colum1{
            width:50%;
        }
        .colum2{
            padding-top:5%;
            margin:0 auto;
            width:35%;
            justify-content:center;
            
        }
        .title{
            margin-bottom:10%;
        }

        .text{
            order:1;
        }
        .element{
            margin:0;
            order:3;
        }
        .button{
            order:2;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display:flex;
        .colum1{
            width:50%;
        }
        .colum2{
            padding-top:5%;
            margin:0 auto;
            width:35%;
            justify-content:center;
            
        }
        .title{
            margin-bottom:10%;
        }

        .text{
            order:1;
        }
        .element{
            margin:0;
            order:3;
        }
        .button{
            order:2;
        }
    }
    @media only screen and (min-width:1441px){
        display:flex;
        .colum1{
            width:50%;
            img{
                height:100vh;
            }
        }
        .colum2{
            padding-top:5%;
            margin:0 auto;
            width:30%;
            justify-content:center;
            
        }
        .title{
            margin-bottom:10%;
        }

        .text{
            order:1;
        }
        .element{
            margin:0;
            order:3;
        }
        .button{
            order:2;
        }
    }

`;

export { IntroStyle };
