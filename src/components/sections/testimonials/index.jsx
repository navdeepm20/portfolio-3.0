//internal components
import Badge from "@components/badges";
import TestimonialCard from "@components/cards/testimonial";

function index({ ...props }) {
  return (
    <div className="testimonial-section mb-[14rem]">
      <div className="testimonials-section__top-area flex items-center justify-between mb-[10rem] overflow-scroll">
        <div className="testimonials-section__title-container w-full">
          <Badge
            text="Recommendations"
            icon={`💬`}
            tailwindStyles="mb-[2.4rem]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-[4.8rem] font-extrabold">Testimonials</p>
            <div className="testimonials-section__controls">
              <div> Controls Will Come Here</div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-section__cards-container flex overflow-scroll">
        <TestimonialCard />
        <TestimonialCard fill={true} />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default index;