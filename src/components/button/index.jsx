//components
import Icon from "@/components/image_wrapper";

function index({ variant, title, startIcon, endIcon, ...props }) {
  return (
    <>
      {variant === "contained" ? (
        <button className="button--contained text-[1.6rem] leading-[1.9rem] font-semibold rounded-[1.6rem]  text-primary-bg-light px-[1.5rem] py-[1.4rem] bg-primary-bg-extraLight hover:bg-primary-bg-light hover:text-customGrey inline-flex">
          {startIcon && <Icon icon={startIcon} />} {title}
          {endIcon && (
            <Icon icon={endIcon} styles={{ "&:hover": { display: "none" } }} />
          )}
        </button>
      ) : variant === "text" ? (
        <button className="button--text text-[1.6rem] leading-[1.9rem] font-semibold rounded-[1.6rem]  text-primary-bg-light px-[1.5rem] py-[1.4rem] hover:bg-primary-bg-extraLight ">
          {startIcon && <Icon icon={startIcon} />} {title}
          {endIcon && <Icon icon={endIcon} />}
        </button>
      ) : (
        <button className="button--outlined text-[1.6rem] leading-[1.9rem] font-semibold rounded-[1.6rem] border text-primary-bg-light px-[1.5rem] py-[1.4rem] border-primary-bg-light hover:bg-primary-bg-extraLight">
          {startIcon && <Icon icon={startIcon} />} {title}
          {endIcon && <Icon icon={endIcon} />}
        </button>
      )}
    </>
  );
}

export default index;

index.defaultProps = {
  title: "Button",
  variant: "contained",
  startIcon: null,
  endIcon: null,
};
