function Badge({
  icon,
  text,
  tailwindStylesContainer,
  tailwindStylesText,
  styles,
  ...props
}) {
  return (
    <div
      className={`badge rounded-[1.6rem] px-[1rem] py-[0.5rem] bg-primary-bg-extraLight inline-block ${tailwindStylesContainer}`}
      style={{ ...styles }}
    >
      {icon}
      <span
        className={`text-[2rem] font-bold leading-[2.3rem] text-primary-text pl-1 ${tailwindStylesText}`}
      >
        {text}
      </span>
    </div>
  );
}

export default Badge;

Badge.defaultProps = {
  icon: <></>,
  text: "Greetings",
};
