import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

export type PixelValue = { date: Date; count: number };

type Props = {
  year: string;
  values: PixelValue[];
};

const today = new Date();
export const HeatMap = ({ year, values }: Props) => {
  // Need this for the react-tooltip.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const startDate = new Date(`${Number(year) - 1}-12-31`);
  const endDate = new Date(`${year}-12-31`);

  return (
    <div>
      <h3 className="text-xs md:text-sm text-right text-zinc-400 font-mono">
        {year}
      </h3>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
        classForValue={(value: PixelValue) => {
          const count = value.count >= 4 ? 4 : value.count;

          return `cursor-pointer color-gitlab-${count}`;
        }}
        tooltipDataAttrs={(value: PixelValue) => {
          const { date, count } = value;
          const word = count === 1 ? "achievement" : "achievements";
          const today = new Date();
          const dateString = date.toISOString().slice(0, 10);
          const text =
            value.date > today
              ? dateString
              : `${dateString} has ${count} ${word}`;

          return {
            "data-tip": text,
          };
        }}
        showWeekdayLabels={true}
      />
      {isMounted && <ReactTooltip />}
    </div>
  );
};
