import React from "react";
import NextEventContainer from "./NextEventContainer";

const NextEvent: React.FC = () => {
  const currentDate = new Date();
  const nextDate = new Date();

    enum Months {
    January = 0,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
    }

  //year, month, day
  nextDate.setFullYear(2025, Months.July, 17);

  return (
    <div className="flex justify-center items-center font-custom my-10">
      <div className="inline-block text-current border-4 border-current p-12 w-3/5 xl:w-2/5">
        {currentDate <= nextDate ? (
          <NextEventContainer eventDate={nextDate} />
        ) : (
          <NextEventContainer eventDate={null} />
        )}
      </div>
    </div>
  );
};

export default NextEvent;