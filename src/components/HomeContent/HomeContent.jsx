import PageHeading from "../PageHeading/PageHeading";
import img from "../../assets/avataaars.svg";

export default function HomeContent() {
  return (
    <>
      <div className="section bg-second py-4 text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-content">
                <div className="home-img d-flex justify-content-center align-items-center">
                  <img className="w-25 " src={img} alt="" />
                </div>
                <PageHeading
                  title={"start Framework"}
                  className={"text-white"}
                  lineColor={"bg-white"}
                />
                <p>
                  Graphic Artist - Web Designer - Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
