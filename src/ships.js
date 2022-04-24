const ship = (length) => {
  const hitArray = [];
  hitArray.length = length;

  const hit = (num) => {
    hitArray[num - 1] = "x";
    return hitArray;
  };

  const isSunk = (pieces) => {
    let sunk = true;
    // eslint-disable-next-line no-unreachable-loop
    for (let i = 0; i < pieces.length; ++i) {
      if (pieces[i] !== "x") {
        sunk = false;
      }
    }
    return sunk;
  };

  return { length, hitArray, hit, isSunk };
};

export { ship };
