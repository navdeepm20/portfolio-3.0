//components
import DesignationsCard from "../../cards/designations";
import DesignationCard from "../../cards/designation";

function index({ ...props }) {
  return (
    <div className="designation-section py-[10rem] flex flex-col justify-center items-center w-full ">
      <div className="w-max">
        <div className="flex mb-[3.2rem] gap-x-[4rem] sm:gap-x-[6rem] md:gap-x-[6rem] lg:gap-x-[8rem] flex-wrap w-full">
          <DesignationCard />
          <DesignationCard />
          <DesignationCard />
        </div>
        <DesignationsCard />
      </div>
    </div>
  );
}

export default index;
