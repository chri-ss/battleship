import { ship } from "../src/ships";

test("Ship has length", () => {
  expect(ship(4).length).toBe(4);
});

test("hitArray has a length", () => {
  expect(ship(4).hitArray.length).toBe(4);
});

test("Ship has method for marking a hit (hits index)", () => {
  const s = ship(4);
  const shipHitMock = jest.fn((s) => s.hit(2));

  shipHitMock(s);

  expect(shipHitMock).toHaveReturnedWith(["o", "o", "x", "o"]);
});

test("isSunk determines if all pieces of ship hit", () => {
  const s = ship(4);
  for (let i = 0; i < s.length; ++i) {
    s.hit(i);
  }
  expect(s.isSunk()).toBe(true);
});

test("isSunk determines if a ship is not sunk if one piece is not hit", () => {
  expect(ship(4).isSunk(["x", "o", "x", "x"])).toBe(false);
});
