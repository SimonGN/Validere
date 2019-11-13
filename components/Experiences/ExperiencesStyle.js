import styled from 'styled-components';


const ExperiencesStyle = styled.div`
    a{
        text-decoration:none;
     }
    .column1{
        width:90%;
        margin:0 auto;
    }
    .button{
        display:flex;
        margin-top:15%;
        margin-bottom: 20%;
        p, img{
            cursor: pointer;
        }
        img{
                margin-left:5%;
            }
    }
    .column2{
        width:100%;
        background: linear-gradient(28deg, #f9c3ad, #c6b3d7);
        background-size: 400% 400%;

        -webkit-animation: column2 4s ease infinite;
        -moz-animation: column2 4s ease infinite;
        animation: column2 4s ease infinite;

        @-webkit-keyframes column2 {
            0%{background-position:40% 0%}
            50%{background-position:61% 100%}
            100%{background-position:40% 0%}
        }
        @-moz-keyframes column2 {
            0%{background-position:40% 0%}
            50%{background-position:61% 100%}
            100%{background-position:40% 0%}
        }
        @keyframes column2 {
            0%{background-position:40% 0%}
            50%{background-position:61% 100%}
            100%{background-position:40% 0%}
        }
    }
    .experiences1, .experiences2{
        width:58%;
        margin:0 auto;
    }
    .experiences1{
        padding: 20% 0 15% 0;
    }
    .experiences2{
        padding: 0 0 20% 0;
    }
    .picture{
        width:100%;
        margin:0 auto;
    }
    .text{
        h3{
            margin-top: 5%;
            margin-bottom: 5%;
        }
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        display: flex;
        .column1{
            width:38%;
            padding-top: 10%;
        }

        .button{
            display:flex;
            margin-top: 30%;
            margin-bottom:5%;
        }
        .column2{
            width:50%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display: flex;
        .column1{
            width:33%;
            padding-top: 10%;
        }

        .button{
            display:flex;
            margin-top: 18%;
            margin-bottom: 5%;
        }
        .column2{
            width:50%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        
        display: flex;

        .column1{
            width:33%;
            padding-top: 10%;
        }

        .button{
            display:flex;
            margin-top: 18%;
            margin-bottom: 5%;
        }
        .column2{
            width:50%;
        }
    }
    @media only screen and (min-width:1441px){
        display: flex;
        .column1{
            width:30%;
            padding-top: 10%;
        }

        .button{
            display:flex;
            margin-top: 18%;
            margin-bottom: 5%;
        }
        .column2{
            width:50%;
        }
    }

`;

export { ExperiencesStyle };
