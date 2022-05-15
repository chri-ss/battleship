const content = document.getElementById("content");
const boardArea = document.createElement("div");

const makeHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Battleship";
  const startGame = document.createElement("button");
  startGame.classList.add("start-game");
  startGame.textContent = "Start Game";
  header.appendChild(title);
  header.appendChild(startGame);
  content.appendChild(header);
};

const makeShipArea = () => {
  const shipArea = document.createElement("div");
  shipArea.classList.add("ship-area");
  const shipAreaOne = document.createElement("div");
  shipAreaOne.classList.add("ship-area-one");
  const shipAreaTwo = document.createElement("div");
  shipAreaTwo.classList.add("ship-area-two");
  shipArea.appendChild(shipAreaOne);
  shipArea.appendChild(shipAreaTwo);
  content.appendChild(shipArea);
};

const makeBoard = (plyr) => {
  const newBoard = document.createElement("div");
  newBoard.classList.add("new-board");
  Object.entries(plyr.brd.board).forEach((entry) => {
    entry[1].forEach((i) => {
      const gridTile = document.createElement("div");
      gridTile.classList.add("grid-tile");
      newBoard.appendChild(gridTile);
    });
  });
  boardArea.appendChild(newBoard);
};

const makeBoardArea = () => {
  boardArea.classList.add("board-area");
  content.appendChild(boardArea);
};

const makeUI = () => {
  makeHeader();
  makeBoardArea();
  makeShipArea();
};

export { makeUI, makeBoard };
