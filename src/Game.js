import { useState } from "react";

const Game = ({ value, onClickSquare }) => {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
};

export default Game;
