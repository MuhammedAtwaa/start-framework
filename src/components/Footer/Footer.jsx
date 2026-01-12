export default function Footer() {
  return (
    <>
      <section className="footer py-5">
        <div className="container py-3">
          <div className="row text-white g-4">
          <div className="col-sm-4 text-center py-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-sm-4 text-center py-4 ">
            <h3>AROUND THE WEB</h3>
            <div className="icons m-3">
              <i className="bi bi-facebook pointer"></i>
              <i className="bi bi-twitter pointer"></i>
              <i className="bi bi-linkedin pointer"></i>
              <i className="bi bi-globe pointer"></i>
            </div>
          </div>
          <div className="col-sm-4 text-center py-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        </div>
      </section>
      <div className="footer-bottom">
                  <p className=" m-0 py-3 text-white text-center ">Copyright © Your Website 2021</p>

      </div>
    </>
  );
}
