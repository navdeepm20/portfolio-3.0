//internal components
import VideoCard from "@components/cards/video";

function index({ ...props }) {
  return (
    <div className="video-container">
      <p className="video-container__title text-[4.8rem] font-extrabold leading-[5.6rem] mb-[.89rem]">
        Latest Videos
      </p>
      <p className="text-customGrey mb-[5.37rem]">
        It's always good to know a little bit about editing
      </p>
      <div className="video-container__video-card-container flex gap-x-[5.4rem]">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default index;
