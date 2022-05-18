import player from "./player";
import { makeBoard, updateBoard } from "./DOM";
import { ship } from "./ships";

const populateBoard = (plyr) => {
  const carrier = ship(5);
  const battleship = ship(4);
  const cruiser = ship(3);
  const submarine = ship(3);
  const destroyer = ship(2);
  plyr.brd.placeShip(carrier, "horizontal", "A", 2);
  plyr.brd.placeShip(battleship, "vertical", "C", 8);
  plyr.brd.placeShip(cruiser, "vertical", "D", 2);
  plyr.brd.placeShip(submarine, "vertical", "E", 5);
  plyr.brd.placeShip(destroyer, "horizontal", "H", 1);
  console.log(plyr.brd.board);
};

const attackListener = (p1, p2) => {
  const boardArea = document.querySelector(".board-area");
  boardArea.addEventListener("click", (e) => {
    if (p1.getTurn() && e.target.hasAttribute("truedata-coords")) {
      const coordsToAttack = e.target.getAttribute("truedata-coords");
      p1.attackBoard(p2, coordsToAttack[0], coordsToAttack[1]);
      console.log(p2.brd.board);
    } else if (p2.getTurn() && e.target.hasAttribute("falsedata-coords")) {
      const coordsToAttack = e.target.getAttribute("falsedata-coords");
      p2.attackBoard(p1, coordsToAttack[0], coordsToAttack[1]);
      console.log(p1.brd.board);
    }
  });
};

const runGame = (p1, p2) => {
  populateBoard(p1);
  populateBoard(p2);
  updateBoard(p1);
  updateBoard(p2);
  attackListener(p1, p2);
};

const newGameListener = () => {
  const newGameButton = document.querySelector(".start-game");
  newGameButton.addEventListener("click", () => {
    const p1 = player();
    const p2 = player();
    p1.setTurn(true);
    p2.setComp(true);
    makeBoard(p1);
    makeBoard(p2);
    newGameButton.disabled = true;
    runGame(p1, p2);
  });
};

export { newGameListener };