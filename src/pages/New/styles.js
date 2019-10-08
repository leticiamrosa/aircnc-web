import styled, { css } from "styled-components";

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

export const InputSelect = styled.select`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
`;

export const InputTextArea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 90px;
  padding: 0 15px;
  padding-top: 15px;
  font-size: 16px;
  margin-bottom: 1.2rem;
`;

export const ContentTags = styled.div`
  display: flex;
  background-color: green;
`;

export const Tags = styled.div``;

export const TagsText = styled.span``;

export const LabelThumbnail = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;

  background-image: url(${props => props.img});

  ${props =>
    props.thumbnail &&
    css`
      border: 0;

      img {
        display: none;
      }
    `}
`;

export const InputThumbnail = styled.input`
  display: none;
`;
