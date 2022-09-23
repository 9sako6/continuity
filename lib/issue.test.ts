import { rest } from "msw";
import { setupServer } from "msw/node";
import { mockIssue } from "../mock";
import { mockLabel } from "../mock/github/label";
import { getIssues } from "./issue";
import { range } from "./range";

const server = setupServer();

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it("should get issues lager than 100 (`per_page` limit)", async () => {
  server.use(
    rest.get(
      "https://api.github.com/repos/9sako6/continuity/issues",
      (req, res, ctx) => {
        const page = Number(req.url.searchParams.get("page") || "1");
        const issuesStub = page === 1 ? range(0, 100) : range(100, 190);

        return res(ctx.json(issuesStub));
      }
    )
  );

  const issues = await getIssues({ owner: "9sako6", repo: "continuity" });
  expect(issues.length).toBe(190);
});

it("should get only issues that have a continuity label", async () => {
  server.use(
    rest.get(
      "https://api.github.com/repos/9sako6/continuity/issues",
      (req, res, ctx) => {
        const labelsQuery = req.url.searchParams.get("labels");

        if (labelsQuery !== "continuity")
          throw new Error("labels query is necessary.");

        const issues = [
          mockIssue({ id: 67890, labels: [mockLabel({ name: "continuity" })] }),
        ];

        return res(ctx.json(issues));
      }
    )
  );

  const issues = await getIssues({ owner: "9sako6", repo: "continuity" });
  expect(issues.length).toBe(1);
  expect(issues[0].id).toBe(67890);
});
