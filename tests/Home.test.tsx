import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
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
  render(<Home history={history} owner={"9sako6"} repo={"continuity"} />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Continuity/i })
  ).toBeDefined();
});

it("should show placeholder", () => {
  const { getByText } = render(
    <Home history={[]} owner={"9sako6"} repo={"continuity"} />
  );
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Continuity/i })
  ).toBeDefined();
  expect(getByText("Heatmap is deployed automatically.")).toBeInTheDocument();
});
