import React from "react";
import { CookieWrapper } from "./CookiesStyles";
import Button from "../Button/Button"
import Paragraph from "../../styles/fontsStyles/paragraph";

class Cookies extends React.Component {
  constructor({ backgroundColor, color }) {
    super({ backgroundColor, color });
    this.state = { display: "flex" };
  }

  componentDidMount() {
    const display = localStorage.getItem('displayValidere')
    this.setState({... this.state , display})
  }
  changeDisplay = () => {
    localStorage.setItem('displayValidere', 'none')
    const display = localStorage.getItem('displayValidere')
    this.setState({... this.state , display})
  };
  render() {
    const { backgroundColor, color } = this.props;
    return (
      <CookieWrapper
        backgroundColor={backgroundColor}
        color={color}
        display={this.state.display}
      >
        <div className="cookies-content">
          <Paragraph size="13px" className="text" color="#D6D6D6">
            Este sitio web utiliza cookies para garantizar que obtenga la mejor
            experiencia en nuestro sitio web. Si continúa navegando está dando su consentimiento para la aceptación de las mencionadas cookies y la aceptación de nuestra {" "}
            <a href="/static/documents/ProteccionDeDatos.pdf" target="_blank">
              política de privacidad.
            </a>
          </Paragraph>
          <Button content="ENTENDIDO" style="text-align: center;" method={() => this.changeDisplay()}></Button>
        </div>
      </CookieWrapper>
    );
  }
}

export default Cookies;