import { gameboard } from "./gameboard";

const player = () => {
  let turn = false;
  let computer = false;
  const brd = gameboard();
  const firedOnLocations = [];

  const getTurn = () => turn;
  const setTurn = (value) => (turn = value);

  const getComp = () => computer;
  const setComp = (value) => (computer = value);

  const getRandomColumn = () => {
    const min = 1;
    const max = 11;

    const column = Math.floor(Math.random() * (max - min) + min);
    return column;
  };

  const getRandomRow = () => {
    const min = 65; // "A"
    const max = 75; // "J"
    const row = String.fromCharCode(
      Math.floor(Math.random() * (max - min) + min)
    );
    return row;
  };

  const attackBoard = (plyr, row, column) => {
    if (turn) {
      plyr.brd.receiveAttack(row, column);
      firedOnLocations.push([row, column]);
      setTurn(false);
    }
  };

  const computerAttack = (plyr) => {
    const row = getRandomRow();
    const column = getRandomColumn();
    if (computer === true && !firedOnLocations.includes([row, column])) {
      attackBoard(plyr, row, column);
      return true;
    }
    return false;
  };

  return {
    getTurn,
    setTurn,
    getComp,
    setComp,
    brd,
    attackBoard,
    computerAttack,
  };
};

export default player;
