import React from "react";

const DesignationsCard = React.forwardRef(({ data, ...props }, ref) => {
  return (
    <div
      className="rounded-[1.6rem] flex justify-between py-[2.7rem] px-[2rem] bg-primary-bg-extraLight w-full duration-500 transition-all translate-y-[30%] opacity-0
	"
      ref={ref}
    >
      {data?.data?.map((position, index) => {
        return (
          <div className=" " key={index}>
            <p className="text-center text-primary-text text-[1.6rem] leading-[1.9rem] font-normal">
              {position?.title}
            </p>
            <span className="text-center text-primary-text text-[3.2rem] font-bold ">
              {position?.description}
            </span>
          </div>
        );
      })}
    </div>
  );
});

DesignationsCard.displayName = "DesignationsCard";
export default DesignationsCard;

DesignationsCard.defaultProps = {
  data: [
    {
      title: "Developer",
      description: "FullStack",
    },
    {
      title: "Freelance",
      description: "FullStack",
    },
    {
      title: "Lorem",
      description: "FullStack",
    },
  ],
};
