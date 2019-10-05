import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { List, ListItem, ItemHeader } from "./styles";
import Button from "../../components/Button";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function LoadSpots() {
      const user_id = localStorage.getItem("user");

      const response = await api.get("/dashboard", {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    LoadSpots();
    return () => {};
  }, []);

  return (
    <Wrapper>
      <h1>dashboard</h1>

      <List>
        {spots &&
          spots.map(spot => (
            <ListItem key={spot._id}>
              <ItemHeader src={spot.thumbnail}></ItemHeader>
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
            </ListItem>
          ))}
      </List>
      <Link to="/new">
        <Button text="Cadastrar novo Spot" />
      </Link>
    </Wrapper>
  );
}
