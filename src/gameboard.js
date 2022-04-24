const gameboard = (board) => {
  for (let i = 0; i < 10; ++i) {
    board[String.fromCharCode(i + 65)] = [];
    board[String.fromCharCode(i + 65)].length = 10;
  }

  return { board };
};

export { gameboard };
