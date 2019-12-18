import styled from 'styled-components';


const MobileStyle = styled.div`
    .mobile{
        display:none;
    }
    @media only screen and (max-height:375px) {
        .mobile{
            z-index:100;
            position:absolute;
            position:fixed;
            display:flex;
            justify-content:center;
            align-items:center;            
            width:100vw;
            height:100vh;
            background: linear-gradient(270deg, #ffc29e, #bab5e8, #9ce8c7, #ffc29e);
            background-size: 800% 800%;

            -webkit-animation: AnimationName 19s ease infinite;
            -moz-animation: AnimationName 19s ease infinite;
            animation: AnimationName 19s ease infinite;

            @-webkit-keyframes AnimationName {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @-moz-keyframes AnimationName {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @keyframes AnimationName {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
        }
        img{
            width:25%;
            height:auto;
        }

    }
    
    @media only screen and (min-width:415px){
        .mobile{
            display:none;
        }
    }


`;

export { MobileStyle };
