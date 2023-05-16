//internal components
import ImageWrapper from "@components/image_wrapper";
//assets
import QuotesIcon from "@assets/testimonials/Quotes.svg";
import PersonImage from "@assets/testimonials/person1.svg";
function index({ fill, ...props }) {
  return (
    <div
      className={`testimonial-card-container max-w-[50rem] ${
        fill ? "" : "border"
      } rounded-[1.6rem] ${
        fill ? "" : "border-primary-bg-light"
      } p-[3rem] flex flex-col flex-auto [&:not(:last-child)]:mr-[7rem]  ${
        fill ? "bg-primary-bg-extraLight" : ""
      }`}
    >
      <div className="quote-container mb-[1.2rem]">
        <ImageWrapper icon={QuotesIcon} alt="quote-icon" />
      </div>
      <div
        className="review-container mb-[3.4rem]
	  "
      >
        <p className="text-[1.6rem] leading-[1.9rem] text-customGrey">
          O Washington está sempre estudando e aprendendo, buscando aprimorar
          aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de
          seus objetivos, com foco e organização. Além disso, tecnicamente, no
          que se propõe a fazer, faz bem feito. Sempre!
        </p>
      </div>
      <div className="reviewed-by-container flex items-center">
        <div className="reviewed-by-img-container mr-[1.1rem]">
          <ImageWrapper icon={PersonImage} alt="review_person_image" />
        </div>
        <div className="reviewed-by-info-container">
          <p className="text-[2rem] font-extrabold leading-[2.3rem] mb-[0.47rem]">
            Romário Lima
          </p>
          <p className="font-bold leading-[1.9rem] text-[1.6rem] text-primary-bg-light">
            Engenheiro da Computação
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
