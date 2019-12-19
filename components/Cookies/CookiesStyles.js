import styled from "styled-components";

export const CookieWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color:white 0.2%;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: ${props => (props.display ? props.display : "flex")};
  justify-content: space-around;
  transition: all 1s ease 0s;
  padding-top: 1em;
  z-index: 3;
  

  a {
    color: ${props => (props.color ? props.color : "#D6D6D6")};
  }
  a:visited {
    color: ${props => (props.color ? props.color : "#D6D6D6")};
  }

  .cookies-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin-bottom:5%;
  }
  .text{
    width:90%;
    margin-bottom:8%;
  }


   
  }
  .logo {
    height: 50px;
    object-fit: contain;
    display: none;
  }
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .cookies-content{
      flex-direction:row;
      margin-bottom:5%;
      align-items: center;
    }
    .text{
      margin-bottom:0;
      margin-right: 8%;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .cookies-content{
      flex-direction:row;
      margin-bottom:5%;
      align-items: center;
    }
    .text{
      margin-bottom:0;
      margin-right: 8%;
    }
  }
  @media only screen and (min-width: 1025px) {
    .cookies-content{
      flex-direction:row;
      margin-bottom:2%;
      align-items: center;
    }
    .text{
      margin-bottom:0;
      margin-right: 8%;
    }
  }
`;