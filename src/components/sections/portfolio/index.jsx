//internal components
import Badge from "@components/badges";
import PortfolioCard from "@components/cards/portfolio";
//data
import data from "@public/data/data.json";
//react
import { useState } from "react";
//libs
import { InView } from "react-intersection-observer";
function Index() {
  const [projectsInfo, setProjectsInfo] = useState(data?.portfolio?.data || []);
  const [projectCategory, setProjectCategory] = useState({
    isFrontend: false,
    isBackend: false,
    isFullStack: true,
  });
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const handleCategoryChange = (e, category) => {
    switch (category) {
      case "frontend":
        setProjectCategory((prev) => ({
          isBackend: false,
          isFullStack: false,
          isFrontend: true,
        }));
        setActiveCategory("frontend");
        break;
      case "backend":
        setProjectCategory((prev) => ({
          isFrontend: false,
          isFullStack: false,
          isBackend: true,
        }));
        setActiveCategory("backend");
        break;
      case "fullstack":
        setProjectCategory((prev) => ({
          isFrontend: false,
          isBackend: false,
          isFullStack: true,
        }));
        setActiveCategory("fullstack");
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="portfolio-section mb-[14rem] scroll-m-[5rem]"
      id="portfolio"
    >
      <div className="portfolio-section__top-area flex items-center justify-between mb-[10rem]">
        <div className="portfolio-section__title-container w-full">
          <Badge text="Portfolio" icon={`🔗`} tailwindStyles="mb-[2.4rem]" />
          <div className="flex flex-col  md:flex-row items-center justify-between w-full">
            <p className="text-[4.2rem] font-extrabold mb-4 md:mb-0">
              Works & Projects
            </p>
            <div className="portfolio-section__controls">
              <div className="toggle-container">
                <input
                  id="i1"
                  type="radio"
                  name="category"
                  checked={projectCategory?.isFullStack}
                  onChange={(e) => handleCategoryChange(e, "fullstack")}
                />
                <label htmlFor="i1">FullStack</label>
                <input
                  id="i2"
                  type="radio"
                  name="category"
                  checked={projectCategory?.isFrontend}
                  onChange={(e) => handleCategoryChange(e, "frontend")}
                />
                <label htmlFor="i2">Frontend</label>
                <input
                  id="i3"
                  type="radio"
                  name="category"
                  checked={projectCategory?.isBackend}
                  onChange={(e) => handleCategoryChange(e, "backend")}
                />
                <label htmlFor="i3">Backend</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-section__projects grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-[5.6rem] gap-y-[4.2rem] ">
        {projectsInfo
          .filter((project, index) => activeCategory === project?.category)
          .map((projectInfo, index) => (
            <InView
              threshold={0.2}
              onChange={(inView, entry) => {
                entry.target.classList.toggle("scale-up", entry.isIntersecting);
              }}
              key={index}
            >
              {({ ref }) => (
                <div
                  className="portfolio__cards-wrapper scale-50 duration-7 transition-all flex"
                  ref={ref}
                >
                  <PortfolioCard
                    key={index}
                    title={projectInfo?.title}
                    description={projectInfo?.description}
                    tags={projectInfo?.tags}
                    img={projectInfo?.thumbnailUrl}
                  />
                </div>
              )}
            </InView>
          ))}
      </div>
    </div>
  );
}

export default Index;
