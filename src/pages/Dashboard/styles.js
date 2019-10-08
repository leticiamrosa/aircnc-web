import styled, { css } from "styled-components";
import { colors } from "../../styles/styles";

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 10px;
    font-size: 24px;
    color: #444;
  }

  span {
    font-size: 15px;
    color: #999;
  }
`;

export const ItemHeader = styled.header`
  background-image: url(${props => props.src});
  height: 120px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1px;
`;

export const Notification = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

export const NotificationItem = styled.li`
  font-size: 16px;
  line-height: 24px;
`;

export const NotificationButton = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;

  ${props =>
    props.accept &&
    css`
      color: green;
    `}

  ${props =>
    props.deny &&
    css`
      color: ${colors.primaryDark};
    `}
`;
