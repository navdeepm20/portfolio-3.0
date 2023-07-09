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
import DjanogIcon from "@assets/skills/django.svg";
import ElectronIcon from "@assets/skills/electron.svg";
import ReduxIcon from "@assets/skills/redux.svg";
import MuiIcon from "@assets/skills/mui.svg";
import TailwindIcon from "@assets/skills/tailwind.svg";
import PythonIcon from "@assets/skills/python.svg";
import DbIcon from "@assets/skills/databases.svg";
import AppwriteIcon from "@assets/skills/appwrite.svg";
import SassIcon from "@assets/skills/sass.svg";
import FigmaIcon from "@assets/skills/figma.svg";

function index({ ...props }) {
  const CustomBadgeText = ({ ...props }) => (
    <span>Skills &middot; Experiences</span>
  );
  return (
    <div className="skills-section flex flex-col mb-[14rem]" id="skills">
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
              <ImageWrapper
                icon={HtmlIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={CssIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={JsIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={TSIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={FigmaIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={NextJsIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={ReactIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={ReduxIcon}
                tailwindStyles="hover:animate-pulse w-[6.4rem]"
              />
              <ImageWrapper
                icon={ElectronIcon}
                tailwindStyles="hover:animate-pulse w-[6.4rem] "
              />
              <ImageWrapper
                icon={MuiIcon}
                tailwindStyles="hover:animate-pulse w-[6.4rem] "
              />
              <ImageWrapper
                icon={TailwindIcon}
                tailwindStyles="hover:animate-pulse w-[6.4rem] "
              />
              <ImageWrapper
                icon={GitIcon}
                tailwindStyles="hover:animate-pulse"
              />
              <ImageWrapper
                icon={GithubIcon}
                tailwindStyles="hover:animate-pulse"
              />
            </div>
          </div>
          <div className="skills-section__secondary-skills">
            <p className="text-[2.4rem] leading-[2.8rem] text-customGrey mb-[4rem] text-center">
              Technologies I do not use everyday
            </p>
            <div className="skills-section__secondary-skills-image-container flex flex-wrap gap-y-[2.8rem] gap-x-[3.2rem] justify-center">
              <ImageWrapper
                icon={SassIcon}
                tailwindStyles="w-[6.4rem] hover:animate-pulse"
              />
              <ImageWrapper
                icon={PythonIcon}
                tailwindStyles="w-[6.4rem] hover:animate-pulse"
              />
              <ImageWrapper
                icon={DjanogIcon}
                tailwindStyles="w-[6.4rem] hover:animate-pulse"
              />
              <ImageWrapper
                icon={DbIcon}
                tailwindStyles="w-[6.4rem] hover:animate-pulse"
              />
              <ImageWrapper
                icon={AppwriteIcon}
                tailwindStyles="w-[6.4rem] hover:animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
