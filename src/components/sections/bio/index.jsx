//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//assets
import Avatar from "@assets/avatar/AvatarAndIcons.svg";
//data
import data from "@public/data/data.json";
//lib
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function BioSection({ ...props }) {
  const { entry, inView, ref } = useInView({ threshold: 0.3 });
  useEffect(() => {
    entry?.target.classList.toggle("opacity-back", entry.isIntersecting);
  }, [inView]);
  return (
    <div
      className="bio-section py-[14.1rem] flex items-center justify-center flex-wrap transition-opacity ease-in delay-500 opacity-0"
      ref={ref}
      id="bio"
    >
      <ImageWrapper alt="avatar" icon={Avatar} tailwindStyles="max-w-[46rem]" />
      <div className="bio-section__content-container mb-[2.4rem]">
        <Badge icon={"🤔"} text="About Me" tailwindStyles="mb-[2.4rem]" />
        <div className="bio-section__content-container-content">
          <p className="text-[4.2rem] font-extrabold mb-[2.4rem]">
            {data?.about?.data?.title}
          </p>
          <p className="text-customGrey text-[1.8rem] leading-[2.5rem]">
            👋{data?.about?.data?.details?.personal}
            <br />
            👨‍💻 {data?.about?.data?.details?.work}
            <br />
            🎓 {data?.about?.data?.details?.study} <br />
            💡{data?.about?.data?.details?.interested}
            <br />
            🚀 {data?.about?.data?.details?.funFact}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BioSection;
