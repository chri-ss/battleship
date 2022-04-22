import { ship } from "../src/ships";

test("Ship is has length", () => {
  expect(ship(4).length).toBe(4);
});
