import React, { forwardRef } from "react";
//libs
import dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import * as duration from "dayjs/plugin/duration";
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.extend(duration);

const CarrierCard = forwardRef(
  (
    {
      title,
      description,
      startedOn,
      endedOn,
      isContinue,
      hideTillToday,
      ...props
    },
    ref
  ) => {
    const getCalculatedDuration = () => {
      const startedOnDate = dayjs(startedOn);
      const endedOnDate = endedOn ? dayjs(endedOn) : dayjs();

      const years = endedOnDate.diff(startedOnDate, "year");
      const months = endedOnDate.diff(
        startedOnDate.add(years, "year"),
        "month"
      );

      let formattedDuration = "";
      if (years)
        years > 1
          ? (formattedDuration += `${years} yrs `)
          : (formattedDuration += `${years} yr `);
      if (months)
        months > 1
          ? (formattedDuration += `${months} months`)
          : (formattedDuration += `${months} month`);

      return formattedDuration;
    };

    return (
      <div
        className="carrier-card rounded-[1.6rem] border border-primary-bg-light p-[3rem] max-w-[58rem] translate-y-[30%] opacity-0 transition-all duration-500 hover:shadow-[0_0_10px_2px] hover:shadow-[rgba(51,48,51,1)] "
        ref={ref}
      >
        <div className="carrier-card__info-container mb-[1.62rem]">
          <p className="font-bold text-[2rem] leading-[2.3rem] mb-[.83rem]">
            {title}
          </p>
          <p className="text-[1.6rem] leading-[1.9rem]">{description}</p>
        </div>
        <div className="carrier-card__timeline-container flex">
          {!hideTillToday && (
            <span className="mr-auto font-bold text-[1.8rem] leading-[2.1rem] text-primary-bg-light pr-2">
              {/* {dayjs(endedOn ? new Date(endedOn) : new Date()).from(
                startedOn,
                true
              )} */}
              {getCalculatedDuration()}
            </span>
          )}
          <span className="ml-auto text-[1.8rem] leading-[2.1rem] text-primary-bg-light">
            {dayjs(startedOn).format("MMM-YYYY")} &middot;{" "}
            {endedOn ? dayjs(endedOn).format("MMM-YYYY") : "Present"}
          </span>
        </div>
      </div>
    );
  }
);

CarrierCard.displayName = "CarrierCard";
export default CarrierCard;
