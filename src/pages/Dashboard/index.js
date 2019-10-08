import React, { useEffect, useState, useMemo } from "react";
import api from "../../services/api";
import Wrapper from "../../components/Wrapper";
import {
  List,
  ListItem,
  ItemHeader,
  NotificationButton,
  Notification,
  NotificationItem
} from "./styles";
import Button from "../../components/Button";
import socketio from "socket.io-client";

export default function Dashboard({ history }) {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem("user");
  const socket = useMemo(
    () =>
      socketio("http://localhost:3003", {
        query: { user_id }
      }),
    [user_id]
  );

  useEffect(() => {
    socket.on("booking_request", data => {
      setRequests([...requests, data]);
    });
  }, [requests, socket]);
  console.log(requests);
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

  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`);
    setRequests(requests.filter(request => request._id !== id));
  }

  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`);
    setRequests(requests.filter(request => request._id !== id));
  }

  return (
    <Wrapper>
      <Notification>
        {requests.map(request => (
          <NotificationItem key={request._id}>
            <p>
              <strong>{request.user.name}</strong> está solicitando uma reserva{" "}
              <strong>{request.spot.name}</strong> para a data:{" "}
              <strong>{request.date}</strong>
            </p>
            <NotificationButton
              onClick={() => handleAccept(request._id)}
              accept="accept"
            >
              Aceitar
            </NotificationButton>
            <NotificationButton
              onClick={() => handleReject(request._id)}
              deny="deny"
            >
              Rejeitar
            </NotificationButton>
          </NotificationItem>
        ))}
      </Notification>

      <List>
        {spots &&
          spots.map(spot => (
            <ListItem key={spot._id}>
              <ItemHeader src={spot.thumbnail_url}></ItemHeader>
              <strong>{spot.name}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
              <p>{spot.description}</p>
            </ListItem>
          ))}
      </List>
      <Button text="Cadastrar novo Spot" onClick={() => history.push("/new")} />
    </Wrapper>
  );
}
