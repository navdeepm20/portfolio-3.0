//internal components
import Badge from "@components/badges";
function index({ ...props }) {
  return (
    <div className="contact-section flex">
      <div className="contact-section-container mx-auto flex flex-col justify-center items-center">
        <Badge icon={"📬"} text="Contact Us" tailwindStyles="mb-[2.4rem]" />
        <p className="text-[4.8rem] font-extrabold">Let's Talk</p>
      </div>
    </div>
  );
}

export default index;
