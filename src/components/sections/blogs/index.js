//internal components
import BlogCard from "@components/cards/blogs";
//swr
import useSWR from "swr";

const fetcher = (...args) => {
  return fetch(...args).then((res) => res.json());
};

function BlogsSection({ ...props }) {
  const { data, isLoading, error } = useSWR(
    "https://dev.to/api/articles?username=navdeepm20&state=rising",
    fetcher
  );

  return (
    <div className="video-container  mb-[14rem] overflow-hidden" id="videos">
      <p className="video-container__title text-[4.2rem] font-extrabold leading-[5.6rem] mb-[.89rem]">
        Trending Blogs
      </p>
      <p className="text-customGrey mb-[5.37rem]">
        It &apos;s always good to write something that helps you and your fellow
        dev&apos;s
      </p>
      <div className="video-container__video-card-container flex gap-x-[5.4rem] overflow-x-scroll sm:overflow-auto">
        {data?.map((article, index) => {
          return <BlogCard articleData={article} key={index?.toString()} />;
        })}
      </div>
    </div>
  );
}

export default BlogsSection;
