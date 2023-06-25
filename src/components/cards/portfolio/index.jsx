//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//assets
import ProjectImage from "@assets/portfolio/project-1.svg";
function index({ title, description, tags, thumbnailUrl, ...props }) {
  return (
    <div className="p-[3rem] rounded-[1.6rem] border border-primary-bg-light flex flex-col items-center max-w-[36rem]">
      <div className="mb-[1.6rem] w-full">
        <p className="mb-[0.8rem] font-bold text-[2rem] leading-[2.3rem] text-left">
          {title}
        </p>
        <p className="text-[1.4rem] leading-[1.6rem] text-customGrey text-left">
          {description}
        </p>
      </div>
      <div className="w-full">
        <div className="flex w-full mb-[2.2rem] flex-wrap gap-y-2">
          {tags?.length &&
            tags?.map((tag, index) => (
              <Badge
                key={tag}
                tailwindStyles="[&>span]:text-[1.6rem] mr-[.8rem] rounded-[.8rem]"
                text={tag}
              />
            ))}
        </div>
        <ImageWrapper icon={ProjectImage} />
      </div>
    </div>
  );
}

export default index;
