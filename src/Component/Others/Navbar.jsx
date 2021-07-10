import { Link } from "react-router-dom";
export const Navbar = () => {
    
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="\images\logo.png"
                height="30"
                class="logo-light-mode"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
              <li className="nav-item dropdown px-3">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="productsdropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PRODUCTS
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="productsdropdown"
                  >
                    <li>
                    <Link to="/onlinesurvey" className="dropdown-item">
                        {" "}
                        Online survey
                      </Link>
                    </li>
                    <li>
                    <Link to="/offlinesurvey" className="dropdown-item">
                        {" "}
                        Offline survey
                      </Link>
                    </li>
                    <li>
                    <Link to="/npssurvey" className="dropdown-item">
                        {" "}
                        Nps survey
                      </Link>
                    </li>
                    <li>
                    <Link to="/market-research" className="dropdown-item">
                        {" "}
                        Market Research
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pt-2 px-3">
                <Link to="/take-a-campaign" className="text-dark">
                    {" "}
                    TAKE CAMPAIGN
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SOLUTIONS
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                    <Link to="/sales-experience" className="dropdown-item">
                        {" "}
                        Sales Experience
                      </Link>
                    </li>
                    <li>
                    <Link to="/customer-experience" className="dropdown-item">
                        {" "}
                        Customer Experience
                      </Link>
                    </li>
                    <li>
                    <Link to="/employee-experience" className="dropdown-item">
                        {" "}
                        Employee Experience
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  pt-2 px-3">
                <Link to="/pricing" className="text-dark">
                    {" "}
                   PRICING
                  </Link>
                </li>
                <a></a>
              </ul>
            </div>
            <form className="justify-content-end">
              <button
                className="btn btn-sm btn-outline-success me-2"
                type="button"
              >
                Login{" "}
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                Sign in
              </button>
            </form>
          </div>
        </nav>
    </div>
  );
};
export default Navbar;
