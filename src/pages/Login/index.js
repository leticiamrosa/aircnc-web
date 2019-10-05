import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Content, Logo, Form, Input, Label, Text } from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="Sp Spots" />
        <Content>
          <Text>
            Ofereça <strong>spots</strong> para programadores e encontre{" "}
            <strong>taletos</strong> para sua empresa.
          </Text>

          <Form>
            <Label htmlFor="email">E-MAIL *</Label>
            <Input type="email" id="email" placeholder="Seu melhor e-mail" />
            <Button type="submit">Entrar</Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

Login.propTypes = {
  logo: PropTypes.string.isRequired
};
