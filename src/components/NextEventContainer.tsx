import React from "react";
import Style from "./NextEventContainer.module.css"; //todo change to tailwind

interface NextEventContainerProps {
  eventDate: Date | null;
}

const NextEventContainer: React.FC<NextEventContainerProps> = ({ eventDate }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = ["st", "nd", "rd", "th"];

  const GetDayEnding = () => {
    if (eventDate) {
      const eventDay = eventDate.getDate();
      const index = eventDay < 10 ? 0 : 1;

      if (eventDay < 10 || eventDay > 13) {
        const dayString = eventDay.toString();
        if (dayString[index] === "1") {
          return day[0];
        } else if (dayString[index] === "2") {
          return day[1];
        } else if (dayString[index] === "3") {
          return day[2];
        } else {
          return day[3];
        }
      } else {
        return day[3];
      }
    }
    return day[3];
  };

 return (
    <React.Fragment>
      <div className="text-center underline xl:text-7xl sm:text-3xl xs:text-2xl">
        Next Meeting
        <br />
        {eventDate != null ? (
          <div>
            {months[eventDate.getMonth()]}
            &nbsp;
            {eventDate.getDate() + GetDayEnding()}
            <br />
            {eventDate.getFullYear()}
            <br />
            7:30pm to 9pm
          </div>
        ) : (
          <div>TO BE ANNOUNCED</div>
        )}
      </div>

      {eventDate != null && (
        <div className="xl:text-5xl sm:text-3xl xs:text-2xl">
          <br />
          <h4>Game Worlds Facility</h4>
          <br />
          <h4>7950 Anderson Square, Unit 109, Austin, TX 78757</h4>
        </div>
      )}
      <br />
    </React.Fragment>
  );
};

export default NextEventContainer;