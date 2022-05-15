const content = document.getElementById("content");

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

const makeBoardArea = () => {
  const boardArea = document.createElement("div");
  boardArea.classList.add("board-area");
  const boardAreaOne = document.createElement("div");
  boardAreaOne.classList.add("board-area-one");
  const boardAreaTwo = document.createElement("div");
  boardAreaTwo.classList.add("board-area-two");
  boardArea.appendChild(boardAreaOne);
  boardArea.appendChild(boardAreaTwo);
  content.appendChild(boardArea);
};

const makeUI = () => {
  makeHeader();
  makeShipArea();
  makeBoardArea();
};

export default makeUI;
