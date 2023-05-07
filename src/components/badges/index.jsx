function index({ icon, text, ...props }) {
  return (
    <div
      className={`badge rounded-[16px] px-[10px] py-[5px] bg-primary-bg-extraLight inline-block ${props?.tailwindStyles}`}
    >
      {icon}
      <span className="text-[2rem] font-bold leading-[23px] text-primary-text pl-1 ">
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
