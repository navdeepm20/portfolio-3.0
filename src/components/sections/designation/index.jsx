//components
import DesignationsCard from "../../cards/designations";
import DesignationCard from "../../cards/designation";
//data
import data from "@public/data/data.json";
//react
import { useEffect, useState, useRef } from "react";

function Desgination({ ...props }) {
  const cardRefs = useRef([]);
  const bottomCardRef = useRef(false);

  useEffect(() => {
    if (cardRefs.current?.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.map((entry) => {
            entry.target.classList.toggle("slide-in", entry.isIntersecting);
          });
        },
        { threshold: 1 }
      );
      cardRefs.current.map((ref) => {
        observer.observe(ref);
      });
      return () => observer.disconnect();
    }
  }, [cardRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          console.log(entry, "asdfjasf");
          entry.target.classList.toggle("slide-in", entry.isIntersecting);
        });
      },
      { threshold: 0.7 }
    );
    observer.observe(bottomCardRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="designation-section py-[10rem] flex flex-col justify-center items-center w-full">
      <div className="">
        <div className="flex mb-[3.2rem] gap-x-[4rem] sm:gap-x-[6rem] md:gap-x-[6rem] lg:gap-x-[8rem] flex-wrap w-full flex-col sm:flex-row gap-y-[3.2rem] justify-center">
          {data?.designation?.data?.map((designation, index) => (
            <DesignationCard
              key={index}
              data={designation}
              ref={(element) => {
                cardRefs.current.push(element);
              }}
            />
          ))}
        </div>
        <div className="hidden md:block">
          <DesignationsCard data={data?.designation} ref={bottomCardRef} />
        </div>
      </div>
    </div>
  );
}

export default Desgination;
