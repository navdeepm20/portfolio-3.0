function index({ icon, text, tailwindStyles, ...props }) {
  console.log(tailwindStyles, "asdfasdf");
  return (
    <div
      className={`badge rounded-[1.6rem] px-[1rem] py-[0.5rem] bg-primary-bg-extraLight inline-block 
        ${tailwindStyles}`}
    >
      {icon}
      <span className="text-[2rem] font-bold leading-[2.3rem] text-primary-text pl-1 ">
        {text}
      </span>
    </div>
  );
}

export default index;

index.defaultProps = {
  icon: <></>,
  text: "Greetings",
};
