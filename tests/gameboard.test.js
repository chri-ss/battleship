import { gameboard } from "../src/gameboard";

test("Gameboard returns a 10 x 10 grid", () => {
  expect(gameboard({}).board).toEqual({
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
