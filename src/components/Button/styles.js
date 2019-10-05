import styled from "styled-components";
import { colors } from "../../styles/styles";

export const Btn = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => props.background || colors.primary};
  color: ${props => props.color || "#fff"};
  cursor: pointer;

  :hover {
    background-color: ${colors.primaryDark};
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
