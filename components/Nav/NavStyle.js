import styled from 'styled-components';


const NavStyle = styled.div`
z-index:40;
background-color:white 2%;
position:fixed;
width:100%;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
@keyframes animation {
    0%{opacity:0}
    100%{opacity:1}
}

p:active{
    text-transform:uppercase;
}

.movil{ 
    width:90%;
    margin:0 auto;
    margin-top:2%;
    margin-bottom:2%;
    display:flex;
    justify-content:space-between;
    align-items: center;
}
.simbolo{
    width:45px;
    margin-left: calc(50% - 22.5px)
}
.hamburguer{
    width:35px;
    display:flex;
    flex-direction: column-reverse;

}
.divHamburguer1, .divHamburguer2{
    width:100%;
    height:2px;
    background-color:black;
    margin-bottom:10px;
}
.divHamburguer2{
    transform: ${props => props.view ? 'translateY(6px)rotate(-45deg)' : 'rotate(0deg)'};
}
.divHamburguer1{
    margin-bottom:0;
    transform: ${props => props.view ? 'translateY(-6px) rotate(45deg)' : 'rotate(0deg)'};
    
}
nav{
    padding-top:2%;
    padding-bottom:2%;
    width:90%;
    height:100vh;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    display: ${props => props.view ? 'block' : 'none'};
    animation: animation 1.2s;
}

    p, a{
        font-size: 24px;
        margin-top: 30%;
        text-align: center;
        text-decoration:none;
        cursor:pointer;
    }
    img{
        cursor:pointer; 
    }

    .aLogo{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav{
        padding-top:2%;
        padding-bottom:2%;
        width:90%;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        display: ${props => props.view ? 'block' : 'none'};
        }
    .logo{
        display:none;
    }

    
    
    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .simbolo, .hamburguer, .movil{
            display:none;
        }
        div{
            width:50%;
            padding-top:1%;
            padding-bottom:1%;
        }
        nav{
            display: flex;
            flex-direction:row;
            height:3vh;
        }
       
        
        .logo{
            display:block;
            width:15%;
        } 
        .simbolo, .hamburguer, .movil{
            display:none;
        }
        p, a{
            font-size: 15px;
            margin-top: 0;
            text-align: center;
            text-decoration:none;
            cursor:pointer;
        }
    }
    @media only screen and (min-width:1025px) {
        .simbolo, .hamburguer, .movil{
            display:none;
        }
        div{
            width:50%;
            padding-top:1%;
            padding-bottom:1%;
        }
        nav{
            display: flex;
            flex-direction:row;
            height:1vh;
            width:70%
        }
       
        
        .logo{
            display:block;
            width:15.53%;
        } 
        .simbolo, .hamburguer, .movil{
            display:none;
        }
        p, a{
            font-size: 15px;
            margin-top: 0;
            text-align: center;
            text-decoration:none;
            cursor:pointer;
        }
    }

`;

export { NavStyle };
