import React, { useState } from "react";
import api from "../../services/api";
import { Form, Input, Label, Text } from "./styles";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";

export default function Login({ history }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await api.post("/users/create", {
      email,
      password,
      name
    });

    const { user, token } = response.data;

    if (response.status === 200) {
      if (user) {
        localStorage.setItem("user", user._id);
        localStorage.setItem("token", token);
        setTimeout(() => {
          history.push("/new");
        }, 200);
      }
    }
  }

  return (
    <Wrapper>
      <Text>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>taletos</strong> para sua empresa.
      </Text>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">NOME *</Label>
        <Input
          type="text"
          id="name"
          placeholder="Seu nome"
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="email">E-MAIL *</Label>
        <Input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <Label htmlFor="email">SENHA *</Label>
        <Input
          type="password"
          security
          id="password"
          placeholder="Digite uma senha"
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" text="Entrar" loading={loading} />
      </Form>
    </Wrapper>
  );
}
