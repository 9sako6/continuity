import { Octokit } from "@octokit/rest";
import type { Issue } from "../types/github";

type GetIssuesParams = {
  owner: string;
  repo: string;
};

export async function getIssues({ owner, repo }: GetIssuesParams) {
  let issues: Issue[] = [];
  const octokit = new Octokit();

  for (let currentPage = 1; currentPage < 20; currentPage++) {
    const { data } = await octokit.request(`GET /repos/{owner}/{repo}/issues`, {
      owner,
      repo,
      per_page: 100,
      page: currentPage,
      labels: "continuity",
    });
    issues = [...issues, ...data];
    if (data.length < 100) break;
  }

  return issues;
}
