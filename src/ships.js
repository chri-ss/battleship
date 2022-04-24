const ship = (length) => {
  const hitArray = [];
  hitArray.length = length;
  const hit = (num) => {
    hitArray[num - 1] = "x";
    return hitArray;
  };
  return { length, hitArray, hit };
};

export { ship };
