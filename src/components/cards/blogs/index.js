//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
import Link from "next/link";

function BlogCard({ articleData, ...props }) {
  return (
    <div className="video-card-container px-[2.9rem] py-[3rem] border border-primary-bg-light rounded-[1.6rem] min-w-[30rem] max-w-[40rem] ">
      <ImageWrapper
        icon={articleData?.social_image}
        alt="blog_thumbnail"
        width={200}
        height={100}
      />
      <div className="blog-detail flex items-center justify-between mt-[2.39rem] gap-x-[3rem]">
        <div className="blog-info ">
          <p
            className="mb-[1.078rem] font-bold text-[1.8rem] leading-[2.3rem]"
            title={articleData?.title}
          >
            {articleData?.title}
          </p>
          <Link href={articleData?.url} target="_blank">
            <Badge
              text="Dev.to 🔗"
              tailwindStylesContainer="mr-[.8rem] px-2 py-2 mt-4"
              tailwindStylesText="text-[1.5rem]"
              styles={{ borderRadius: ".8rem" }}
            />
          </Link>
        </div>
        <div className="blog-category flex flex-col gap-y-4 "></div>
      </div>
    </div>
  );
}

export default BlogCard;
