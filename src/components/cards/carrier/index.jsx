import React, { forwardRef } from "react";
//libs
import dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

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
    return (
      <div
        className="carrier-card rounded-[1.6rem] border border-primary-bg-light p-[3rem] max-w-[58rem] translate-y-[30%] opacity-0 transition-all delay-500"
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
            <span className="mr-auto font-bold text-[1.8rem] leading-[2.1rem] text-primary-bg-light">
              {dayjs(new Date()).from(startedOn, true)}
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
