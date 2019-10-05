import React from "react";
import PropTypes from "prop-types";
import { Btn } from "./styles";

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: "Enviar",
  disabled: false,
  onClick: () => {}
};

export default function Button({ disabled, text, onClick }) {
  return (
    <Btn disabled={disabled} onClick={onClick}>
      {text}
    </Btn>
  );
}
