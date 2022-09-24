import { formattedDate } from "../lib/formatted-date";
import { getDates } from "../lib/get-dates";
import type { History } from "../lib/get-history";
import { HeatMap, PixelValue } from "./heat-map";

type Props = {
  history: History;
};

export const HistoryCalendar = ({ history }: Props) => {
  const placeholder = (
    <div className="rounded p-12 bg-slate-100">
      <ol className="list-decimal">
        <li className="ml-6">
          A new issue is opened at 00:00 (UTC+9) everyday. This issue is a list
          of things to do that day.
        </li>
        <li className="ml-6">Check off the checklist.</li>
        <li className="ml-6">Heatmap is deployed automatically.</li>
      </ol>
    </div>
  );
  return (
    <div className="md:max-w-5xl">
      {history.length === 0 && placeholder}
      {history.map(({ title, logs }) => {
        return (
          <div key={title}>
            <h2 className="text-sm md:text-lg text-zinc-400">{title}</h2>
            <div>
              {logs.map(({ year, dates }) => {
                const datesInYear = getDates(
                  new Date(`${year}-01-01`),
                  new Date(`${year}-12-31`)
                );
                const values: PixelValue[] = datesInYear.map((date) => {
                  let count = 0;
                  if (dates[formattedDate(date)])
                    count += dates[formattedDate(date)];
                  return { date, count };
                });

                return (
                  <div key={`${title}${year}`} className="block">
                    <HeatMap year={year} values={values} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
