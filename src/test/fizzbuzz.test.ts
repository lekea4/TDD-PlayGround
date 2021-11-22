import { fizzbuzz } from "../main/fizzbuzz";
describe("Fizzbuzzing numbers", () => {
  it.each([
    ["1", 1],
    ["2", 2],
    ["Fizz", 3],
    ["4", 4],
    ["Buzz", 5],
    ["Fizz", 6],
    ["7", 7],
    ["8", 8],
    ["Fizz", 9],
    ["Buzz", 10],
    ["11", 11],
    ["Fizz", 12],
    ["13", 13],
    ["14", 14],
    ["FizzBuzz", 15],
    ["FizzBuzz", 30],
    ["FizzBuzz", 45],
  ])('should return "%s" when given %i', (expected: string, input: number) => {
    expect(fizzbuzz(input)).toBe(expected);
  });
});
