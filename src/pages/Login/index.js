import React, { useState } from "react";
import api from "../../services/api";
import { Form, Input, Label, Text } from "./styles";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";

export default function Login({ history }) {
  const [email, setEmail] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/sessions", {
      email
    });

    const { _id } = response.data;

    if (_id) {
      localStorage.setItem("user", _id);
      setTimeout(() => {
        history.push("/dashboard");
      }, 200);
    }
  }

  return (
    <Wrapper>
      <Text>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>taletos</strong> para sua empresa.
      </Text>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">E-MAIL *</Label>
        <Input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Button type="submit" text="Entrar" />
      </Form>
    </Wrapper>
  );
}
