import React from "react";
import Navbar from "./Others/Navbar";
import { ChevronRight, Star, Award, Briefcase } from "react-feather";
import Contactusjumbotron from "./Others/Contactusjumbotron";
import Footer from "./Others/Footer";
const Pricing = () => {
  return (
    <div>
      <Navbar />
      <section class="pricing bg-dark">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12 text-center">
              <div class="page-next-level">
                <h1 class="title">
                  {" "}
                  Create the best experiences with the right plan. <br />{" "}
                  Flexible. Scalable.{" "}
                </h1>
                <div class="page-next"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plans">
        <div class="container py-4">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-12 mt-4 pt-2 text-center">
              <ul
                class="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-success"
                data-aos="fade-up"
                data-aos-duration="1200"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link rounded active"
                    id="community-tab"
                    data-bs-toggle="pill"
                    href="#pills-community"
                    role="tab"
                    aria-controls="pills-community"
                    aria-selected="false"
                  >
                    <div class="text-center py-2">
                      <h6 class="mb-0">Business</h6>
                    </div>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link rounded"
                    id="selfservice-tab"
                    data-bs-toggle="pill"
                    href="#pills-self"
                    role="tab"
                    aria-controls="pills-self"
                    aria-selected="false"
                  >
                    <div class="text-center py-2">
                      <h6 class="mb-0">Targeted</h6>
                    </div>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link rounded"
                    id="teamwork-tab"
                    data-bs-toggle="pill"
                    href="#pills-teamwork"
                    role="tab"
                    aria-controls="pills-teamwork"
                    aria-selected="false"
                  >
                    <div class="text-center py-2">
                      <h6 class="mb-0">Respondents</h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-12 mt-4 pt-2">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-community"
                  role="tabpanel"
                  aria-labelledby="community-tab"
                >
                  <div class="container package">
                    <div class="row justify-content-center">
                      <div class="col-md-3 col-12 mt-4 pt-2">
                        <div class="card bg-success pricing-rates best-plan rounded text-center border-0">
                          <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                            <span class="text-center d-block shadow small h6">
                              Free
                            </span>
                          </div>
                          <div class="card-body py-5 bg-success tx-success">
                            <img
                              src="images/icon/lightbulb.svg"
                              class="mb-4 "
                              height="50"
                              alt=""
                            />
                            <h6 class="title text-uppercase mb-4">Basic</h6>
                            <div class="d-flex justify-content-center mb-3">
                              <span class="price h3 mb-0">Free</span>
                            </div>

                            <div class="pricing-features text-start p-3 bg-success">
                              <h5>What's included:</h5>
                              <ul class="feature list-unstyled mb-0 bg-success">
                                <li class="text-light">
                                  <ChevronRight />
                                  Full Access
                                </li>
                                <li class="text-light mt-2">
                                  <ChevronRight />
                                  Enhanced Security
                                </li>
                                <li class="text-light mt-2">
                                  <ChevronRight />
                                  Source Files
                                </li>
                                <li class="text-light mt-2">
                                  <ChevronRight />1 Domain Free
                                </li>
                                <li class="text-light mt-2">
                                  <ChevronRight />
                                  Free Appointments
                                </li>
                                <li class="text-light mt-2">
                                  <ChevronRight />
                                  Free Installment
                                </li>
                              </ul>
                            </div>
                            <button
                              href="javascript:void(0)"
                              class="btn btn-warning btn-mg mt-4"
                            >
                              Request Service
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-12 mt-4 pt-2">
                        <div class="card pricing-rates best-plan rounded shadow text-center border-0">
                          <div class="ribbon ribbon-right ribbon-primary overflow-hidden">
                            <span class="text-center d-block shadow small h6">
                              try
                            </span>
                          </div>
                          <div class="card-body py-5">
                            <img
                              src="images/icon/start-up.svg"
                              class="mb-4"
                              height="50"
                              alt=""
                            />
                            <h6 class="title text-uppercase mb-4">
                              Small Team
                            </h6>
                            <div class=" justify-content-center mb-4">
                              <span class="h5 mb-0 mt-2">₦</span>
                              <span class="price h3 mb-0">50,000</span>
                              <br />
                              <small>Per Month/Billed Annually</small>
                            </div>
                            <p class=" text-muted">
                              Request for exactaly what you would need for your
                              demograpic or target market
                            </p>
                            <button
                              href="javascript:void(0)"
                              class="btn btn-success btn-md mt-4"
                            >
                              {" "}
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-12 mt-4 pt-2">
                        <div class="card pricing-rates best-plan rounded bg-light text-center border-0">
                          <div class="ribbon ribbon-right ribbon-secondary overflow-hidden">
                            <span class="text-center d-block shadow small h6">
                              try
                            </span>
                          </div>
                          <div class="card-body py-5">
                            <img
                              src="images/icon/star.svg"
                              class="mb-4 center"
                              height="50"
                              alt=""
                            />
                            <h6 class="title text-uppercase mb-4 ">
                              Large Team
                            </h6>
                            <div class=" justify-content-center mb-4 ">
                              <span class="h5 mb-0 mt-2">₦</span>
                              <span class="price h3 mb-0">100,000</span>
                              <br />
                              <small>Per Month/Billed Annually</small>
                            </div>
                            <p class="text-muted">
                              We work within organizations (Maximum of 100) to
                              find out more about about demograpics or target
                              market.
                            </p>
                            <button
                              href="javascript:void(0)"
                              class="btn btn-success btn-md mt-2"
                            >
                              {" "}
                              Request Service
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-12 mt-4 pt-2">
                        <div class="card pricing-rates best-plan rounded shadow text-center border-0">
                          <div class="ribbon ribbon-right ribbon-info overflow-hidden">
                            <span class="text-center d-block shadow small h6">
                              try
                            </span>
                          </div>
                          <div class="card-body py-5">
                            <img
                              src="images/icon/start-up.svg"
                              class="mb-4"
                              height="50"
                              alt=""
                            />
                            <h6 class="title text-uppercase mb-4">
                              Organizations
                            </h6>
                            <div class="d-flex justify-content-center mb-4">
                              <span class="h4 mb-0 mt-2">Contact Us </span>
                            </div>
                            <p class="text-muted">
                              Request for exactly what you would need for your
                              demograpic or target market
                            </p>
                            <button
                              href="javascript:void(0)"
                              class="btn btn-success btn-md mt-4"
                            >
                              {" "}
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade secondtab"
                  id="pills-self"
                  role="tabpanel"
                  aria-labelledby="selfservice-tab"
                >
                  <div class="row align-items-center">
                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded bg-light text-center border-0">
                        <div class="card-body py-5">
                          <img
                            src="images/icon/lightbulb.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4">Individuals</h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2">₦</span>
                            <span class="price h1 mb-0">250</span>
                            <span class="h4 align-self-end mb-1">/hr</span>
                          </div>

                          <p class="text-muted">
                            We work with individuals to start a business or grow
                            a business to an agreed point.
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-success btn-md mt-4"
                          >
                            Request Service
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded shadow text-center border-0">
                        <div class="card-body py-5">
                          <img
                            src="images/icon/table.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4">Teams</h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2">₦</span>
                            <span class="price h1 mb-0">500</span>
                            <span class="h4 align-self-end mb-1">/hr</span>
                          </div>
                          <p class="text-muted">
                            We work with teams (Maximum of 10) to meet goals or
                            growth objectives
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-success btn-md mt-4"
                          >
                            {" "}
                            Request Service
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded bg-light text-center border-0">
                        <div class="card-body py-5">
                          <img
                            src="images/icon/star.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4">
                            Organizations
                          </h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2">₦</span>
                            <span class="price h1 mb-0">1000</span>
                            <span class="h4 align-self-end mb-1">/hr</span>
                          </div>
                          <p class="text-muted">
                            We work with organizations (Maximum of 100) to meet
                            goals or growth objectives
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-success btn-md mt-4"
                          >
                            {" "}
                            Request Service
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded shadow text-center border-0 bg-success">
                        <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span class="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                        <div class="card-body py-5">
                          <img
                            src="images/icon/start-up.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4 tx-success">
                            Specific Service
                          </h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2 tx-success">
                              Contact Us{" "}
                            </span>
                          </div>
                          <p class="text-light text-lowercase">
                            Request for exactaly what you would need for the
                            growth of your business
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-warning btn-md mt-4"
                          >
                            {" "}
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade thirdtab"
                  id="pills-teamwork"
                  role="tabpanel"
                  aria-labelledby="teamwork-tab"
                >
                  <div class="row justify-content-center">
                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded bg-light text-center border-0">
                        <div class="card-body py-5">
                          <img
                            src="images/icon/lightbulb.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4">Individuals</h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2">₦</span>
                            <span class="price h1 mb-0">250</span>
                            <span class="h4 align-self-end mb-1">/hr</span>
                          </div>

                          <p class="text-muted text-lowercase">
                            We work with the individual to find out more about
                            your demograpics or target market.
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-success btn-md mt-4"
                          >
                            Request Service
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded bg-light text-center border-0">
                        <div class="card-body py-5">
                          <img
                            src="images/icon/star.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4">
                            Organizations
                          </h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2">₦</span>
                            <span class="price h1 mb-0">1000</span>
                            <span class="h4 align-self-end mb-1">/hr</span>
                          </div>
                          <p class="text-muted text-lowercase">
                            We work within organizations (Maximum of 100) to
                            find out more about about demograpics or target
                            market.
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-success btn-md mt-4"
                          >
                            {" "}
                            Request Service
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-12 mt-4 pt-2">
                      <div class="card pricing-rates best-plan rounded shadow text-center border-0 bg-success">
                        <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span class="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                        <div class="card-body py-5">
                          <img
                            src="images/icon/start-up.svg"
                            class="mb-4"
                            height="50"
                            alt=""
                          />
                          <h6 class="title text-uppercase mb-4 tx-success">
                            Specific Service
                          </h6>
                          <div class="d-flex justify-content-center mb-4">
                            <span class="h4 mb-0 mt-2 tx-success">
                              Contact Us{" "}
                            </span>
                          </div>
                          <p class="text-light text-lowercase">
                            Request for exactaly what you would need for your
                            demograpic or target market
                          </p>
                          <button
                            href="javascript:void(0)"
                            class="btn btn-warning btn-md mt-4"
                          >
                            {" "}
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h1 class="title mb-4">Let’s get some real price done here.</h1>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with{" "}
                <span class="tx-success fw-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-end">
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="pricing text-center rounded overflow-hidden shadow bg-dark">
              <div class="price-header border-bottom pt-5 pb-5">
                <div class="tx-success">
                  <Star size={50} />
                </div>
                <h5 class="price-title">Starter</h5>
                <p class="mb-0 text-light">Suitable for Starter</p>
              </div>
              <div class="border-bottom py-4">
                <h2 class="fw-bold">$ 0.00</h2>
                <h6 class="text-light mb-0 fw-normal">
                  Billed monthly per user
                </h6>
                <button
                  href="javascript:void(0)"
                  class="btn btn-warning btn-lg mt-4"
                >
                  Start Free
                </button>
              </div>
              <div class="pricing-features text-start p-4">
                <h5>What's included:</h5>
                <ul class="feature list-unstyled mb-0">
                  <li class="text-light">
                    <ChevronRight />
                    Full Access
                  </li>
                  <li class="text-light mt-2">
                    <ChevronRight />
                    Security
                  </li>
                  <li class="text-light mt-2">
                    <ChevronRight />
                    Source Files
                  </li>
                  <li class="text-light  mt-2">
                    <ChevronRight />1 Domain Free
                  </li>
                  <li class="text-light mt-2">
                    <ChevronRight />
                    Appointments
                  </li>
                  <li class="text-light  mt-2">
                    <ChevronRight />
                    Free Installment
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class=" pricing text-center rounded overflow-hidden shadow-lg bg-secondary">
              <div class="price-header border-bottom pt-5 pb-5 ">
                <div class="tx-success">
                  <Award size={50} />
                </div>
                <h5 class="price-title tx-success">Standard</h5>
                <p class="mb-0 text-light">Suitable for Collaborating Team</p>
              </div>
              <div class="border-bottom py-5">
                <h2 class="fw-bold">$ 19.00</h2>
                <h6 class="text-light mb-0 fw-normal">
                  Billed monthly per user
                </h6>
                <button href="javascript:void(0)" class="btn btn-warning btn-lg mt-4">
                  Start Standard
                </button>
              </div>
              <div class="pricing-features text-start p-4">
                <h5>What's included:</h5>
                <ul class="feature list-unstyled mb-0">
                  <li class="text-light ">
              <ChevronRight />
                    Full Access
                  </li>
                  <li class="text-light  mt-2">
                    <ChevronRight />
                     Security
                  </li>
                  <li class="text-light  mt-2">
                    <ChevronRight />
                    Source Files
                  </li>
                  <li class="text-light  mt-2">
                 <ChevronRight />
                    1 Domain Free
                  </li>
                  <li class="text-light  mt-2">
                    <ChevronRight />
                    Appointments
                  </li>
                  <li class="text-light mt-2">
               <ChevronRight />
                    Free Installment
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="pricing text-center rounded overflow-hidden shadow bg-success">
              <div class="price-header border-bottom pt-5 pb-5">
                <div class="tx-primary">
                 <Briefcase size={50}/>
                </div>
                <h5 class="price-title">Premium</h5>
                <p class="mb-0 text-light">Suitable for Premium</p>
              </div>
              <div class="border-bottom py-4">
                <h2 class="fw-bold">$ 9.00</h2>
                <h6 class="text-light mb-0 fw-normal">
                  Billed monthly per user
                </h6>
                <button href="javascript:void(0)" class="btn btn-warning btn-lg mt-4">
                  Start Premium
                </button>
              </div>
              <div class="pricing-features text-start p-4">
                <h5>What's included:</h5>
                <ul class="feature list-unstyled mb-0">
                  <li class="text-light">
                <ChevronRight/>
                    Full Access
                  </li>
                  <li class="text-light mt-2">
                   <ChevronRight/>
                 Security
                  </li>
                  <li class="text-light mt-2">
                 <ChevronRight/>
                    Source Files
                  </li>
                  <li class="text-light mt-2">
                  <ChevronRight/>
                    1 Domain Free
                  </li>
                  <li class="text-light mt-2">
                  <ChevronRight/>
                    Appointments
                  </li>
                  <li class="text-light mt-2">
                  <ChevronRight/>
                    Free Installment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactusjumbotron/>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
};

export default Pricing;
