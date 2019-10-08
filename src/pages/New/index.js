import React, { useEffect, useState, useMemo } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import {
  Form,
  Label,
  Input,
  InputSelect,
  ContentTags,
  Tags,
  TagsText,
  InputTextArea,
  LabelThumbnail,
  InputThumbnail
} from "./styles";
import Button from "../../components/Button";

import camera from "../../assets/camera.svg";

export default function New({ history }) {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [price, setPrice] = useState("");
  const [hour, setHour] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const tagsSelect = ["Bar", "Boteco", "Show", "Feira", "Cultural"];

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    data.append("thumbnail", thumbnail);
    data.append("name", name);
    data.append("data", data);
    data.append("price", price);
    data.append("hour", hour);
    data.append("tags", tags);
    data.append("address", address);
    data.append("description", description);

    const response = await api.post("/spots", data, {
      headers: {
        user_id,
        "x-access-token": token
      }
    });
    console.log(response);
    history.push("/dashboard");
  }

  console.log(tags);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <LabelThumbnail
          htmlFor="thumbnail"
          img={preview}
          thumbnail={Boolean(thumbnail)}
        >
          <img src={camera} alt="camera" />
          <InputThumbnail
            id="thumbnail"
            type="file"
            onChange={e => setThumbnail(e.target.files[0])}
          />
        </LabelThumbnail>

        <Label htmlFor="name">Título</Label>
        <Input
          id="name"
          placeholder="Seu evento incrível"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="data">Dia</Label>
        <Input
          id="data"
          placeholder="Digite o dia do evento"
          value={data}
          onChange={e => setData(e.target.value)}
        />

        <Label htmlFor="hour">Horário</Label>
        <Input
          id="hour"
          placeholder="Horário do evento"
          value={hour}
          onChange={e => setHour(e.target.value)}
        />

        <Label htmlFor="price">Preço</Label>
        <Input
          id="price"
          placeholder="Preço"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <Label htmlFor="address">Endereço</Label>
        <Input
          id="address"
          placeholder="Preço"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <Label htmlFor="tags">Preço</Label>
        <InputSelect
          id="tags"
          type="select"
          placeholder="Tags"
          value={tag}
          onChange={e => {
            setTags([...tags, e.target.value]);
            setTag(e.target.value);
          }}
        >
          {tagsSelect.map(item => (
            <option key={item}>{item}</option>
          ))}
        </InputSelect>

        <Label htmlFor="description">Descrição</Label>
        <InputTextArea
          id="description"
          placeholder="Conta um pouco sobre..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <Button text="Cadastrar Evento" />
      </Form>

      <ContentTags>
        {tags.map(tag => (
          <Tags key={tag}>
            <TagsText>{tag}</TagsText>
          </Tags>
        ))}
      </ContentTags>
    </Wrapper>
  );
}
