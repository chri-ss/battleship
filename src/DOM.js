import tile from "./images/tile048.png";
import upArrow from "./images/arrow-up-circle.svg";

const content = document.getElementById("content");
const boardArea = document.createElement("div");
const modal = document.createElement("div");

const orientation = {
  current: "horizontal",
  previous: "vertical",
  swap() {
    const temp = this.current;
    this.current = this.previous;
    this.previous = temp;
  },
};
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

const clearShipArea = () => {
  const shipArea = document.querySelector(".ship-area");
  while (shipArea.firstChild) {
    shipArea.removeChild(shipArea.lastChild);
  }
};

const clearModal = () => {
  content.removeChild(modal);
};

const colorHit = (gridTile, plyr, coords) => {
  if (plyr.brd.board[coords[0]][coords.slice(1) - 1] === "x") {
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
  const shipArea = document.querySelector(".ship-area");
  modal.classList.add("modal");
  if (otherPlyr) modal.textContent = `${otherPlyr.name} wins!`;
  clearShipArea();
  shipArea.appendChild(modal);
  makeResetButton();
};

const toggleShipShadow = (o, action, CSSclass) => {
  try {
    const column = origin.getAttribute("falsedata-coords").slice(1);
    const row = origin.getAttribute("falsedata-coords")[0];
    if (o === "horizontal") {
      for (let i = column; i < parseInt(column) + currentShip.length; ++i) {
        const divToMark = document.querySelector(
          `[falsedata-coords="${row + i}"]`
        );
        if (action === "add") {
          divToMark.classList.add(CSSclass);
        } else if (action === "remove") {
          divToMark.classList.remove(CSSclass);
        }
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
        if (action === "add") {
          divToMark.classList.add(CSSclass);
        } else if (action === "remove") {
          divToMark.classList.remove(CSSclass);
        }
      }
    }
  } catch {
    return false;
  }
};

const orientationHandler = (e) => {
  if (e.code === "KeyT") {
    toggleShipShadow(orientation.current, "remove", "shadow");
    orientation.swap();
    toggleShipShadow(orientation.current, "add", "shadow");
  }
};

const orientationListener = () => {
  document.body.addEventListener("keydown", orientationHandler);
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
      toggleShipShadow(orientation.current, "add", "shadow");
    }
  });
  boardArea.addEventListener("mouseout", (e) => {
    if (e.target.hasAttribute("falsedata-coords")) {
      toggleShipShadow(orientation.current, "remove", "shadow");
    }
  });
  orientationListener();
};

const removeResidualRed = () => {
  const allTiles = document.querySelectorAll("[falsedata-coords]");
  allTiles.forEach((tl) => {
    if (tl.classList[1] === "shadow-red") {
      tl.classList.remove("shadow-red");
    }
  });
};

const makeShipPlacePrompt = (ship) => {
  const shipArea = document.querySelector(".ship-area");
  const wrapper = document.createElement("div");
  wrapper.classList.add("ship-wrapper");
  const up = document.createElement("img");
  up.src = upArrow;
  const message = document.createElement("div");
  message.textContent = "Place your Ships here\n Press 't' to rotate";
  const placing = document.createElement("div");
  placing.classList.add("placing");
  placing.textContent = `Placing: ${ship}`;
  wrapper.appendChild(up);
  wrapper.appendChild(message);
  wrapper.appendChild(placing);
  shipArea.appendChild(wrapper);
};

const updateShipPrompt = (ship) => {
  const placing = document.querySelector(".placing");
  placing.textContent = `Placing: ${ship}`;
};

const makeAttackPrompt = () => {
  const shipArea = document.querySelector(".ship-area");
  const attackWrapper = document.createElement("div");
  attackWrapper.classList.add("attack-wrapper");
  const up = document.createElement("img");
  up.src = upArrow;
  const message = document.createElement("div");
  message.textContent = "Attack your opponent here!";
  attackWrapper.appendChild(up);
  attackWrapper.appendChild(message);
  shipArea.appendChild(attackWrapper);
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
  toggleShipShadow,
  orientation,
  removeResidualRed,
  makeShipPlacePrompt,
  updateShipPrompt,
  makeAttackPrompt,
  clearShipArea,
};
