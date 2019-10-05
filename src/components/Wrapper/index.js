import React from "react";
import PropTypes from "prop-types";
import { Content, Container, Logo } from "./styles";
import logo from "../../assets/logo.svg";

Wrapper.propTypes = {
  children: PropTypes.array.isRequired
};

export default function Wrapper({ children }) {
  return (
    <Container>
      <Logo src={logo} alt="Sp Spots" />
      <Content>{children}</Content>
    </Container>
  );
}
