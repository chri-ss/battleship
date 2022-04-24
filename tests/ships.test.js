import { ship } from "../src/ships";

test("Ship is has length", () => {
  expect(ship(4).length).toBe(4);
});

test("hitArray has a length", () => {
  expect(ship(4).hitArray.length).toBe(4);
});

test("Ship has method for marking a hit", () => {
  const s = ship(4);
  const shipHitMock = jest.fn((s) => s.hit(2));

  shipHitMock(s);

  expect(shipHitMock).toHaveReturnedWith([, "x", , ,]);
});

test("isSunk determines if all pieces of ship hit", () => {
  expect(ship(4).isSunk(["x", "x", "x", "x"])).toBe(true);
});

test("isSunk determines if a ship is not sunk if one piece is not hit", () => {
  expect(ship(4).isSunk(["x", , "x", "x"])).toBe(false);
});
