import styled from 'styled-components';


const Fonth1 = styled.h1`
    font-family: "Panama";
    color: black;
    font-size: 18px;
    letter-spacing: 0.07rem;
    line-height:1.4rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }
`;

export default Fonth1;
