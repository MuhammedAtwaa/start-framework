import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PageHeading from "../../components/PageHeading/PageHeading";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="notfound-content bg-second" style={{ minHeight: "80vh" }}>
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="row w-100">
            <div className="col-12 text-center">
              <div className="notfound-wrapper">
                <h1
                  className="display-1 fw-bold text-white mb-3"
                  style={{ fontSize: "150px", lineHeight: "1" }}
                >
                  404
                </h1>
                <PageHeading
                  title="Page Not Found"
                  className="text-white"
                  lineColor="bg-white"
                />
                <p
                  className="text-white lead mt-4 mb-5"
                  style={{ fontSize: "18px" }}
                >
                  Sorry, the page you are looking for does not exist. It might
                  have been moved or deleted.
                </p>
                <Link
                  to="/"
                  className="btn btn-primary bg-second-btn text-white fw-bold px-5 py-3"
                  style={{ backgroundColor: "#1abc9c" }}
                >
                  <i className="bi bi-house-door me-2"></i> Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
