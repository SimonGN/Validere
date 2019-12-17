import styled from 'styled-components';


const FormStyle = styled.div`
    input, textarea{
        outline:none;
        border: none;
        border-bottom: 1px solid black;
        font-family: "Pressura";
        font-size: 16px;
        letter-spacing: 0.3px;
        transition-duration: 1s;
        transition-timing-function: ease-in-put;
        
        &:focus{
            color:#9CE8C7;
        }
    }
    input, select,textarea{
        margin-bottom:13%;
        width:95%;
        padding-bottom:3%;
        padding-left:3%;
    }
    select{
        padding-left:2%;
        width:100%;
    }
    select{
        outline:none;
        border:none;
        background:white;
        border-bottom: 1px solid black;
        font-family: "Pressura";
        font-size: 16px;
        letter-spacing: 0.3px;
    }
    textarea{
        width:95%;
        height:11px;
        resize:none;
        height:auto;
        overflow: auto;
    }
    .readmore{
        margin-bottom:30%;
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){

        input, select, textarea{
            margin-bottom:8%;
            width:96%;
            padding-bottom:3%;
            padding-left:3%;
            &:nth-child(2){
                margin-left: 5%;
            }
        }
        textarea{
            height:11px;
        }
        select{
            padding-left:2%;
            width:99%;
        }
        .readmore{
            margin-bottom:20%;
        }
        div{
            display: flex;
            
        }
    }
    @media only screen and (min-width:769px){
        input, select, textarea{
            margin-bottom:8%;
            width:96%;
            padding-bottom:2.5%;
            padding-left:3%;
            &:nth-child(2){
                margin-left: 5%;
            }  
        }      
        textarea{
            height:11px;
        }

        select{
            padding-left:2%;
            width:99%;
        }
        .readmore{
            margin-bottom:20%;
        }
        div{
            display: flex;
            
        }
    }


`;

export { FormStyle };
