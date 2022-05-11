import { gameboard } from "./gameboard";

const player = () => {
  let turn = false;
  const brd = gameboard();
  const firedOnLocations = [];

  const getTurn = () => turn;

  const setTurn = (value) => (turn = value);

  const attackBoard = (plyr, row, column) => {
    if (turn === true) {
      plyr.brd.receiveAttack(row, column);
      firedOnLocations.push([row, column]);
      setTurn(false);
    }
  };
  return { getTurn, setTurn, brd, attackBoard };
};

export default player;
