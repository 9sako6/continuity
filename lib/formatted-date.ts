import { DateTime } from "luxon";

export const formattedDate = (date: Date) => {
  return DateTime.fromJSDate(date, {
    zone: "Asia/Tokyo",
  })
    .toString()
    .slice(0, 10);
};
