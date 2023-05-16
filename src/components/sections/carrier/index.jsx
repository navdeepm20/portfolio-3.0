//internal components
import Badge from "@components/badges";
import CarrierCard from "@components/cards/carrier";

function index() {
  return (
    <div className="carrier-section mb-[14rem] flex justify-center flex-col items-center">
      <Badge icon="💼" text="Carrier" tailwindStyles="mb-[2.4rem]" />
      <p className="text-[4.8rem] font-extrabold mb-[6.4rem]">
        Trajectory Until Here
      </p>
      <div className="carrier-info-container grid grid-cols-2 gap-x-[24.1rem] gap-y-[6.4rem] w-full">
        <div className="job-exp-container flex justify-center ">
          <div className="profession-info-container">
            <div className="profession-title-container mb-[6.49rem]">
              <p className="font-extrabold text-[3.2rem] leading-[3.8rem] mb-[.78rem] text-center ">
                Professional
              </p>
              <p className="text-center text-customGrey">
                2021 &middot; Currently
              </p>
            </div>
            <div className="carrier-section__profession-card-container">
              <CarrierCard />
              <CarrierCard />
              <CarrierCard />
              <CarrierCard />
            </div>
          </div>
        </div>
        <div className="study-container flex justify-center ">
          <div className="academic-info-container">
            <div className="academic-title-container mb-[6.49rem]">
              <p className="font-extrabold text-[3.2rem] leading-[3.8rem] text-center mb-[.78rem]">
                Academic
              </p>
              <p className="text-center text-customGrey">
                2016 &middot; Currently
              </p>
            </div>
            <div className="carrier-section__profession-card-container">
              <CarrierCard />
              <CarrierCard />
              <CarrierCard />
              <CarrierCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
