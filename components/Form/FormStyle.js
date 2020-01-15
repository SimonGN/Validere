import styled from 'styled-components';


const FormStyle = styled.div`

.error{
    width:100%;
    display:flex;
    flex-direction:column;
    margin-bottom:13%;
    & > p{
        margin-top:1%;
        margin-left:3%;
    }
}
p{
    margin-bottom:0!important; 
}
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
            color:black;
        }
    }
    input, select,textarea{
        width:95%;
        padding-bottom:3%;
        padding-left:3%;
        -moz-appearance: menulist-button; 
	-webkit-appearance: menulist-button; 
    }
    select, label{
        padding-left:2%;
        width:100%;
        outline:none;
        border:none;
        background:white;
        border-bottom: 1px solid black;
        font-family: "Pressura";
        font-size: 16px;
        letter-spacing: 0.3px;
    }
    label{
        white-space:nowrap;
        border-bottom: 0px solid black;
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
    .checkboxGlobal{
        display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom:8%;
    }
    .checkbox{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:1%;
    .inputchek{
        width:30px;
        height:30px;
        padding:0;
        margin: 0;
    }
    }


    
    @media only screen and (min-width:415px) and (max-width:768px){
        .error{
            width:100%;
            display:flex;
            flex-direction:column;
            margin-bottom:8%;
            & > p{
                margin-top:1%;
                margin-left:3%;
            }
            &:nth-child(2){
                margin-left: 5%;
            }
        }
        p{
            margin-bottom:0!important; 
        }
        input, select, textarea{
            width:100%;
            padding-bottom:1.5%;
            padding-left:2%;
        }
        textarea{
            height:18px;
            width:98%;
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
        .error{
            width:100%;
            display:flex;
            flex-direction:column;
            margin-bottom:90px;
            & > p{
                margin-top:1%;
                margin-left:2%;
            }
            &:nth-child(2){
                margin-left: 5%;
            }
        }
        p{
            margin-bottom:0!important; 
        }
        input, select, textarea{
            width:100%;
            padding-bottom:1%;
            padding-left:1.5%;
        }      
        textarea{
            height:18px;
            width:98%;
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
