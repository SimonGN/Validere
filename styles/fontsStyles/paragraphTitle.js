import styled from 'styled-components';


const titleh3 = styled.h2`
    font-family: "Panama";
    color: black;
    font-size: 40px;
    letter-spacing: 0px;
    line-height:45px;
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

export default titleh3;
