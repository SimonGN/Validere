import styled from 'styled-components';


const ScrollStyle = styled.div`

    .box1, .box2, .box3,.box4{
        width: 4px; 
        height: 4px; 
        background: black; 
    }
    .box1, .box2, .box3{
        margin-bottom:4%;
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

    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }

`;

export { ScrollStyle };
