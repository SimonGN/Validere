import styled from 'styled-components';


const TodoStyle = styled.div`

    .queHacemos, .uni, .noUni, .consul{
        width:90%;
        margin: 0 auto;
        
        p:first-child, h3{
            margin-bottom:5%;
        }

        p,h2{
            margin-bottom:15%;
        }
    }
 
    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:100%;
            p:first-child, h3{
                margin: 0 12% 5% 12%;
                padding: 12% 0 0 0;
            }
            p,h2{
                margin: 0 12% 0 12%;
                padding: 0 0 12% 0;
            }
        }
        .uni{
            border-top: 1px solid black;
            border-right: 1px solid black;

        }
        .queHacemos{
            border-right: 1px solid black;
        }
        .noUni{
            border-bottom: 1px solid black;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:100%;
            p:first-child, h3{
                margin: 0 12% 5% 12%;
                padding: 12% 0 0 0;
            }
            p,h2{
                margin: 0 12% 0 12%;
                padding: 0 0 12% 0;
            }
        }
        .uni{
            border-top: 1px solid black;
            border-right: 1px solid black;

        }
        .queHacemos{
            
            border-right: 1px solid black;
        }
        .noUni{
            border-bottom: 1px solid black;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:100%;
            p:first-child, h3{
                margin: 0 12% 5% 12%;
                padding: 12% 0 0 0;
            }
            p,h2{
                margin: 0 12% 0 12%;
                padding: 0 0 12% 0;
            }
        }
        .uni{
            border-top: 1px solid black;
            border-right: 1px solid black;

        }
        .queHacemos{
            
            border-right: 1px solid black;
        }
        .noUni{
            border-bottom: 1px solid black;
        }
    }
    @media only screen and (min-width:1441px){
        width:100%;
        display:flex;
        .colum1, .colum2{
            width:50%;
        }
        .queHacemos, .uni, .noUni, .consul{
            width:100%;
            p:first-child, h3{
                margin: 0 12% 5% 12%;
                padding: 12% 0 0 0;
            }
            p,h2{
                margin: 0 12% 0 12%;
                padding: 0 0 12% 0;
            }
        }
        .uni{
            border-top: 1px solid black;
            border-right: 1px solid black;

        }
        .queHacemos{
            
            border-right: 1px solid black;
        }
        .noUni{
            border-bottom: 1px solid black;
        }
    }

`;

export { TodoStyle };
