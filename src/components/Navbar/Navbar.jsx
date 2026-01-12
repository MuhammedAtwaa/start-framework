import { Link, NavLink } from "react-router";

export default function Navbar() {
  return <>
<nav className="navbar navbar-expand-lg text-uppercase py-4 fw-bolder">
  <div className="container">
    <Link className="navbar-brand fs-2 text-white " to="/">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white mx-2 rounded" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white mx-2 rounded" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white mx-2 rounded" to="/contact">contact</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
  </>
}
