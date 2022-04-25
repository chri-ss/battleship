import { gameboard } from "../src/gameboard";
import { ship } from "../src/ships";

test("Gameboard returns a 10 x 10 grid", () => {
  expect(gameboard().board).toEqual({
    A: [, , , , , , , , , ,],
    B: [, , , , , , , , , ,],
    C: [, , , , , , , , , ,],
    D: [, , , , , , , , , ,],
    E: [, , , , , , , , , ,],
    F: [, , , , , , , , , ,],
    G: [, , , , , , , , , ,],
    H: [, , , , , , , , , ,],
    I: [, , , , , , , , , ,],
    J: [, , , , , , , , , ,],
  });
});

test("placeShip places a ship horizontally", () => {
  const placeShipMock = jest.fn(() =>
    gameboard().placeShip(ship(5), "horizontal", "D", 3)
  );

  placeShipMock();

  expect(placeShipMock).toHaveReturnedWith({
    A: [, , , , , , , , , ,],
    B: [, , , , , , , , , ,],
    C: [, , , , , , , , , ,],
    D: [, , "o", "o", "o", "o", "o", , , ,],
    E: [, , , , , , , , , ,],
    F: [, , , , , , , , , ,],
    G: [, , , , , , , , , ,],
    H: [, , , , , , , , , ,],
    I: [, , , , , , , , , ,],
    J: [, , , , , , , , , ,],
  });
});
