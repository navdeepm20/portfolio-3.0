function index({ designations, ...props }) {
  return (
    <div
      className="rounded-[1.6rem] flex py-[2.7rem] px-[2rem] bg-primary-bg-extraLight w-max
	"
    >
      {designations?.map((position, index) => {
        return (
          <div className="[:not(:last-child)]:p-[11.979ren]" key={index}>
            <p className="text-center text-primary-text text-[1.6rem] leading-[1.9rem] font-normal">
              {position?.title}
            </p>
            <span className="text-center text-primary-text text-[3.2rem] font-bold">
              {position?.description}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default index;

index.defaultProps = {
  designations: [
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
