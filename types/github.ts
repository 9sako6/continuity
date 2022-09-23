import type { Endpoints } from "@octokit/types";

export type Issue =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"][number];

export type Label =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"]["data"][number];
