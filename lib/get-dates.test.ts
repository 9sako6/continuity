import { getDates } from "./get-dates";

it("should contain dates in a year", () => {
  const dates = getDates(new Date("2022-01-01"), new Date("2022-12-31"));

  expect(dates.length).toBe(365);
  expect(dates[0]).toEqual(new Date("2022-01-01"));
  expect(dates[364]).toEqual(new Date("2022-12-31"));
});
