//internal components
import Badge from "@components/badges";
import TestimonialCard from "@components/cards/testimonial";
//nextjs
import Image from "next/image";
//assets
import CarretIcon from "@public/static/testimonials/carret.svg";
//react
import { useRef } from "react";

function Index({ ...props }) {
  const scrollRef = useRef();

  const handleNext = (e) => {
    scrollRef.current.scrollLeft += 420;
    console.log(scrollRef?.current?.scrollLeft);
  };
  const handlePrevious = (e) => {
    scrollRef.current.scrollLeft -= 420;
  };
  return (
    <div className="testimonial-section mb-[14rem] ">
      <div className="testimonials-section__top-area flex items-center justify-between mb-[10rem] ">
        <div className="testimonials-section__title-container w-full">
          <Badge
            text="Recommendations"
            icon={`💬`}
            tailwindStyles="mb-[2.4rem]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-[4.8rem] font-extrabold">Testimonials</p>
            <div className="testimonials-section__controls flex">
              <div
                className="testimonial_control rounded-[1.6rem] bg-primary-bg-extraLight p-[1.4rem] mr-[1.6rem] cursor-pointer "
                onClick={handlePrevious}
              >
                <Image src={CarretIcon} />
              </div>
              <div
                className="testimonial_control rotate-180 rounded-[1.6rem] bg-primary-bg-extraLight p-[1.4rem] cursor-pointer"
                onClick={handleNext}
              >
                <Image src={CarretIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="testimonial-section__cards-container flex overflow-x-scroll snap-x  sm:overflow-auto relative  w-screen left-[50%] translate-x-[-50%] scroll-px-[5.5rem] sm:scroll-px-[6rem] md:scroll-px-[12rem] lg:scroll-px-[14rem] scroll-smooth"
        ref={scrollRef}
      >
        <TestimonialCard tailwindStyles="snap-start snap-always ml-[3rem] sm:ml-[6rem] md:ml-[12rem] lg:ml-[14rem] " />
        <TestimonialCard fill={true} tailwindStyles="snap-start snap-always " />
        <TestimonialCard tailwindStyles="snap-start snap-always " />
        <TestimonialCard tailwindStyles="snap-start snap-always " fill={true} />
        <TestimonialCard tailwindStyles="snap-start snap-always mr-[3rem] sm:mr-[6rem] md:mr-[12rem] lg:mr-[14rem]" />
        <TestimonialCard tailwindStyles="snap-start snap-always " />
        <TestimonialCard tailwindStyles="snap-start snap-always " fill={true} />
        <TestimonialCard tailwindStyles="snap-start snap-always mr-[3rem] sm:mr-[6rem] md:mr-[12rem] lg:mr-[14rem]" />
        <TestimonialCard tailwindStyles="snap-start snap-always " />
        <TestimonialCard tailwindStyles="snap-start snap-always " fill={true} />
        <TestimonialCard tailwindStyles="snap-start snap-always mr-[3rem] sm:mr-[6rem] md:mr-[12rem] lg:mr-[14rem]" />
      </div>
    </div>
  );
}

export default Index;
