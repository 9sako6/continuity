import { render, screen, within } from "@testing-library/react";
import { getHistory } from "../lib/get-history";
import { mockIssue } from "../mock";
import Home from "../pages";

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

const history = getHistory(issues);

test("home", () => {
  render(<Home history={history} />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Hello world!/i })
  ).toBeDefined();

  const footer = within(screen.getByRole("contentinfo"));
  const link = within(footer.getByRole("link"));
  expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
