import player from "./player";
import { makeBoard } from "./DOM";

const newGameListener = () => {
  const newGameButton = document.querySelector(".start-game");
  newGameButton.addEventListener("click", () => {
    const p1 = player();
    const p2 = player();
    p1.setTurn(true);
    p2.setComp(true);
    makeBoard(p1);
    makeBoard(p2);
    // return { p1, p2 };
  });
};

export { newGameListener };
