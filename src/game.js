import player from "./player";
import {
  makeBoard,
  updateBoard,
  colorHit,
  clearBoard,
  displayWinner,
  clearModal,
} from "./DOM";
import { ship } from "./ships";

const placeShipListener = (plyr, ships) => {
  const boardArea = document.querySelector(".board-area");
  let counter = 0;
  boardArea.addEventListener("click", (e) => {
    if (e.target.hasAttribute("falsedata-coords") && counter < 5) {
      let coords = e.target.getAttribute("falsedata-coords");
      coords = [coords[0], coords.slice(1)];
      plyr.brd.placeShip(ships[counter], "horizontal", coords[0], coords[1]);
      updateBoard(plyr);
      counter++;
    }
  });
};

const populateBoard = (plyr) => {
  const carrier = ship(5);
  const battleship = ship(4);
  const cruiser = ship(3);
  const submarine = ship(3);
  const destroyer = ship(2);
  const ships = [carrier, battleship, cruiser, submarine, destroyer];
  if (plyr.name === "p1") {
    placeShipListener(plyr, ships);
  } else {
    plyr.brd.placeShip(carrier, "horizontal", "A", 2);
    plyr.brd.placeShip(battleship, "vertical", "C", 8);
    plyr.brd.placeShip(cruiser, "vertical", "D", 2);
    plyr.brd.placeShip(submarine, "vertical", "E", 5);
    plyr.brd.placeShip(destroyer, "horizontal", "H", 1);
  }
};

const resetGameListener = () => {
  const resetButton = document.querySelector(".reset-button");
  console.log(resetButton);
  resetButton.addEventListener("click", () => {
    clearBoard();
    initializeGame();
    clearModal();
  });
};

const testForWinner = (plyr, otherPlyr) => {
  if (plyr.brd.allShipsSunk()) {
    displayWinner(otherPlyr);
    resetGameListener();
    console.log(p1, p2);
  }
};

const attackListener = (p1, p2) => {
  const boardArea = document.querySelector(".board-area");
  boardArea.addEventListener("click", (e) => {
    const coordsToAttack = e.target.getAttribute("truedata-coords");
    if (
      p1.getTurn() &&
      e.target.hasAttribute("truedata-coords") &&
      p1.checkFiredOnLocations(coordsToAttack[0], coordsToAttack.slice(1)) ===
        false
    ) {
      p1.attackBoard(p2, coordsToAttack[0], coordsToAttack.slice(1));
      colorHit(e.target, p2, coordsToAttack);
      testForWinner(p2, p1);
      p2.computerAttack(p1);
      console.log(p1, p2, coordsToAttack[0], coordsToAttack.slice(1));
      testForWinner(p1, p2);
    }
  });
};

const runGame = (p1, p2) => {
  populateBoard(p1);
  populateBoard(p2);
  // updateBoard(p1);
  attackListener(p1, p2);
};

const initializeGame = () => {
  const newGameButton = document.querySelector(".start-game");
  const p1 = player();
  const p2 = player();
  p1.name = "p1";
  p2.name = "p2";
  p1.setTurn(true);
  p2.setComp(true);
  makeBoard(p1);
  makeBoard(p2);
  newGameButton.disabled = true;
  runGame(p1, p2);
};

const newGameListener = () => {
  const newGameButton = document.querySelector(".start-game");
  newGameButton.addEventListener("click", initializeGame);
};

export { newGameListener };
