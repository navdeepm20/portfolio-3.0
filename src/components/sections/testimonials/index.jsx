//internal components
import Badge from "@components/badges";
import TestimonialCard from "@components/cards/testimonial";
//nextjs
import Image from "next/image";
//assets
import CarretIcon from "@public/static/testimonials/carret.svg";
//react
import { useRef } from "react";
//data
import data from "@public/data/data.json";
//libs
import { InView } from "react-intersection-observer";

function TestimonialSection({ ...props }) {
  const scrollRef = useRef();

  const handleNext = (e) => {
    scrollRef.current.scrollLeft += 420;
  };
  const handlePrevious = (e) => {
    scrollRef.current.scrollLeft -= 420;
  };
  return (
    <>
      {data?.testimonials?.show && (
        <div className="testimonial-section mb-[14rem] " id="testimonials">
          <div className="testimonials-section__top-area flex items-center justify-between mb-[10rem] ">
            <div className="testimonials-section__title-container w-full">
              <Badge
                text="Recommendations"
                icon={`💬`}
                tailwindStyles="mb-[2.4rem]"
              />
              <div className="flex items-center justify-between w-full">
                <p className="text-[4.2rem] font-extrabold">Testimonials</p>
                <div className="testimonials-section__controls flex">
                  <div
                    className="testimonial_control rounded-[1.6rem] bg-primary-bg-extraLight p-[.5rem] md:p-[1.4rem] mr-[1.6rem] cursor-pointer "
                    onClick={handlePrevious}
                  >
                    <Image src={CarretIcon} />
                  </div>
                  <div
                    className="testimonial_control rotate-180 rounded-[1.6rem] bg-primary-bg-extraLight p-[.5rem] md:p-[1.4rem] cursor-pointer"
                    onClick={handleNext}
                  >
                    <Image src={CarretIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InView
            threshold={0.2}
            onChange={(inView, entry) => {
              entry.target.classList.toggle("slide-in", entry.isIntersecting);
            }}
          >
            {({ ref }) => (
              <div
                className="testimonial-section__wrapper translate-x-[-70%] transition-all duration-300 opacity-0"
                ref={ref}
              >
                <div
                  className="testimonial-section__cards-container flex overflow-x-scroll snap-x  sm:overflow-auto relative  w-screen left-[50%] translate-x-[-50%] scroll-px-[5.5rem] sm:scroll-px-[6rem] md:scroll-px-[12rem] lg:scroll-px-[14rem] scroll-smooth"
                  ref={scrollRef}
                >
                  {data?.testimonials?.data?.map((testimonialsData, index) => {
                    return (
                      <TestimonialCard
                        tailwindStyles={`snap-start snap-always ${
                          (index === 0 &&
                            `ml-[3rem] sm:ml-[6rem] md:ml-[12rem] lg:ml-[14rem]`) ||
                          (index === data?.testimonials?.data?.length - 1 &&
                            `mr-[3rem] sm:mr-[6rem] md:mr-[12rem] lg:mr-[14rem]`)
                        }`}
                        fill={index % 2 == 0}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </InView>
        </div>
      )}
    </>
  );
}

export default TestimonialSection;
