export default function PageHeading({ title , className , lineColor }) {
  return (
    <>
      <div className={`section-title d-flex flex-column align-items-center justify-content-center ${className}`}>
        <h1 className={`headerStyle text-center text-uppercase fw-bold pt-4 ${className}`}>
          {title}{" "}
        </h1>
        <div className={`divider d-flex flex-wrap align-items-center justify-content-center gap-3 mb-2 text-white ${className}`}>
          <span className={`line ${lineColor}`}></span>
          <span className={`star ${className}`}>
            <i className={`bi bi-star-fill ${className}`}></i>
          </span>
          <span className={`line ${lineColor}`}></span>
        </div>
      </div>
    </>
  );
}
