//next js
import Image from "next/image";

//assets
import GithubLogo from "#/social_media-icons/github.svg";
import LinkedInLogo from "#/social_media-icons/linkedin.svg";
import Avatar from "#/avatar/AvatarAndIcons.svg";
import DownloadIcon from "#/icons/ArrowLineDown.svg";
//components
import Btn from "../../button";
import Badge from "../../badges";

function index() {
  return (
    <div className="hero-section grid grid-cols-3 items-center justify-center">
      <div className="hero-section__personal-info">
        <Badge icon={"👋"} text="Greetings!" tailwindStyles="mb-[2.4rem]" />
        <p className="text-white text-[5.2rem] leading-[6.1rem] font-extrabold mb-[1.6rem]">
          Navdeep <br />
          Mishra
        </p>
        <p className="text-[2rem] leading-[2.3rem] text-customGrey mb-[2.476rem]">
          Full Stack Developer | Tech Enthusiat
        </p>
        <div className="hero-section__personal-info-social-icons flex gap-[1.5rem] ">
          <Image src={GithubLogo} alt="github_logo" />
          <Image src={LinkedInLogo} alt="llinkedIn_logo" />
        </div>
      </div>
      <div className="hero-section__avatar ">
        <Image src={Avatar} alt="avatar" />
      </div>
      <div className="hero-section__download-cv justify-self-center">
        <Btn title="Download CV" endIcon={DownloadIcon} />
      </div>
    </div>
  );
}

export default index;
