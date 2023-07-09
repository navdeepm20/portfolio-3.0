//internal components
import Badge from "@components/badges";
import Btn from "@components/button";
import ImageWrapper from "@components/image_wrapper";
//assets
import WhatsappIcon from "@assets/contact/WhatsappLogo.svg";
import MailIcon from "@assets/contact/PaperPlaneTilt.svg";
import CopyMailIcon from "@assets/contact/CopySimple.svg";
import ArrowUpIcon from "@assets/contact/ArrowUp.svg";

function index({ ...props }) {
  const handleCopy = (e) => {
    navigator.clipboard.writeText("navdeepmishra82734@gmail.com");
  };
  const handleBackToTop = (e) => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="contact-section mb-[20.7rem]" id="contact">
      <div className="contact-section-container mx-auto flex flex-col justify-center items-center flex-wrap">
        <Badge icon={"📬"} text="Contact Us" tailwindStyles="mb-[2.4rem]" />
        <p className="text-[4.8rem] font-extrabold mb-[6.4rem]">
          Let &apos; s Talk
        </p>
        <div className="contact-section-info-container  flex items-center mb-[6.4rem] gap-x-[5.5rem] flex-wrap gap-y-12 justify-center md:justify-normal">
          <Btn
            title="Let's Talk"
            startIcon={WhatsappIcon}
            buttonTailwindStyles="py-[1.1rem] px-[1.5rem]"
            variant="outlined"
          />
          <div className="contact-section-mail-container flex items-center justify-center flex-col">
            <ImageWrapper
              icon={MailIcon}
              alt="mail_icon"
              tailwindStyles="mb-[.4rem]"
              noPointer
            />
            <p className="text-[2rem] leading-[2.3rem] text-primary-text mb-[.4rem] ">
              E-mail:
            </p>
            <p className="text-[2rem] leading-[2.3rem] text-customGrey mb-[1.6rem]">
              navdeepmishra82734@gmail.com
            </p>
            <ImageWrapper
              icon={CopyMailIcon}
              alt="copy_mail_icon"
              onClick={handleCopy}
            />
          </div>
        </div>
        <div
          className="back-to-top-container flex items-center justify-center cursor-pointer"
          onClick={handleBackToTop}
        >
          <p className="font-semiBold text-[2rem] leading-[2.3rem] text-primary-bg-light  mr-[.8rem]">
            Back to Top
          </p>
          <ImageWrapper icon={ArrowUpIcon} alt="arrow_up_icon" noPointer />
        </div>
      </div>
    </div>
  );
}

export default index;
