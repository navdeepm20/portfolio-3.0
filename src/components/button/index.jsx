//components
import ImageWrapper from "@/components/image_wrapper";

function index({
  variant,
  title,
  startIcon,
  endIcon,
  iconStyles,
  buttonStyles,
  buttonTailwindStyles,
  ...props
}) {
  return (
    <>
      {variant === "contained" ? (
        <button
          className={`button--contained text-[1.6rem] leading-[1.9rem] font-semibold rounded-[1.6rem]  text-primary-bg-light px-[1.5rem] py-[1.4rem] bg-primary-bg-extraLight hover:bg-primary-bg-light hover:text-customGrey inline-flex items-center ${buttonTailwindStyles}`}
          style={{ ...buttonStyles }}
        >
          {startIcon && (
            <ImageWrapper
              icon={startIcon}
              styles={{ mr: "0.3rem", ...iconStyles }}
              noPointer={true}
            />
          )}
          {title}
          {endIcon && (
            <ImageWrapper
              icon={endIcon}
              noPointer={true}
              styles={{ ml: "0.3rem", ...iconStyles }}
            />
          )}
        </button>
      ) : variant === "text" ? (
        <button
          className={`button--text text-[1.6rem] leading-[1.9rem] font-semibold rounded-[1.6rem]  text-primary-bg-light px-[1.5rem] py-[1.4rem] hover:bg-primary-bg-extraLight inline-flex items-center ${buttonTailwindStyles}`}
          style={{ ...buttonStyles }}
        >
          {startIcon && (
            <ImageWrapper
              icon={startIcon}
              noPointer={true}
              styles={{ mr: "0.3rem", ...iconStyles }}
            />
          )}
          {title}
          {endIcon && (
            <ImageWrapper
              icon={endIcon}
              noPointer={true}
              styles={{ ml: "0.3rem", ...iconStyles }}
            />
          )}
        </button>
      ) : (
        <button
          className={`button--outlined text-[1.6rem] leading-[1.9rem] font-semibold rounded-[1.6rem] border text-primary-bg-light px-[1.5rem] py-[1.4rem] border-primary-bg-light hover:bg-primary-bg-extraLight inline-flex items-center ${buttonTailwindStyles}`}
          style={{ ...buttonStyles }}
        >
          {startIcon && (
            <ImageWrapper
              icon={startIcon}
              noPointer={true}
              styles={{ mr: "0.3rem", ...iconStyles }}
            />
          )}
          {title}
          {endIcon && (
            <ImageWrapper
              icon={endIcon}
              noPointer={true}
              styles={{ ml: "0.3rem", ...iconStyles }}
            />
          )}
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
