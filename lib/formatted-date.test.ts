import { formattedDate } from "./formatted-date";

it("formattedDate", () => {
  expect(formattedDate(new Date("2022/9/1"))).toEqual("2022-09-01");
  expect(formattedDate(new Date("2022-09-23T00:48:09.000Z"))).toEqual(
    "2022-09-23"
  );
  expect(formattedDate(new Date("2022-09-22T18:52:23.000Z"))).toEqual(
    "2022-09-23"
  );
});
