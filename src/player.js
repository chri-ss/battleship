import { gameboard } from "./gameboard";
import { ship } from "./ships";
import { colorHit } from "./DOM";

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

  const checkFiredOnLocations = (row, column) => {
    if (
      JSON.stringify(firedOnLocations).includes(JSON.stringify([row, column]))
    ) {
      return true;
    }
    return false;
    // firedOnLocations.forEach((location) => {
    //   if (location[0] === row && location[1] === column) {
    //     return true;
    //   }
    // });
    // return false;
  };

  const attackBoard = (plyr, row, column) => {
    if (turn/*&& checkFiredOnLocations(row, column) === false*/) {
      plyr.brd.receiveAttack(row, column);
      firedOnLocations.push([row, column]);
      setTurn(false);
      plyr.setTurn(true);
    }
    return firedOnLocations;
  };

  const computerAttack = (plyr) => {
    const row = getRandomRow();
    const column = getRandomColumn();
    if (computer /*&& checkFiredOnLocations(row, column) === false*/) {
      attackBoard(plyr, row, column);
      colorHit(
        document.querySelector(`[falsedata-coords=${row + column}]`),
        plyr,
        `${row + column}`
      );
    }
    return false;
  };

  return {
    getTurn,
    setTurn,
    getComp,
    setComp,
    firedOnLocations,
    brd,
    attackBoard,
    computerAttack,
    checkFiredOnLocations
  };
};

export default player;
