import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import { getDates } from "../lib/get-dates";

const today = new Date();
export const HeatMap = () => {
  // Need this for the react-tooltip
  const [isMounted, setIsMounted] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const randomValues = getDates(
    new Date("2022-01-01"),
    new Date("2022-12-31")
  ).map((date) => {
    let count = 0;
    if (date.getDate() === 1) count = 2;
    if (date.getDate() === 10) count = 3;
    if (date.getDate() === 20) count = 1;

    return { date, count };
  });

  return (
    <div className="w-4/5">
      <CalendarHeatmap
        startDate={new Date("2021-12-31")}
        endDate={new Date("2022-12-31")}
        values={randomValues}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count} cursor-pointer`;
        }}
        tooltipDataAttrs={(value: { date: Date; count: number }) => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
        showWeekdayLabels={true}
        onClick={(value) =>
          alert(`Clicked on value with count: ${value.count}`)
        }
        onMouseOver={() => setIsShowTooltip(true)}
        onMouseLeave={() => {
          setIsShowTooltip(false);
          setTimeout(() => setIsShowTooltip(true));
        }}
      />
      {isMounted && isShowTooltip && <ReactTooltip />}
    </div>
  );
};
