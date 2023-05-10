//components
import DesignationsCard from "../../cards/designations";
import DesignationCard from "../../cards/designation";

function index({ ...props }) {
  return (
    <div className="py-[10rem] flex flex-col justify-center items-center w-full ">
      <div className="w-max">
        <div className="flex mb-[3.2rem]">
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
