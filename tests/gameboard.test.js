import { gameboard } from "../src/gameboard";
import { ship } from "../src/ships";

test("Gameboard returns a 10 x 10 grid", () => {
  expect(gameboard().board).toEqual({
    A: ["", "", "", "", "", "", "", "", "", ""],
    B: ["", "", "", "", "", "", "", "", "", ""],
    C: ["", "", "", "", "", "", "", "", "", ""],
    D: ["", "", "", "", "", "", "", "", "", ""],
    E: ["", "", "", "", "", "", "", "", "", ""],
    F: ["", "", "", "", "", "", "", "", "", ""],
    G: ["", "", "", "", "", "", "", "", "", ""],
    H: ["", "", "", "", "", "", "", "", "", ""],
    I: ["", "", "", "", "", "", "", "", "", ""],
    J: ["", "", "", "", "", "", "", "", "", ""],
  });
});

test("placeShip places a ship horizontally", () => {
  const placeShipMock = jest.fn(() =>
    gameboard().placeShip(ship(5), "horizontal", "D", 3)
  );

  placeShipMock();

  expect(placeShipMock).toHaveReturnedWith({
    A: ["", "", "", "", "", "", "", "", "", ""],
    B: ["", "", "", "", "", "", "", "", "", ""],
    C: ["", "", "", "", "", "", "", "", "", ""],
    D: ["", "", "o", "o", "o", "o", "o", "", "", ""],
    E: ["", "", "", "", "", "", "", "", "", ""],
    F: ["", "", "", "", "", "", "", "", "", ""],
    G: ["", "", "", "", "", "", "", "", "", ""],
    H: ["", "", "", "", "", "", "", "", "", ""],
    I: ["", "", "", "", "", "", "", "", "", ""],
    J: ["", "", "", "", "", "", "", "", "", ""],
  });
});

test("placeShip places a ship vertically", () => {
  const placeShipMock = jest.fn(() =>
    gameboard().placeShip(ship(5), "vertical", "D", 3)
  );

  placeShipMock();

  expect(placeShipMock).toHaveReturnedWith({
    A: ["", "", "", "", "", "", "", "", "", ""],
    B: ["", "", "", "", "", "", "", "", "", ""],
    C: ["", "", "", "", "", "", "", "", "", ""],
    D: ["", "", "o", "", "", "", "", "", "", ""],
    E: ["", "", "o", "", "", "", "", "", "", ""],
    F: ["", "", "o", "", "", "", "", "", "", ""],
    G: ["", "", "o", "", "", "", "", "", "", ""],
    H: ["", "", "o", "", "", "", "", "", "", ""],
    I: ["", "", "", "", "", "", "", "", "", ""],
    J: ["", "", "", "", "", "", "", "", "", ""],
  });
});

test("placeShip can't place ships out of bounds horizontally", () => {
  expect(() => gameboard().placeShip(ship(5), "horizontal", "D", 7)).toThrow(
    "Ship out of bounds"
  );
});

test("placeShip can't place ships out of bounds vertically", () => {
  expect(() => gameboard().placeShip(ship(5), "vertical", "H", 7)).toThrow(
    "Ship out of bounds"
  );
});

describe("Detecting ship collisions/hits", () => {
  const b = gameboard();
  const carrier = ship(5);

  beforeAll(() => {
    b.placeShip(carrier, "horizontal", "C", 2);
  });

  test("placeShip can't place a ship overlapping another ship perpendiclar", () => {
    expect(() => b.placeShip(ship(5), "vertical", "I", 5)).toThrow(
      "Ship out of bounds"
    );
  });

  test("receiveAttack registers a hit on gameboard, if there is a ship", () => {
    expect(b.receiveAttack("C", 5)).toBe(true);
  });

  test("receiveAttack registers a miss on gameboard, if no ship present", () => {
    expect(b.receiveAttack("E", 5)).toBe(false);
  });

  test("receiveAttack, sends hit() to ship object", () => {
    const receiveAttackMock = jest.fn(() => {
      b.receiveAttack("C", 5);
    });

    receiveAttackMock();

    expect(carrier.hitArray[3]).toBe("x");
  });
});

describe("Determining if all ships are sunk", () => {
  const b = gameboard();
  const carrier = ship(5);
  const battleship = ship(4);
  const cruiser = ship(3);
  beforeEach(() => {
    b.placeShip(carrier, "horizontal", "B", 2);
    b.placeShip(battleship, "vertical", "C", 6);
    b.placeShip(cruiser, "horizontal", "E", 1);
  });

  test("allShipsSunk returns true if all ships on gameboard are sunk (if isSunk returns true)", () => {
    const sinkAllShipsMock = jest.fn(() => {
      b.ships.forEach((s) => {
        s.placementArray.forEach((i) => {
          b.receiveAttack(i[0], i[1] + 1);
        });
      });
    });
    sinkAllShipsMock();

    expect(b.allShipsSunk()).toBe(true);
  });
});
