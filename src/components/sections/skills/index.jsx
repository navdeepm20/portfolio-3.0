//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//assets
import GithubIcon from "@assets/skills/github.svg";
import JsIcon from "@assets/skills/javascript.svg";
import NextJsIcon from "@assets/skills/nextjs.svg";
import TSIcon from "@assets/skills/typescript.svg";
import HtmlIcon from "@assets/skills/html5.svg";
import CssIcon from "@assets/skills/css3.svg";
import ReactIcon from "@assets/skills/react.svg";
import GitIcon from "@assets/skills/git.svg";

function index({ ...props }) {
  const CustomBadgeText = ({ ...props }) => (
    <span>Skills &middot; Experiences</span>
  );
  return (
    <div className="skills-section flex flex-col mb-[14rem]">
      <div className="flex flex-col items-center">
        <Badge
          icon="👨‍💻"
          text={<CustomBadgeText />}
          tailwindStyles="mb-[2.4rem]"
        />
        <p className="text-[4.8rem] font-extrabold leading-[5.6rem] mb-[10rem]">
          Technology & Skills
        </p>
        <div className="skills-section__skills-container ">
          <div className="skills-section__primary-skills mb-[6rem]">
            <p className="text-[2.4rem] leading-[2.8rem] text-customGrey mb-[4rem] text-center">
              Technologies I use everyday
            </p>
            <div className="skills-section__primary-skills-image-container flex flex-wrap gap-y-[2.8rem] gap-x-[3.2rem] justify-center">
              <ImageWrapper icon={HtmlIcon} />
              <ImageWrapper icon={CssIcon} />
              <ImageWrapper icon={JsIcon} />
              <ImageWrapper icon={TSIcon} />
              <ImageWrapper icon={ReactIcon} />
              <ImageWrapper icon={NextJsIcon} />
              <ImageWrapper icon={GitIcon} />
              <ImageWrapper icon={GithubIcon} />
            </div>
          </div>
          <div className="skills-section__secondary-skills">
            <p className="text-[2.4rem] leading-[2.8rem] text-customGrey mb-[4rem] text-center">
              Technologies I do not use everyday
            </p>
            <div className="skills-section__secondary-skills-image-container flex flex-wrap gap-y-[2.8rem] gap-x-[3.2rem] justify-center">
              <ImageWrapper icon={HtmlIcon} />
              <ImageWrapper icon={CssIcon} />
              <ImageWrapper icon={JsIcon} />
              <ImageWrapper icon={TSIcon} />
              <ImageWrapper icon={ReactIcon} />
              <ImageWrapper icon={NextJsIcon} />
              <ImageWrapper icon={GitIcon} />
              <ImageWrapper icon={GithubIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
