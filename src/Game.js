import { useState } from "react";

const Square = ({ value, onClickSquare }) => {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
};

const board = ({xIsNext, squares, onPlay}) => {

}

export default Square;
