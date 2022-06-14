import player from "../src/player";
const p1 = player();
const p2 = player();

test("attackBoard attacks enemy gameboard", () => {
  const attackMock = jest.fn(() => {
    p1.setTurn(true);
    p1.attackBoard(p2, "A", 3);
  });

  attackMock();

  expect(p2.brd.board["A"][2]).toBe("m");
});

test("computer player can make a random attack", () => {
  p2.setComp(true);

  expect(p2.computerAttack(p1)).toHaveLength(2);
});
