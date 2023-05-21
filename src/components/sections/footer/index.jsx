//internal components
import ImageWrapper from "@components/image_wrapper";
//assets
import GithubLogo from "@assets/social_media-icons/github.svg";
import LinkedInLogo from "@assets/social_media-icons/linkedin.svg";

function index() {
  return (
    <div className="footer-section px-[14.6rem] py-[3.2rem] bg-primary-bg-extraLight relative w-[100vw] left-[50%] translate-x-[-50%]  ">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-y-[1.1rem]">
        <span className="order-1 md:order-none">
          &copy; Navdeep Mishra - 2023
        </span>
        <div className="footer-section__image-wrapper md:ml-auto">
          <div className="footer-section__social-icons flex gap-[1.5rem] justify-self-center ">
            <ImageWrapper icon={GithubLogo} alt="github_logo" />
            <ImageWrapper icon={LinkedInLogo} alt="linkedIn_logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
