import { load } from "@utils/index";
import { describe, it, expect } from "vitest";

const part1 = (input: string) =>
  input
    .split("\n")
    .map((item) =>
      item
        .trim()
        .split("")
        .filter((char) => !isNaN(Number(char)))
    )
    .map((item) => Number(item[0] + item[item.length - 1]))
    .reduce((prev, cur) => prev + cur, 0);

describe("2023/day/01/part1", () => {
  it("should work with the example input", () => {
    const input = `1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet`;
    expect(part1(input)).toEqual(142);
  });

  it("should work with the puzzle input", () => {
    const input = load(__dirname);
    expect(part1(input)).toEqual(55477);
  });
});
