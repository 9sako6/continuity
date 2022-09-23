export const getDates = (start: Date, end: Date) => {
  const dates: Date[] = [];
  let current = start;

  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
};
