//components
import ImageWrapper from "../../image_wrapper";
//assets
import CodeIcon from "@assets/icons/designation/CodeIcon.svg";
function index({ ...props }) {
  return (
    <div className="pb-[3rem] pt-[4.2rem] px-[2rem] border rounded-[1.6rem] border-primary-text flex justify-center flex-col items-center [&:not(:last-child)]:mr-[8rem] max-w-[24.6rem]">
      <ImageWrapper noPointer alt="code icon" icon={CodeIcon} />
      <p className="text-[1.6rem] leading-[1.9rem] text-white text-center">
        Lorem Ispsum
      </p>
      <p className="text-bold text-[3.2rem] leading-[3.8rem] text-center">
        Programmer
      </p>
    </div>
  );
}

export default index;
