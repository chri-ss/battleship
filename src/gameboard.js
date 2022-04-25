import { ship } from "./ships";

const gameboard = () => {
  const makeBoard = () => {
    const brd = {};
    for (let i = 0; i < 10; ++i) {
      brd[String.fromCharCode(i + 65)] = [];
      brd[String.fromCharCode(i + 65)].length = 10;
    }
    return brd;
  };

  const board = makeBoard();

  const placeShip = (shipType, direction, startRow, startColumn) => {
    if (direction === "horizontal") {
      for (
        let i = startColumn - 1;
        i < startColumn - 1 + shipType.length;
        ++i
      ) {
        board[startRow][i] = "o";
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < shipType.length; ++i) {
        board[String.fromCharCode(startRow.charCodeAt(0) + i)][startColumn - 1] =
          "o";
      }
    }
    return board;
  };

  return { board, placeShip };
};

export { gameboard };
