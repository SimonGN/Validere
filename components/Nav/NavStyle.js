import styled from 'styled-components';


const NavStyle = styled.div`
    a{
        text-decoration:none;
    }
    padding-top:2%;
    padding-bottom:2%;
    position:fixed;
    width:100%;
    div{
        width:90%;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        }
    .logo{
        display:none;
    }
    .simbolo{
        width:13%;
    }
    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        width:50%;
        .logo{
            display:block;
            width:40%;
        }
        .simbolo{
            display:none;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:50%;
        .logo{
            display:block;
            width:35%;
        } 
        .simbolo{
            display:none;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        padding-top:1%;
        padding-bottom:1%;
        width:50%;
        .logo{
            display:block;
            width:30%;
        } 
        .simbolo{
            display:none;
        }
    }
    @media only screen and (min-width:1441px){
        padding-top:1%;
        padding-bottom:1%;
        width:40%;
        .logo{
            display:block;
            width:30%;
        } 
        .simbolo{
            display:none;
        }
    }

`;

export { NavStyle };
