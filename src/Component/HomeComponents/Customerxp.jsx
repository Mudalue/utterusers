import React from "react";
import Navbar from "../Others/Navbar";
import Contactusjumbotron from "../Others/Contactusjumbotron";
import Footer from "../Others/Footer";
import {
  Aperture,
  ThumbsUp,
  Lock,
  Award,
  Shield,
  ChevronRight,
} from "react-feather";
const Customerxp = () => {
  return (
    <div>
      <Navbar />
      <section class="customerxp">
        <div class="container">
          <div class="row mt-5 align-items-center mb-5">
            <div class="col-lg-6 col-md-6">
              <div class="title-heading me-lg-4">
                {/* <div class="alert alert-white alert-pills shadow" role="alert">
                  <span class="badge rounded-pill bg-primary me-1">
                    Customer
                  </span>
                  <span class="content">Experience</span>
                </div> */}
                <h1 class="heading fw-bold mb-3">
                  Improve customer <br /> Experience with feedback
                </h1>
                <p class="para-desc text-light">
                  Collect feedback from your customers and measure your customer
                  satisfaction index using customer pulse surveys.
                </p>
                <div class="mt-4 pt-2">
                  <button
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#createcampaign"
                    class="btn btn-success btn-lg"
                  >
                    Start A Campaign
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-5 pt-2 mt-lg-0 pt-lg-0">
              <div class="px-2 position-relative">
                <img
                  src="images\Section 2.png"
                  class="img-fluid mx-auto d-block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="customersection">
        <div class="container pt-5 pb-5">
          <h2 class="title mb-4 text-center">
            {" "}
            What you can expect from this journey with us
          </h2>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row">
                <div class="col-md-6">
                  <div class="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div class="icon text-primary text-center mx-auto">
                      <Shield />
                    </div>
                    <div class="flex-1 ms-4">
                      <a href="javascript:void(0)" class="title text-dark h5">
                        Enhancing Customer Experience
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Station feedback units across the customer journey &
                        measure experience
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div class="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div class="icon text-primary text-center mx-auto">
                      <Aperture />
                    </div>
                    <div class="flex-1 ms-4">
                      <a href="javascript:void(0)" class="title text-dark h5">
                        Optimizing Customer Acquisition
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Trace the ideal customer persona and optimize your
                        efforts to attract the right ones
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mt-4 pt-2">
                  <div class="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div class="icon text-primary text-center mx-auto">
                      <Award />
                    </div>
                    <div class="flex-1 ms-4">
                      <a href="javascript:void(0)" class="title text-dark h5">
                        Improving Customer Retention
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Improve the customer experience at every touchpoint &
                        increase retention
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mt-4 pt-2">
                  <div class="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div class="icon text-primary text-center mx-auto">
                      <Lock />
                    </div>
                    <div class="flex-1 ms-4">
                      <a href="javascript:void(0)" class="title text-dark h5">
                        Boosting Customer Loyalty
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Understand customer preferences, be proactive, and win
                        hearts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container  salessection">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <img
                src="images/interactiondesign-amico.svg"
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="section-title ms-lg-5">
                <h4 class="title mb-4">
                  Boost customer happiness by listening and taking action
                </h4>

                <h5>
                  <ChevronRight /> Measuring
                </h5>
                <p class="text-muted para-desc ms-4 ps-2">
                  Measure customer satisfaction by monitoring your NPS over time
                  and benchmarking against your peers
                </p>
                <h5>
                  <ChevronRight /> Analyze
                </h5>
                <p class="text-muted para-desc ms-4 ps-2">
                  Analyze feedback to pinpoint key drivers and revenue impact so
                  you can take actions that are meaningful to your business
                </p>
                <h5>
                  <ChevronRight /> Retention
                </h5>
                <p class="text-muted para-desc ms-4 ps-2">
                  Improve retention and loyalty by listening and responding to
                  customer feedback directly from the platform
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container brand py-4">
          <div class="row justify-content-center">
            <h2 class="title mb-4 text-center mt-5">
              Turn customers into brand ambassadors
            </h2>
            <div class="col-lg-3 col-md-6 col-12">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Website Feedback</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Customer Effort Score</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Customer Satisfaction</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Transactional NPS</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="container mt-3 brand pt-4 pb-5">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6 col-12">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Product Feedback</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">User Experience</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Relational NPS</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">Customer Exit Surveys</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <section className="needs bg-dark pb-5 pt-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 col-md-6 order-1 order-md-2">
                <img src="images/1.png" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="section-title me-lg-5">
                  <h2 class="title mb-4 lh-base">
                    Understand customer needs with feedback throughout their
                    journey
                  </h2>
                  <ul class="list-unstyled text-light lh-base">
                    <li class="mb-0">
                      <span class="tx-success h5 me-2">
                      <ChevronRight/>
                      </span>
                      Go beyond satisfaction to gather input on customer
                      service, product, and win/loss surveys
                    </li>
                    <li class="mb-0">
                      <span class="tx-success h5 me-2 lh-base">
                      <ChevronRight/>
                      </span>
                      Get insights from your customers anytime,
                      anywhere—including social media, QR code, and even offline
                    </li>
                    <li class="mb-0">
                      <span class="tx-success h5 me-2 lh-base">
                        <ChevronRight/>
                      </span>
                      From advanced logic to 15+ question types, get the
                      flexibility you need to gather any type of customer
                      feedback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <img
                src="images/interactiondesign-amico.svg"
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="section-title ms-lg-5">
                <h4 class="title mb-4 tx-success lh-base">
                  Create a culture of customer centricity by making feedback
                  available to your teams
                </h4>

                <ul class="list-unstyled text-muted lh-base">
                  <li class="mb-0">
                    <span class="tx-success h5 me-2">
                     <ChevronRight/>
                    </span>
                    Contextualize customer data by connecting survey feedback to
                    your CRM or another system of record
                  </li>
                  <li class="mb-0">
                    <span class="tx-success h5 me-2">
                     <ChevronRight/>
                    </span>
                    Empower your team to make better decisions with effortless
                    collaboration on survey data
                  </li>
                  <li class="mb-0">
                    <span class="tx-success h5 me-2">
                    <ChevronRight/>
                    </span>
                    Automate customer feedback and follow-up actions by
                    triggering surveys from your existing business systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactusjumbotron />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Customerxp;
