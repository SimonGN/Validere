import styled from 'styled-components';


const PicturessStyle = styled.div`
    display:flex;
    flex-flow:column;
    margin-bottom:10%;
    .column1, .column2{
        width:100%;
        img{
            width:100%;
            object-fit:cover;
        }
    }
    .country1, .country2, .country3, .country4{
        background-size: cover;
        background-repeat:no-repeat;
        position:relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        img{
            width:40%;
            transition: opacity 0.5s ease-in-out, background 1s ease-in-out;
            opacity:0;
        }
        .color {
            transition: opacity 0.5s ease-in-out, background 1s ease-in-out;
            opacity:0;
        }
    }
    .country1{
        background-image: url("/static/img/country1.jpg");
    }
    .country2{
        background-image: url("/static/img/country2.jpg");
    }
    .country3{
        background-image: url("/static/img/country3.jpg");
    }
    .country4{
        background-image: url("/static/img/country4.jpg");
    }
    .country1:hover, .country2:hover, .country3:hover, .country4:hover{
        .color {
            width:100%;
            height:100%;
            opacity:1;
            position:absolute;
            z-index:1;
        }
        img{
            width:50%;
            opacity:1;
            position:absolute;
            z-index:2;
        }
    }
    .uno{
        background-color: #FFC29E90;
    }
    .dos{
        background-color: #BAB5E890;
    }
    .tres{
        background-color: #9CE8C790;
    }
    .cuatro{
        background-color:  #FFC29E90;
    }

    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        flex-flow:row;
        margin-bottom:8%;
        .column1{
            width:50%;
        }
        .column2{
            width:50%;
        }

    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        flex-flow:row;
        margin-bottom:7%;
        .column1{
            width:50%;
        }
        .column2{
            width:50%;
        } 
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        flex-flow:row;
        margin-bottom:6%;

        .column1{
            width:50%;
        }
        .column2{
            width:50%;
        }
    }
    @media only screen and (min-width:1441px){
        flex-flow:row;
        margin-bottom:5%;
        .column1{
            width:50%;
        }
        .column2{
            width:50%;
        }
    }

`;

export { PicturessStyle };
