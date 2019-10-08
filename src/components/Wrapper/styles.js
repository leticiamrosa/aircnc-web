import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-image: url(${props => props.src});
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`;

export const LogoText = styled.h1`
  font-weight: bold;
  color: #ddd;
  font-size: 3rem;
`;

export const Logo = styled.img``;
