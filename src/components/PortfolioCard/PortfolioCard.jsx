import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/portfolio/poert1.png";
import img2 from "../../assets/portfolio/port2.png";
import img3 from "../../assets/portfolio/port3.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function PortfolioCard() {
  const images = [
    { path: img1, id: "port1" },
    { path: img2, id: "port2" },
    { path: img3, id: "port3" },
    { path: img1, id: "port4" },
    { path: img2, id: "port5" },
    { path: img3, id: "port6" },
  ];

  return (
    <>
      <section className="porto pb-5">
        <div className="container">
          <div className="row g-5">
            {images.map((img) => (
              <>
                <div className=" col-md-6 col-lg-4">
                  <div
                    className="inner position-relative"
                    data-bs-toggle="modal"
                    data-bs-target={"#" + img.id}
                  >
                    <img src={img.path} className="img-fluid rounded " alt="" />
                    <div className="layer rounded bg-second d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon
                        className="display-1 text-white "
                        icon={faPlus}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade "
                  id={img.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body">
                        <img className=" img-width " src={img.path} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
