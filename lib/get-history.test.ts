import { mockIssue, realIssues } from "../mock";
import { getHistory } from "./get-history";

it("getHistory", () => {
  const issues = [
    mockIssue({
      created_at: "2021-11-21T13:33:48Z",
      body: `
- [x] Gym
- [ ] Music
- Computer science
  - [x] Compiler
  - [ ] Competitive programming
    `,
    }),
    mockIssue({
      created_at: "2022-09-22T13:33:48Z",
      body: `
- [ ] Gym
- [x] Music
- Computer science
  - [ ] Compiler
  - [ ] Competitive programming
    `,
    }),
    mockIssue({
      created_at: "2022-09-23T13:33:48Z",
      body: `
- [x] Gym
- [ ] Music
- Computer science
  - [x] Compiler
  - [x] Competitive programming
    `,
    }),
  ];

  expect(getHistory(issues)).toEqual([
    {
      title: "Gym",
      logs: [
        {
          year: "2021",
          dates: {
            "2021-11-21": 1,
          },
        },
        {
          year: "2022",
          dates: {
            "2022-09-22": 0,
            "2022-09-23": 1,
          },
        },
      ],
    },
    {
      title: "Music",
      logs: [
        {
          year: "2021",
          dates: {
            "2021-11-21": 0,
          },
        },
        {
          year: "2022",
          dates: {
            "2022-09-22": 1,
            "2022-09-23": 0,
          },
        },
      ],
    },
    {
      title: "Computer science",
      logs: [
        {
          year: "2021",
          dates: {
            "2021-11-21": 1,
          },
        },
        {
          year: "2022",
          dates: {
            "2022-09-22": 0,
            "2022-09-23": 2,
          },
        },
      ],
    },
  ]);
});

it("should get history from real issues", () => {
  expect(getHistory(realIssues)).toEqual([
    {
      title: "Go to the gym",
      logs: [
        {
          year: "2022",
          dates: {
            "2022-09-23": 1,
          },
        },
      ],
    },
    {
      title: "Learn English",
      logs: [
        {
          year: "2022",
          dates: {
            "2022-09-23": 2,
          },
        },
      ],
    },
    {
      title: "Study computer science",
      logs: [
        {
          year: "2022",
          dates: {
            "2022-09-23": 2,
          },
        },
      ],
    },
  ]);
});
