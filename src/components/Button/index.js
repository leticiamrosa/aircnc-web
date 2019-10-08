import React from "react";
import PropTypes from "prop-types";
import { Btn, Text } from "./styles";
import { ClipLoader } from "react-spinners";

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool
};

Button.defaultProps = {
  text: "Enviar",
  disabled: false,
  onClick: () => {},
  loading: false
};

export default function Button({ disabled, text, onClick, loading }) {
  return (
    <Btn disabled={disabled} onClick={onClick}>
      {loading && (
        <div>
          <ClipLoader
            sizeUnit={"px"}
            size={18}
            color={"#fff"}
            loading={loading}
          />
        </div>
      )}
      {!loading && <Text>{text}</Text>}
    </Btn>
  );
}
