function index({ ...props }) {
  return (
    <hr
      className="text-primary-bg-extraLight2 w-[100vw] relative left-[50%] translate-x-[-50%]"
      style={{ ...props?.style }}
    />
  );
}

export default index;
