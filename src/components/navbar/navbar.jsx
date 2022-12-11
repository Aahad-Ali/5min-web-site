import React from "react";



const Navbar = () => {
  return (
    <div className="container nav-main">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://raw.githubusercontent.com/shakilkhan12/Youtube-react-responsive-website/master/public/img/logo.png" alt="..." width={'30%'} height/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-3" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-3" href="#">
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  News
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                 Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
