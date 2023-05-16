//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";

//asssets
import VideoImage from "@assets/video/VideoImg.svg";
function index({ ...props }) {
  return (
    <div className="video-card-container px-[2.9rem] py-[3rem] border border-primary-bg-light rounded-[1.6rem] max-w-[50rem] mb-[14rem]">
      <ImageWrapper icon={VideoImage} />
      <div className="video-detail flex items-center justify-between mt-[2.39rem]">
        <div className="video-info ">
          <p className="mb-[1.078rem] font-bold text-[2rem] leading-[2.3rem]">
            Move.it
          </p>
          <p className="text-[1.8rem] leading-[2.1rem]">Move.it</p>
        </div>
        <div className="video-category">
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
