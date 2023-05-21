//internal components
import Badge from "@components/badges";
import PortfolioCard from "@components/cards/portfolio";
function index() {
  return (
    <div className="portfolio-section mb-[14rem]">
      <div className="portfolio-section__top-area flex items-center justify-between mb-[10rem]">
        <div className="portfolio-section__title-container w-full">
          <Badge text="Portfolio" icon={`🔗`} tailwindStyles="mb-[2.4rem]" />
          <div className="flex items-center justify-between w-full">
            <p className="text-[4.8rem] font-extrabold">Works & Projects</p>
            <div className="portfolio-section__controls">
              <div className="slider-container">
                <input type="checkbox" id="switcher" />
                <label htmlFor="switcher"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-section__projects grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-[5.6rem] gap-y-[4.8rem] ">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
}

export default index;
