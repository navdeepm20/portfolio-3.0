//internal components
import ImageWrapper from "@components/image_wrapper";
//assets
import QuotesIcon from "@assets/testimonials/Quotes.svg";
import PersonImage from "@assets/testimonials/person1.svg";

function index({
  recommendation,
  name,
  designation,
  fill,
  tailwindStyles,
  ...props
}) {
  return (
    <div
      className={`testimonial-card-container min-w-[35rem] max-w-[50rem] hover:shadow-[0_0_10px_2px] hover:shadow-[rgba(51,48,51,1)]  transition-shadow ${
        fill ? "" : "border"
      } rounded-[1.6rem] ${
        fill ? "" : "border-primary-bg-light"
      } p-[3rem] flex flex-col flex-auto [&:not(:last-child)]:mr-[7rem]  ${
        fill ? "bg-primary-bg-extraLight" : ""
      } ${tailwindStyles}`}
    >
      <div className="quote-container mb-[1.2rem]">
        <ImageWrapper icon={QuotesIcon} alt="quote-icon" />
      </div>
      <div
        className="review-container mb-[3.4rem]
	  "
      >
        <p className="text-[1.6rem] leading-[1.9rem] text-customGrey">
          {recommendation}
        </p>
      </div>
      <div className="reviewed-by-container flex items-center">
        <div className="reviewed-by-img-container mr-[1.1rem]">
          <ImageWrapper icon={PersonImage} alt="review_person_image" />
        </div>
        <div className="reviewed-by-info-container">
          <p className="text-[2rem] font-extrabold leading-[2.3rem] mb-[0.47rem]">
            {name}
          </p>
          <p className="font-bold leading-[1.9rem] text-[1.6rem] text-primary-bg-light">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
