import styled from 'styled-components';


const PicturessStyle = styled.div`
    display:flex;
    flex-flow:column;
    margin-bottom:10%;
    .column1, .column2{
        width:100%;

        div{
            height:49.5%;
        }
        img{
            width:100%;
            object-fit:cover;
        }
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
