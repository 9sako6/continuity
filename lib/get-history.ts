import { Issue } from "../types/github";
import { formattedDate } from "./formatted-date";
import { parseIssueBody } from "./parse-issue-body";

type Count = number;

export type History = {
  title: string;
  logs: {
    year: string;
    dates: {
      [date: string]: Count;
    };
  }[];
}[];

export const getHistory = (issues: Issue[]) => {
  const categolizedHistory: {
    [taskTitle: string]: {
      [year: string]: { date: Date; count: number }[];
    };
  } = {};

  issues.map((issue) => {
    const date = new Date(issue.created_at);

    parseIssueBody(issue.body || "").forEach((taskCount) => {
      const { title, count } = taskCount;
      const year = date.getFullYear();

      categolizedHistory[title] ||= {};
      categolizedHistory[title][year] ||= [];

      categolizedHistory[title][year].push({
        date,
        count,
      });
    });
  });

  const history: History = [];

  for (const title in categolizedHistory) {
    const eachHistory: History[number] = {
      title,
      logs: [],
    };
    // Set logs.
    for (const year in categolizedHistory[title]) {
      const log: History[number]["logs"][number] = {
        year,
        dates: {},
      };

      categolizedHistory[title][year].forEach(({ date, count }) => {
        const key = formattedDate(date);
        log.dates[key] ||= 0;
        log.dates[key] += count;
      });

      eachHistory.logs.push(log);
    }
    // Set to history.
    history.push(eachHistory);
  }

  return history;
};
