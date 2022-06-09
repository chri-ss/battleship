import tile from "./images/tile048.png";

const content = document.getElementById("content");
const boardArea = document.createElement("div");
const modal = document.createElement("div");

const orientation = { current: "horizontal" };
let origin;
let currentShip;

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

const makeBoardTitle = (plyr) => {
  const boardTitle = document.createElement("div");
  boardTitle.classList.add("board-title");
  if (plyr.getComp() === true) {
    boardTitle.textContent = "Computer's Board";
  } else {
    boardTitle.textContent = "Your Board";
  }
  boardArea.appendChild(boardTitle);
};

const makeBoard = (plyr) => {
  makeBoardTitle(plyr);
  const newBoard = document.createElement("div");
  newBoard.classList.add("new-board", `${plyr.getComp()}`);
  Object.entries(plyr.brd.board).forEach((entry) => {
    let column = 1;
    entry[1].forEach((i) => {
      const gridTile = document.createElement("div");
      gridTile.classList.add("grid-tile");
      gridTile.setAttribute(`${plyr.getComp()}data-coords`, entry[0] + column);
      column++;
      newBoard.appendChild(gridTile);
      gridTile.style.backgroundImage = `url(${tile})`;
    });
  });
  boardArea.appendChild(newBoard);
};

const updateBoard = (plyr) => {
  Object.entries(plyr.brd.board).forEach((entry) => {
    let column = 1;
    entry[1].forEach((i) => {
      if (i === "o") {
        const gridTile = document.querySelector(
          `[${plyr.getComp()}data-coords="${entry[0] + column}"]`
        );
        gridTile.style.background = "black";
      }
      column++;
    });
  });
};

const makeBoardArea = () => {
  boardArea.classList.add("board-area");
  content.appendChild(boardArea);
};

const clearBoard = () => {
  while (boardArea.firstChild) {
    boardArea.removeChild(boardArea.lastChild);
  }
};

const clearModal = () => {
  content.removeChild(modal);
};

const colorHit = (gridTile, plyr, coords) => {
  if (plyr.brd.board[coords[0]][coords[1] - 1] === "x") {
    gridTile.style.background = "red";
  } else {
    gridTile.style.background = "blue";
  }
};

const makeResetButton = () => {
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.textContent = "Play Again?";
  modal.appendChild(resetButton);
};

const displayWinner = (otherPlyr) => {
  modal.classList.add("modal");
  if (otherPlyr) modal.textContent = `${otherPlyr.name} wins!`;
  content.appendChild(modal);
  makeResetButton();
};

const makeShipShadow = (o) => {
  const column = origin.getAttribute("falsedata-coords").slice(1);
  const row = origin.getAttribute("falsedata-coords")[0];
  if (o === "horizontal") {
    for (let i = column; i < parseInt(column) + currentShip.length; ++i) {
      const divToMark = document.querySelector(
        `[falsedata-coords="${row + i}"]`
      );
      divToMark.classList.add("shadow");
    }
  } else if (o === "vertical") {
    for (
      let i = row.charCodeAt(0);
      i < row.charCodeAt(0) + currentShip.length;
      ++i
    ) {
      const divToMark = document.querySelector(
        `[falsedata-coords="${String.fromCharCode(i) + column}"]`
      );
      divToMark.classList.add("shadow");
    }
  }
};

const removeShipShadow = (o) => {
  console.log(origin);
  const column = origin.getAttribute("falsedata-coords").slice(1);
  const row = origin.getAttribute("falsedata-coords")[0];
  if (o === "horizontal") {
    for (let i = column; i < parseInt(column) + currentShip.length; ++i) {
      const divToMark = document.querySelector(
        `[falsedata-coords="${row + i}"]`
      );
      divToMark.classList.remove("shadow");
    }
  } else if (o === "vertical") {
    for (
      let i = row.charCodeAt(0);
      i < row.charCodeAt(0) + currentShip.length;
      ++i
    ) {
      const divToMark = document.querySelector(
        `[falsedata-coords="${String.fromCharCode(i) + column}"]`
      );
      divToMark.classList.remove("shadow");
    }
  }
};

const orientationListener = () => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyV") {
      orientation.current = "vertical";
      orientation.previous = "horizontal";
      removeShipShadow(orientation.previous);
      makeShipShadow(orientation.current);
    } else if (e.code === "KeyH") {
      orientation.current = "horizontal";
      orientation.previous = "vertical";
      removeShipShadow(orientation.previous);
      makeShipShadow(orientation.current);
    }
  });
};

const shipPlaceHover = (ships) => {
  let counter = 0;
  boardArea.addEventListener("mouseover", (e) => {
    if (e.target.hasAttribute("falsedata-coords")) {
      if (ships[counter].placed === true) {
        counter++;
      }
      origin = e.target;
      currentShip = ships[counter];
      makeShipShadow(orientation.current);
    }
  });
  boardArea.addEventListener("mouseout", (e) => {
    if (e.target.hasAttribute("falsedata-coords")) {
      removeShipShadow(orientation.current);
    }
  });
  orientationListener();
};

const makeUI = () => {
  makeHeader();
  makeBoardArea();
  makeShipArea();
};

export {
  makeUI,
  makeBoard,
  updateBoard,
  clearBoard,
  clearModal,
  colorHit,
  displayWinner,
  shipPlaceHover,
  orientationListener,
  orientation,
};
