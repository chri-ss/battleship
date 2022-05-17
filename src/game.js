import player from "./player";
import { makeBoard } from "./DOM";

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
    populateBoard(p1);
    populateBoard(p2);
  });
};

export { newGameListener };
