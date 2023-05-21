//components
import DesignationsCard from "../../cards/designations";
import DesignationCard from "../../cards/designation";

function index({ ...props }) {
  return (
    <div className="designation-section py-[10rem] flex flex-col justify-center items-center w-full ">
      <div className="">
        <div className="flex mb-[3.2rem] gap-x-[4rem] sm:gap-x-[6rem] md:gap-x-[6rem] lg:gap-x-[8rem] flex-wrap w-full flex-col sm:flex-row gap-y-[3.2rem] justify-center">
          <DesignationCard />
          <DesignationCard />
          <DesignationCard />
        </div>
        <div className="hidden md:block">
          <DesignationsCard />
        </div>
      </div>
    </div>
  );
}

export default index;
