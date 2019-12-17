import styled from 'styled-components';


const ValidateStyle = styled.div`
     width:100%;
    .global{
        margin: 0 auto;
        width: 90%;
        padding-top: 38%;
        display:flex;
        flex-flow: column;

    }
    .column1{
        margin-bottom: 15%;
    }
    h2, h3{
        margin-bottom: 5%;
    }
    p{
        margin-bottom: 3%;
    }
       
    @media only screen and (min-width:415px) and (max-width:768px){
        .global{
            padding-top: 15%;
        }
        .column1{
            width: 50%;
        }
        h2{
                text-align:center;
            }
    }
    @media only screen and (min-width:769px) {
        h2{
            text-align:center;
        }

        .global{
            padding-top: 13%;
        }
        .column1{
            width: 50%;
            margin-bottom: 16.5%;
        }

    }

`;

export { ValidateStyle };
