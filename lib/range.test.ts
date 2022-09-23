import { range } from "./range";

describe("range", () => {
  it("should return array that includes integers in [1st arg, 2nd arg)", () => {
    expect(range(1, 6)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return empty array when args are equal", () => {
    expect(range(1, 1)).toEqual([]);
  });

  it("should return empty array when 1st arg is greater than 2nd arg", () => {
    expect(range(2, 1)).toEqual([]);
  });
});
