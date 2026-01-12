import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function About() {
  return (
    <>

        <Navbar />
        <div className="about-content bg-second ">
          <div className="container d-flex about-height">
            <div className="row justify-content-center align-content-center">
        <PageHeading title={'about component'} className={'text-white'} lineColor={'bg-white'} />
              <div className="col-md-6 d-flex flex-wrap align-items-center justify-content-center lead  text-white">
                <p className="">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center lead text-white">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  );
}
