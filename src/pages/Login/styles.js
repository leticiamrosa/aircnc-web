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

export const Text = styled.p`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;

  > {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Logo = styled.img``;

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f05a5b;
`;
