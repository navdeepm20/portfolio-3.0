//components
import DesignationsCard from "../../cards/designations";
import DesignationCard from "../../cards/designation";
//data
import data from "@public/data/data.json";
//lib
import { InView } from "react-intersection-observer";

function Desgination({ ...props }) {
  return (
    <div
      className="designation-section py-[10rem] flex flex-col justify-center items-center w-full"
      id="designation"
    >
      <div className="">
        <div className="flex mb-[3.2rem] gap-x-[4rem] sm:gap-x-[6rem] md:gap-x-[6rem] lg:gap-x-[8rem] flex-wrap w-full flex-col sm:flex-row gap-y-[3.2rem] justify-center">
          {data?.designation?.data?.map((designation, index) => (
            <InView
              threshold={0.8}
              onChange={(inView, entry) => {
                entry.target.classList.toggle("slide-in", entry.isIntersecting);
              }}
              key={index}
            >
              {({ ref }) => <DesignationCard data={designation} ref={ref} />}
            </InView>
          ))}
        </div>
        <div className="hidden md:block">
          <InView
            threshold={1}
            onChange={(inView, entry) => {
              entry.target.classList.toggle("slide-up", entry.isIntersecting);
            }}
          >
            {({ ref }) => (
              <DesignationsCard data={data?.designation} ref={ref} />
            )}
          </InView>
        </div>
      </div>
    </div>
  );
}

export default Desgination;
