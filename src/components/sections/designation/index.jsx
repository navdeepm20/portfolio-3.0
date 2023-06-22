//components
import DesignationsCard from "../../cards/designations";
import DesignationCard from "../../cards/designation";
//data
import data from "@public/data/data.json";

function index({ ...props }) {
  return (
    <div className="designation-section py-[10rem] flex flex-col justify-center items-center w-full ">
      <div className="">
        <div className="flex mb-[3.2rem] gap-x-[4rem] sm:gap-x-[6rem] md:gap-x-[6rem] lg:gap-x-[8rem] flex-wrap w-full flex-col sm:flex-row gap-y-[3.2rem] justify-center">
          {data?.designation?.data?.map((designation, index) => (
            <DesignationCard key={index} data={designation} />
          ))}
        </div>
        <div className="hidden md:block">
          <DesignationsCard data={data?.designation} />
        </div>
      </div>
    </div>
  );
}

export default index;
