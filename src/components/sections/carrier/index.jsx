//internal components
import Badge from "@components/badges";
import CarrierCard from "@components/cards/carrier";
//data
import data from "@public/data/data.json";
//libs
import { InView } from "react-intersection-observer";

function index() {
  return (
    <div className="carrier-section mb-[14rem] flex justify-center flex-col items-center">
      <Badge icon="💼" text="Carrier" tailwindStyles="mb-[2.4rem]" />
      <p className="text-[4.8rem] font-extrabold mb-[6.4rem] text-center">
        Trajectory Until Here
      </p>
      <div className="carrier-info-container grid grid-cols-1 md:grid-cols-2 gap-x-[24.1rem] gap-y-[6.4rem] w-full">
        <div className="job-exp-container flex justify-center ">
          <div className="profession-info-container">
            <div className="profession-title-container mb-[6.49rem]">
              <p className="font-extrabold text-[3.2rem] leading-[3.8rem] mb-[.78rem] text-center ">
                Professional
              </p>
              <p className="text-center text-customGrey text-[2.4rem]leading-[2.8rem]">
                {data?.carrier?.professional?.title}
              </p>
            </div>
            <div className="carrier-section__profession-card-container flex flex-col gap-y-[6.4rem]">
              {data?.carrier?.professional?.data?.map(
                (professionaInfo, index) => (
                  <InView
                    threshold={0.2}
                    onChange={(inView, entry) => {
                      entry.target.classList.toggle(
                        "slide-up",
                        entry.isIntersecting
                      );
                    }}
                    key={index}
                  >
                    {({ ref }) => (
                      <CarrierCard
                        title={professionaInfo?.title}
                        description={professionaInfo?.description}
                        startedOn={professionaInfo?.startedOn}
                        endedOn={professionaInfo?.completedOn}
                        hideTillToday={false}
                        key={index}
                        ref={ref}
                      />
                    )}
                  </InView>
                )
              )}
            </div>
          </div>
        </div>
        <div className="study-container flex justify-center ">
          <div className="academic-info-container">
            <div className="academic-title-container mb-[6.49rem]">
              <p className="font-extrabold text-[3.2rem] leading-[3.8rem] text-center mb-[.78rem]">
                Academic
              </p>
              <p className="text-center text-customGrey text-[2.4rem]leading-[2.8rem]">
                {data?.carrier?.academic?.title}
              </p>
            </div>
            <div className="carrier-section__profession-card-container flex flex-col gap-y-[6.4rem]">
              {data?.carrier?.academic?.data?.map((academic, index) => (
                <InView
                  threshold={0.2}
                  onChange={(inView, entry) => {
                    entry.target.classList.toggle(
                      "slide-up",
                      entry.isIntersecting
                    );
                  }}
                  key={index}
                >
                  {({ ref }) => (
                    <CarrierCard
                      title={academic?.title}
                      description={academic?.description}
                      startedOn={academic?.startedOn}
                      endedOn={academic?.completedOn}
                      hideTillToday={true}
                      key={index}
                      ref={ref}
                    />
                  )}
                </InView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
