import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li> 
                <li className="nav-item">
                  <a className="nav-link">
                    Link1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    Link2
                  </a>
                </li>
              </ul>
              <div className="col-md-10">
                <Link
                  to="/add"
                  type="button"
                  className="btn btn-md btn-danger"
                  style={{ float: "right" }}
                >
                  Add movie
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
