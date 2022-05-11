import player from "../src/player";

test("attackBoard attacks enemy gameboard", () => {
  const p1 = player();
  const p2 = player();

  const attackMock = jest.fn(() => {
    p1.setTurn(true);
    p1.attackBoard(p2, "A", 3);
  });

  attackMock();

  expect(p2.brd.board["A"][2]).toBe("m");
});
