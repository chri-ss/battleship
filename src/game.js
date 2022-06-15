import player from "./player";
import {
  makeBoard,
  updateBoard,
  colorHit,
  clearBoard,
  displayWinner,
  clearModal,
  shipPlaceHover,
  toggleShipShadow,
  orientation,
  removeResidualRed,
  makeShipPlacePrompt,
  clearShipArea,
} from "./DOM";
import { ship } from "./ships";

const placeShipListener = (ships, plyr, otherPlyr) => {
  shipPlaceHover(ships, orientation);
  const boardArea = document.querySelector(".board-area");
  let counter = 0;
  makeShipPlacePrompt(ships[counter].name);
  boardArea.addEventListener("click", (e) => {
    try {
      if (e.target.hasAttribute("falsedata-coords") && counter < 5) {
        let coords = e.target.getAttribute("falsedata-coords");
        coords = [coords[0], coords.slice(1)];

        plyr.brd.placeShip(
          ships[counter],
          orientation.current,
          coords[0],
          coords[1]
        );
        ships[counter].placed = true;
        updateBoard(plyr);
        counter++;
        clearShipArea();
        makeShipPlacePrompt(ships[counter].name);
      }
      if (counter >= 5) {
        addAttackListener(plyr, otherPlyr);
      }
    } catch {
      toggleShipShadow(orientation.current, "add", "shadow-red");
      setTimeout(
        toggleShipShadow,
        100,
        orientation.current,
        "remove",
        "shadow-red"
      );
      setTimeout(removeResidualRed, 100);
    }
  });
};

const resetGameListener = () => {
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    clearBoard();
    initializeGame();
    clearModal();
    removeAttackListener();
  });
};

const testForWinner = (plyr, otherPlyr) => {
  if (plyr.brd.allShipsSunk()) {
    displayWinner(otherPlyr);
    resetGameListener();
  }
};

function attackListener(e, p1, p2) {
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
    testForWinner(p1, p2);
  }
}

const addAttackListener = (p1, p2) => {
  const boardArea = document.querySelector(".board-area");
  boardArea.addEventListener("click", (e) => attackListener(e, p1, p2));
};

const removeAttackListener = () => {
  const boardArea = document.querySelector(".board-area");
  boardArea.removeEventListener("click", attackListener);
};

const populateBoard = (plyr, otherPlyr) => {
  const carrier = ship(5);
  carrier.name = "carrier";
  const battleship = ship(4);
  battleship.name = "battleship";
  const cruiser = ship(3);
  cruiser.name = "cruiser";
  const submarine = ship(3);
  submarine.name = "submarine";
  const destroyer = ship(2);
  destroyer.name = "destroyer";
  const ships = [carrier, battleship, cruiser, submarine, destroyer];
  if (plyr.name === "p1") {
    placeShipListener(ships, plyr, otherPlyr);
  } else {
    ships.forEach((shipp) => {
      plyr.computerShipPlace(shipp);
    });
  }
};

const runGame = (p1, p2) => {
  populateBoard(p1, p2);
  populateBoard(p2, p1);
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

export { newGameListener, orientation };
