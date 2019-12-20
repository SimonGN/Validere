import styled from 'styled-components';


const ButtonStyle = styled.div`
    margin:0 auto;
    width:70%;
    padding:14px 25px;
    display: inline-block;    
    background: rgba(255,194,158,1);
    background: -moz-linear-gradient(left, rgba(255,194,158,1) 0%, rgba(156,232,199,1) 51%, rgba(186,181,232,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,194,158,1)), color-stop(51%, rgba(156,232,199,1)), color-stop(100%, rgba(186,181,232,1)));
    background: -webkit-linear-gradient(left, rgba(255,194,158,1) 0%, rgba(156,232,199,1) 51%, rgba(186,181,232,1) 100%);
    background: -o-linear-gradient(left, rgba(255,194,158,1) 0%, rgba(156,232,199,1) 51%, rgba(186,181,232,1) 100%);
    background: -ms-linear-gradient(left, rgba(255,194,158,1) 0%, rgba(156,232,199,1) 51%, rgba(186,181,232,1) 100%);
    background: linear-gradient(to right, rgba(255,194,158,1) 0%, rgba(156,232,199,1) 51%, rgba(186,181,232,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc29e', endColorstr='#bab5e8', GradientType=1 );
    border-radius: 2px;
    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    p{
        margin-bottom:0;
        text-transform: capitalize;
        text-align:center;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        width:40%;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display:inline-block;
        width: 30%;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display:inline-block;
        width: 30%;
    }
    @media only screen and (min-width:1441px){
        display:inline-block;
        width: 30%;
    }

`;

export { ButtonStyle };
