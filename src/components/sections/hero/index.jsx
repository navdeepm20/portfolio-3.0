//next js
import Image from "next/image";
import Link from "next/link";
//assets
import GithubLogo from "@assets/social_media-icons/github.svg";
import LinkedInLogo from "@assets/social_media-icons/linkedin.svg";
import DevLogo from "@assets/social_media-icons/dev.svg";
import Avatar from "@assets/avatar/AvatarAndIcons.svg";
import DownloadIcon from "@assets/icons/ArrowLineDown.svg";
//components
import Btn from "../../button";
import Badge from "../../badges";
//data
import data from "@public/data/data.json";

function index({ ...props }) {
  return (
    <div
      className="hero-section grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center pb-[19.1rem] gap-y-[2rem]"
      id="hero"
    >
      <div className="hero-section__personal-info order-2 md:order-1">
        <Badge icon={"👋"} text="Greetings!" tailwindStyles="mb-[2.4rem]" />
        <p className="text-white text-[5.2rem] leading-[6.1rem] font-extrabold mb-[1.6rem] animate-character">
          {data?.personal?.data?.name}
        </p>
        <p className="text-[2rem] leading-[2.3rem] text-customGrey mb-[2.476rem] ">
          {data?.personal?.data?.designation?.join(" · ")}
        </p>
        <div className="hero-section__personal-info-social-icons  gap-[1.5rem] hidden sm:flex ">
          <Link href={`${data?.personal?.data?.githubLink}`}>
            <Image
              src={GithubLogo}
              alt="github_logo"
              className="hover:drop-shadow-glow transition-all"
            />
          </Link>
          <Link href={`${data?.personal?.data?.linkedInLink}`}>
            <Image
              src={LinkedInLogo}
              alt="linkedIn_logo"
              className="hover:drop-shadow-glow transition-all"
            />
          </Link>
          <Link href={`${data?.personal?.data?.devLink}`}>
            <Image
              src={DevLogo}
              alt="linkedIn_logo"
              width={32}
              className="hover:drop-shadow-glow transition-all"
            />
          </Link>
        </div>
      </div>
      <div className="hero-section__avatar order-1 md:order-2 ">
        <Image src={Avatar} alt="avatar" />
      </div>
      <div className="hero-section__download-cv md:justify-self-start lg:justify-self-center md:col-span-2 lg:col-auto order-3 ">
        <Btn title="Download CV" endIcon={DownloadIcon} />
      </div>
    </div>
  );
}

export default index;
