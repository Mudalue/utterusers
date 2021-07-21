import React, { useState } from "react";
import {
  PieChart,
  Cast,
  Smile,
  Clipboard,
  Filter,
  CheckCircle,
  Lock,
  Mail,
} from "react-feather";
import { Link } from "react-router-dom";
import Contactusjumbotron from "./Others/Contactusjumbotron";
import Footer from "./Others/Footer";
import { Login, Register } from "../helpers/API";

const Home = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginRes, setLoginRes] = useState(null);

  const [regMail, setRegMail] = useState(null);
  const [regPass, setRegPass] = useState(null);

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoginRes(
      <div className="alert alert-primary text-center">
        checking your credentials...{" "}
      </div>
    );
    const data = await Login({ email, password });

    if (data.status === "success") {
      // set token to local storage
      localStorage.setItem("__magnumpi", data.hash);
      setLoginRes(
        <div className="alert alert-success text-center">
          Login Successful, please wait!
        </div>
      );
      window.location.href = "/dashboard";
    } else {
      setLoginRes(
        <div className="alert alert-danger text-center">
          Invalid Credentails.{" "}
        </div>
      );
    }
  };

  const [feedback, setFeedback] = useState("");

  const newUser = async (e) => {
    e.preventDefault();
    const response = await Register({ email: regMail, password: regPass });
    console.log(response);
  };
  return (
    <>
      <div className="starter">
        {/* <navbar></navbar> */}
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
                {/* <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="#">
                    Home
                  </a>
                </li> */}
                <li className="nav-item dropdown px-3">
                  <a
                    className="nav-link dropdown-toggle text-dark "
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
                    <li>
                      <a className="dropdown-item" href="#">
                        Polls and Quizzes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Forms
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pt-2 px-3">
                  <Link to="/take-a-campaign" className="text-dark">
                    {" "}
                    TAKE CAMPAIGN
                  </Link>
                </li>
                <li className="nav-item dropdown px-3">
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
                      <a className="dropdown-item " href="#">
                        User Enrolling
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Idea Validation
                      </a>
                    </li>
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
                <li className="nav-item pt-2 px-3">
                  <Link to="/pricing" className="text-dark">
                    {" "}
                    PRICING
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-success me-3"
                data-bs-toggle="modal"
                data-bs-target="#regModal"
              >
                Register{" "}
              </button>
              <button
                type="button"
                class="btn btn-warning me-3"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Sign in
              </button>
            </div>
          </div>
        </nav>

        <div className="container-fluid first">
          <div className="row">
            <div className="col-md-12">
              <h1 className="tx-success">
                Welcome to utterusers Survey Network
              </h1>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="lh-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Illum ipsa ip sam dolorum ratione itaque tempora quos
                  <br />
                  distinctio, quas expedita autem nihil nulla omnis a enim rem
                  <br />
                  nemo officiis eos mollitia.
                  <br />
                </p>
              </div>
              <div className="row">
                <div className="col-md-12  firstbutton">
                  <button className="btn btn-lg btn-success">
                    Get Started
                  </button>{" "}
                  <button className="btn btn-lg btn-warning">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron p-4">
          <div className="row">
            <div className="col-md 12">
              <PieChart size={47} className="" />

              <h4 className="p-4">Get And Give Diverse Responses</h4>

              <p>Talk, learn, get and give feedback to the right people</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12">
              <button className="btn btn-success btn-lg">Learn More</button>
            </div>
          </div>
        </div>
        <div className="container second">
          <div className="row">
            <div className="col-md-12">
              <h3>Get the Right Feed back and Earn Extra funds</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>Get the right feed back</h5>
              <img src="images\idea.svg" className="img-fluid" alt="" />
              <p className="lh-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                officiis quisquam, quia es t quidem fugiat dignissimos
                perspiciatis quam ipsam porro earum! Sequi praesentium dolorum
                dolorem beatae. Mollitia labore esse dolorem. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Iure, amet ut, magni
                fugiat ipsam illo corporis unde ducimus, explicabo at voluptatem
                voluptate deleniti omnis ullam molestiae fuga accusamus labore
                consequuntur?
              </p>
              <button className="btn btn-success btn-lg">Learn more</button>
            </div>
            <div className="col-md-6">
              <h5>Earn extra funds</h5>
              <img src="images\Section_2_2.svg" className="img-fluid" alt="" />
              <p className="lh-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                officiis quisquam, quia es t quidem fugiat dignissimos
                perspiciatis quam ipsam porro earum! Sequi praesentium dolorum
                dolorem beatae. Mollitia labore esse dolorem. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Iure, amet ut, magni
                fugiat ipsam illo corporis unde ducimus, explicabo at voluptatem
                voluptate deleniti omnis ullam molestiae fuga accusamus labore
                consequuntur?
              </p>
              <button className="btn btn-success btn-lg">Learn more</button>
            </div>
          </div>
        </div>
        <div className="container-fluid third">
          <div className="row">
            <div className="col-md-12">
              <h3>Campaign Features</h3>
              <p className="lh-lg">
                Start working with utterusers today, we can generate everything
                u need to generate awareness, get feedback and connect with
                users
              </p>
            </div>
          </div>
          <div className="row " id="thirdrow">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="d-flex pt-4 pb-2">
                    <div class="flex-shrink-0">
                      <Cast className="text-success" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6>Online Survey</h6>
                      <p class="text-light para mb-0 lh-lg">
                        Online Survey gets data from a predefined group of
                        respondents to gain information and insights into
                        various topics of interest.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div class="d-flex pt-4 pb-4">
                    <div class="flex-shrink-0">
                      <Smile className="text-success" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6>NPS Survey</h6>
                      <p class="text-light para mb-0 lh-lg">
                        Net Promoter Score Survey (NPS Survey) is a well-known
                        metric used for measuring customer satisfaction and
                        loyalty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="d-flex pt-4 pb-4">
                    <div class="flex-shrink-0">
                      <Clipboard className="text-success" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6>Offline Survey</h6>
                      <p class="text-light para mb-0 lh-lg">
                        Create surveys and receive responses from a predefined
                        group without an internet connection. With analiyis sent
                        to you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div class="d-flex pt-4 pb-4">
                    <div class="flex-shrink-0">
                      <Filter className="text-success" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6>Market Reserch</h6>
                      <p class="text-light para mb-0 lh-lg">
                        Market research is the process of determining the
                        viability of a new service or product through research`
                        conducted directly with potential customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-success btn-lg">
                    Create a Campaign
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12 mt-4 pt-2 text-center text-md-end">
              <img src="images\dashboard view.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid fourth">
          <div className="row">
            <div className="col-md-12">
              <h3>Make Money giving your feedback</h3>
              <p class="text-muted para-desc mb-0 mx-auto text-center pb-4 lh-lg">
                Start earning cash and crypto currency with{" "}
                <span class="text-success fw-bold">Utterusers</span> by just
                answering questions and being yourself.
              </p>
            </div>
          </div>
          <div className="row">
            <div class="col-lg-4 col-md-4 col-12 mt-4 pt-2 text-center text-md-end">
              <img src="images\dashboard view 2.png" class="img-fluid" alt="" />
            </div>
            <div className="col-md-8">
              <div className="section-title ms-lg-5 ">
                <h4 className="title">Signup For Free and Start Earning</h4>
                <p className="text-muted lh-lg">
                  Signup and take surveys, polls, quizzes, and forms. Also join
                  focus groups. <br />
                  You you get paid by:{" "}
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-3">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Bank transfer
                  </li>
                  <li className="mb-3">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Crypto-Currency e.g Bitcoin
                  </li>
                  <li className="mb-3">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Paypal and other payment channels
                  </li>
                </ul>
                <div className="mx-3">
                  <button className="btn btn-success btn-lg">
                    Find out how to Earn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="quesection">
          <div class="container mt-100 mt-60">
            <div class="row">
              <div class="col-md-6 col-12 ">
                <div class="d-flex">
                  <div class="flex-shrink-0"></div>

                  <div class="flex-1">
                    <h6 class="mt-0">
                      <CheckCircle className="text-success" /> What is{" "}
                      <span class="text-success">Utterusers</span>?
                    </h6>
                    <p class="answer  mb-0 text-light lh-base">
                      We connect companies with their target audience, and the
                      general public, while also paying users for their genuine
                      response to companies' questions and reviews.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="d-flex">
                  <div class="flex-shrink-0"></div>
                  <div class="flex-1">
                    <h6 class="mt-0">
                      <CheckCircle className="text-success" /> How does{" "}
                      <span class="text-success">Utterusers Campaign</span> work
                      ?
                    </h6>
                    <p class="answer text-light mb-0 lh-base">
                      {" "}
                      Once a request is made, we reach out to the client and
                      findout about their business and what they hope to achive
                      and we provide the solutions to meet the demands of the
                      client.{" "}
                      <a
                        href="javascript:void(0)"
                        data-bs-toggle="modal"
                        data-bs-target="#createcampaign"
                        class="text-muted small text-primary"
                      >
                        Make a request
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-4 pt-2">
                <div class="d-flex">
                  <div class="flex-shrink-0"></div>
                  <div class="flex-1">
                    <h6 class="mt-0">
                      {" "}
                      <CheckCircle className="text-success" /> How much do you
                      charge?
                    </h6>
                    <p class="answer text-light mb-0 lh-base">
                      Our pricing plans are competitive and can fit within
                      budgets of any size.{" "}
                      <a
                        href="plans-pricing.html"
                        class="text-muted small text-primary"
                      >
                        View Pricing & Plans
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-4 pt-2">
                <div class="d-flex">
                  <div class="flex-shrink-0"></div>
                  <div class="flex-1">
                    <h6 class="mt-0">
                      <CheckCircle className="text-success" /> Can I request
                      multiple campaigns at a time?
                    </h6>
                    <p class="answer text-light mb-0 lh-base">
                      Yes, you can request as many campaigns as you require for
                      yourself or your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contactusjumbotron />
        <div className="footer">
          <Footer />
        </div>
        {/* <Registration modal> */}
        <div
          class="modal fade"
          id="regModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="regBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header text-center p-4">
                {}
                <h3 class="modal-title" id="regBackdropLabel">
                  Registration
                </h3>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row ">
                  <div className="col-md-6 bg-success pl-3">
                    <img src="./images/plogin.svg" />
                  </div>
                  <div className="col-md-6">
                    <form
                      className="p-5"
                      style={{ maxWidth: "450px", margin: "auto" }}
                      onSubmit={newUser}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <label for="email" className="my-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="input-field form-control"
                            placeholder="Enter Email"
                            onChange={({ target: { value } }) =>
                              setRegMail(value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label for="email" className="my-2">
                            Password
                          </label>
                          <input
                            type="password"
                            className="input-field form-control"
                            placeholder="Enter password"
                            onChange={({ target: { value } }) =>
                              setRegPass(value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row py-4">
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg"
                            style={{ width: "100%" }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="loginModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="loginBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header text-center p-4">
                {}
                <h3 class="modal-title" id="loginBackdropLabel">
                  Login
                </h3>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row ">
                  <div className="col-md-6 bg-success pl-3">
                    <img src="./images/plogin.svg" />
                  </div>
                  <div className="col-md-6">
                    <form
                      className="p-5"
                      style={{ maxWidth: "450px", margin: "auto" }}
                      onSubmit={submitLogin}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <label for="email" className="my-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="input-field form-control"
                            placeholder="Enter Email"
                            onChange={({ target: { value } }) =>
                              setEmail(value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label for="email" className="my-2">
                            Password
                          </label>
                          <input
                            type="password"
                            className="input-field form-control"
                            placeholder="Enter password"
                            onChange={({ target: { value } }) =>
                              setPassword(value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row py-4">
                        <div className="col-md-12">
                          {loginRes && loginRes}
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg"
                            style={{ width: "100%" }}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
