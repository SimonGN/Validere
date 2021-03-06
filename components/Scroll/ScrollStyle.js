import styled from 'styled-components';


const ScrollStyle = styled.div`
    .pc{
       display:none; 
    }
    .box1, .box2, .box3,.box4, .box5, .box6{
        width: 4px; 
        height: 4px; 
        background: black; 
    }
    .box1, .box2, .box3, .box4, .box5{
        margin-bottom:4%;
    }
    .pc{
            display:none; 
        }


    div.scroll {
        -webkit-animation: mover 1s infinite  alternate;
        animation: mover 1s infinite  alternate;
    }

    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){
        .box1, .box2, .box3{
            margin-bottom:2%;
        }
        .pc{
            display:none; 
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .box1, .box2, .box3, .box4, .box5{
            margin-bottom:2%;
        }
        .movil{
            display:none;   
        }
        .pc{
            display:block; 
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .movil{
            display:none;   
        }
        .pc{
            display:block; 
        }
        .box1, .box2, .box3, .box4, .box5{
            margin-bottom:1.5%;
        }
    }
    @media only screen and (min-width:1441px){
        .movil{
            display:none;   
        }
        .pc{
            display:block; 
        }
        .box1, .box2, .box3, .box4, .box5{
            margin-bottom:1.5%;
        }
    }

`;

export { ScrollStyle };
