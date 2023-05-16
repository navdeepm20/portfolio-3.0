function index({ mode, ...props }) {
  return (
    <div className="stepper-component">
      {mode === "horizontal" ? (
        <div className="stepper-content-container flex">
          <div className="stepper-circle">C</div>
          <div className="stepper-line">-----</div>
        </div>
      ) : (
        <div className="stepper-content-container">
          <div className="stepper-circle"></div>
          <div className="stepper-line"></div>
        </div>
      )}
    </div>
  );
}

export default index;
