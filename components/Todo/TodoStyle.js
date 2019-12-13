import styled from 'styled-components';


const TodoStyle = styled.div`
    .queHacemos, .uni, .noUni, .consul{
        width:90%;
        margin: 0 auto;
        
        p:first-child, h3{
            margin-bottom:5%;
        }

        p,h2{
            margin-bottom:15%;
        }
    }
    ul{
        padding-inline-start: 21px;
        list-style-type: square;
    }
 
    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:80%;
            height: 60%;

        }
        .colum1{
            border-top: 1px solid black;
            border-bottom: 1px solid black;
        }
        .colum2{
            border-top: 1px solid black;
            border-left: 1px solid black;
            border-bottom: 1px solid black;
        }
        .box1, .box2{
            border-bottom: 1px solid black;
        }
        .queHacemos, .uni, .consul{
            margin:10%;
        }
        .noUni{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:80%;
            height: 60%;
        }

        .colum2{
            border-left: 1px solid black;
        }
        .box1, .box2{
            border-bottom: 1px solid black;
        }
        .queHacemos, .uni, .consul{
            margin:10%;
        }
        .noUni{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .consul{
            margin:0 auto;
            margin-top:10%;
            margin-bottom:10%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:70%;
            height: 60%;
        }
        .colum2{
            border-left: 1px solid black;
        }
        .box1, .box2{
            border-bottom: 1px solid black;
        }

        .noUni{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    @media only screen and (min-width:1441px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .consul{
            margin:0 auto;
            margin-top:10%;
            margin-bottom:10%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:70%;
            height: 60%;
        }
        .colum2{
            border-left: 1px solid black;
        }
        .box1, .box2{
            border-bottom: 1px solid black;
        }

        .noUni{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

`;

export { TodoStyle };
