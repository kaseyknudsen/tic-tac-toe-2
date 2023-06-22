import { useState } from "react";

//component to make a square
const Square = ({ value, onClickSquare }) => {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
};

//component to create the board
const Board = ({xIsNext, squares, onPlay}) => {
    const handleClick = (i) => {
        
    }

}

export default Square;
