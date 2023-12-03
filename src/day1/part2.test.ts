import { load } from "@utils/index";
import { describe, it, expect } from "vitest";

const NUMBERS_MAP = {
  // 😈
  zerone: "01",
  oneight: "18",
  twone: "21",
  threeight: "38",
  fiveight: "58",
  sevenine: "79",
  eightwo: "82",
  eighthree: "83",
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const NUMBER_KEYS = Object.keys(NUMBERS_MAP) as (keyof typeof NUMBERS_MAP)[];

type Key = (typeof NUMBER_KEYS)[number];

const part2 = (input: string) => {
  return input
    .split("\n")
    .map((item) =>
      item
        .trim()
        .replace(
          new RegExp(NUMBER_KEYS.join("|"), "g"),
          (match) => NUMBERS_MAP[match as Key]
        )
    )
    .map((item) => item.split("").filter((char) => !isNaN(Number(char))))
    .map((item) => Number(item[0] + item[item.length - 1]))
    .reduce((acc, cur) => acc + cur, 0);
};

describe("2023/day/01/part2", () => {
  it("should work with the example input", () => {
    const input = `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`;
    const result = part2(input);
    expect(result).toEqual(281);
  });

  it("should work with the puzzle input", () => {
    const input = load(__dirname);
    expect(part2(input)).toEqual(54431);
  });
});
