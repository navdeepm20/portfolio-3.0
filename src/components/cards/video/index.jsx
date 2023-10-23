//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";

//assets
import VideoImage from "@assets/video/VideoImg.svg";

function index({ ...props }) {
  return (
    <div className="video-card-container px-[2.9rem] py-[3rem] border border-primary-bg-light rounded-[1.6rem] max-w-[50rem] hover:shadow-[0_0_10px_2px] hover:shadow-[rgba(51,48,51,1)]  transition-shadow">
      <ImageWrapper icon={VideoImage} alt="video_thumbnail" />
      <div className="video-detail flex items-center justify-between mt-[2.39rem] gap-x-[3rem]">
        <div className="video-info ">
          <p className="mb-[1.078rem] font-bold text-[2rem] leading-[2.3rem]">
            Move.it
          </p>
          <p className="text-[1.8rem] leading-[2.1rem]">Move.it</p>
        </div>
        <div className="video-category flex flex-col gap-y-4 ">
          <Badge
            text="React"
            tailwindStyles="mr-[.8rem]"
            styles={{ borderRadius: ".8rem" }}
          />
          <Badge text="React" styles={{ borderRadius: ".8rem" }} />
        </div>
      </div>
    </div>
  );
}

export default index;
