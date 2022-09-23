import { parseIssueBody } from "./parse-issue-body";

it("should parse tasks", () => {
  const tasks = parseIssueBody(`
# Hi

- [ ] A
- [x] B
  `);

  expect(tasks).toEqual([
    { title: "A", count: 0 },
    { title: "B", count: 1 },
  ]);
});

it("should parse tasks with sub tasks", () => {
  const tasks = parseIssueBody(`
# Hi

- [ ] A

- [ ] B
- C
  - [ ] C1
  - [ ] C2
  `);

  expect(tasks).toEqual([
    { title: "A", count: 0 },
    { title: "B", count: 0 },
    { title: "C", count: 0 },
  ]);
});

it("should parse tasks with sub tasks", () => {
  const tasks = parseIssueBody(`
# Hi

- [x] A

- [ ] B
- C
  - [x] C1
  - [ ] C2
  `);

  expect(tasks).toEqual([
    { title: "A", count: 1 },
    { title: "B", count: 0 },
    { title: "C", count: 1 },
  ]);
});

it("should parse with ignoreing invalid task", () => {
  const tasks = parseIssueBody(`
# Hi

- [x] A

- B
- C
  - [x] C1
  - [ ] C2
  `);

  expect(tasks).toEqual([
    { title: "A", count: 1 },
    { title: "C", count: 1 },
  ]);
});

it("should parse with ignoreing invalid task", () => {
  const tasks = parseIssueBody(`
# Hi

- [x] A

- B
- C
  - [ ] C1
  - C2
  `);

  expect(tasks).toEqual([
    { title: "A", count: 1 },
    { title: "C", count: 0 },
  ]);
});

it("should parse invalid tasks", () => {
  const tasks = parseIssueBody(`
# Hi

  `);

  expect(tasks).toEqual([]);
});

it("should parse invalid tasks", () => {
  const tasks = parseIssueBody(`
- [ ] **AAA**

  `);

  expect(tasks).toEqual([]);
});
