// Returns an array that includes integers in [start, end)
export function range(start: number, end: number) {
  if (start > end) return [];

  return Array.from(Array(end - start).keys()).map((x) => x + start);
}
