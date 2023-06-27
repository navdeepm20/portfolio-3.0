//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//assets
import GithubIcon from "@assets/skills/github.svg";
import GitIcon from "@assets/skills/git.svg";
import JsIcon from "@assets/skills/javascript.svg";
import NextJsIcon from "@assets/skills/nextjs.svg";
import TSIcon from "@assets/skills/typescript.svg";
import HtmlIcon from "@assets/skills/html5.svg";
import CssIcon from "@assets/skills/css3.svg";
import ReactIcon from "@assets/skills/react.svg";
import NextjsIcon from "@assets/skills/next.svg";
import DjanogIcon from "@assets/skills/django.svg";
import ElectronIcon from "@assets/skills/electron.svg";
import ReduxIcon from "@assets/skills/redux.svg";
import MuiIcon from "@assets/skills/mui.svg";
import TailwindIcon from "@assets/skills/tailwind.svg";
import PythonIcon from "@assets/skills/python.svg";
import DbIcon from "@assets/skills/databases.svg";
import AppwriteIcon from "@assets/skills/appwrite.svg";
import SassIcon from "@assets/skills/sass.svg";

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
              <ImageWrapper icon={NextJsIcon} />
              <ImageWrapper icon={ReactIcon} />
              <ImageWrapper icon={ReduxIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={ElectronIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={MuiIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={TailwindIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={GitIcon} />
              <ImageWrapper icon={GithubIcon} />
            </div>
          </div>
          <div className="skills-section__secondary-skills">
            <p className="text-[2.4rem] leading-[2.8rem] text-customGrey mb-[4rem] text-center">
              Technologies I do not use everyday
            </p>
            <div className="skills-section__secondary-skills-image-container flex flex-wrap gap-y-[2.8rem] gap-x-[3.2rem] justify-center">
              <ImageWrapper icon={SassIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={PythonIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={DjanogIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={DbIcon} tailwindStyles="w-[6.4rem] " />
              <ImageWrapper icon={AppwriteIcon} tailwindStyles="w-[6.4rem] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
