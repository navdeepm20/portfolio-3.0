//components
import ImageWrapper from "../../image_wrapper";
//assets
import CodeIcon from "@assets/icons/designation/CodeIcon.svg";
//react
import React from "react";

const DesignationCard = React.forwardRef(({ data, ...props }, ref) => {
  return (
    <div
      className="pb-[3rem] pt-[4.2rem] px-[2rem] border rounded-[1.6rem] border-primary-text flex justify-center flex-col items-center w-[24.6rem] translate-x-[-100%] cursor-pointer opacity-0 transition-all duration-500"
      ref={ref}
    >
      <ImageWrapper noPointer alt="code icon" icon={CodeIcon} />
      <p className="text-[1.6rem] leading-[1.9rem] text-white text-center">
        {data?.experience}
      </p>
      <p className="text-bold text-[3.2rem] leading-[3.8rem] text-center">
        {data?.title}
      </p>
    </div>
  );
});

DesignationCard.displayName = "DesignationCard";
export default DesignationCard;
