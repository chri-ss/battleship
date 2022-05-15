const content = document.getElementById("content");

const makeHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
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
  content.appendChild(boardArea);
};

const makeUI = () => {
  makeShipArea();
  makeBoardArea();
};

export default makeUI;
