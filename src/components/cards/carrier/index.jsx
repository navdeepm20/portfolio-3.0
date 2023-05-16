import React from "react";

function index({ title, text, ...props }) {
  return (
    <div className="carrier-card rounded-[1.6rem] border border-primary-bg-light p-[3rem] max-w-[58rem]">
      <div className="carrier-card__info-container mb-[1.62rem]">
        <p className="font-bold text-[2rem] leading-[2.3rem] mb-[.83rem]">
          Designer na Viralizzi
        </p>
        <p className="text-[1.6rem] leading-[1.9rem]">
          Disponibilizando serviços para mídias digitais na Viralizzi como
          Designer.
        </p>
      </div>
      <div className="carrier-card__timeline-container flex">
        <span className="mr-auto font-bold text-[1.8rem] leading-[2.1rem] text-primary-bg-light">
          2years
        </span>
        <span className="ml-auto text-[1.8rem] leading-[2.1rem] text-primary-bg-light">
          Lorem, ipsum.
        </span>
      </div>
    </div>
  );
}

export default index;
