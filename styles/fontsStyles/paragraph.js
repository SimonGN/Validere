import styled from 'styled-components';


const paragraph = styled.p`
    font-family: "Pressura";
    color: ${props => (props.color ? props.color : 'black')};
    font-size: ${props => (props.size ? props.size : '16px')};
    letter-spacing: ${props => (props.spacing ? props.spacing : '0.3px')};;
    line-height:${props => (props.lineheight ? props.lineheight : '30px')};
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    text-transform: ${props => (props.capital === 'uppercase' ? 'uppercase' : 'none')};
    

    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }
`;

export default paragraph;
