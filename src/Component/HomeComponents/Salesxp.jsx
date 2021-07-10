import React from "react";
import Navbar from "../Others/Navbar";
import { Aperture, ThumbsUp, Lock, Award, Shield , ChevronRight} from "react-feather";
import Mrkjumbotron from "../Others/Mrkjumbotron";
import Footer from "../Others/Footer";
const Salesxp = () => {
  return (
    <div>
      <Navbar />
      <section class="salesexp">
        <div class="container">
          <div class="row mt-4 align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="title-heading me-lg-4">
                {/* <div class="alert alert-white alert-pills shadow" role="alert">
                  <span class="badge rounded-pill bg-primary me-1">Sales</span>
                  <span class="content">Experience</span>
                </div> */}
                <h1 class="heading fw-bold mb-3">Enrich sales experience</h1>
                <p class="para-desc">
                  Map the sales journey right, station feedback points at every
                  touchpoint, and improve continually.
                </p>
                <div class="mt-4 pt-2">
                  <button
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#createcampaign"
                    class="btn btn-success btn-lg"
                  >
                    Start A Survey
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-5 pt-2 mt-lg-0 pt-lg-0">
              <div class="px-2 position-relative">
                <img
                  src="images\market_research.svg"
                  class="img-fluid mx-auto d-block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="salessection">
        <div class="container pt-5 pb-5">
          <h2 class="title mb-4 text-center">
            {" "}
            What you can expect from this journey with us?
          </h2>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row">
                <div class="col-md-6">
                  <div class="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div class="icon text-primary text-center mx-auto">
                      <ThumbsUp />
                    </div>
                    <div class="flex-1 ms-4">
                      <a href="javascript:void(0)" class="title text-dark h5">
                        Speedened Onboarding
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Understand client requirements quickly and onboard
                        customers quickly. Avoid pursuing junk contacts.
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
                        Improve Demos & Sales Calls
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Bridge the gap between customer expectations and your
                        delivery. Tune your presentation and continually serve a
                        hassle-free sales journey.
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
                        Increase Conversion Rates
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Enhance your B2B sales experience and witness a hike in
                        customer conversion rates. Collect feedback at all
                        touchpoints & improve.
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
                        Enhance Brand Loyalty
                      </a>
                      <p class="text-muted mt-2 mb-0">
                        Enhance every experience touchpoint: marketing, sales,
                        product, and customer. Drive loyalty & brand advocacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container shield">
          <div class="row justify-content-center">
            <h2 class="title mb-4 text-center mt-5 mb-3">
              Blueprint the perfect sales journey Win deals & hearts.
            </h2>
            <div class="col-lg-3 col-md-6 col-12">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">
                      Prospecting <br />& Leads
                    </h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">
                      Scheduling
                      <br /> Appointments
                    </h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">
                      Gathering <br />& Assessment
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="container shield mt-3 ">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6 col-12">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">
                      Post-demo <br />
                      Surveys
                    </h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <a href="javascript:void(0)">
                <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                  <Shield className="text-success" />
                  <div class="flex-1 ms-3">
                    <h4 class="title mb-0 text-dark">
                      Accounts Won <br /> & Lost
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <section className="salessection bg-dark">
          <h2 class="title mb-4 text-center mt-100">
            Build lasting clientele. Retention & Loyalty.
          </h2>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 col-md-6 order-1 order-md-2">
                <img src="images/1.png" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="section-title ms-lg-5">
                  <h5>
                    <ChevronRight/>{" "}
                    Pre-sales Surveys
                  </h5>
                  <p class="text-light para-desc ms-4 ps-2">
                    Optimize your leads-effort. Sort out the sales-qualifying
                    leads from the junk ones. Create personalized pre-sales
                    surveys for each client and fast track all the sales
                    opportunities.
                  </p>
                  <h5>
                    <ChevronRight/>{" "}
                    Demo Feedback
                  </h5>
                  <p class="text-light para-desc ms-4 ps-2">
                    Collect feedback about the demos you host and improve it.
                    Was a feature not explained properly? Was the use-case not
                    understood? Was there a communication gap? Find out, fix it,
                    and make the sales journey breezy.
                  </p>
                  <h5>
                    <ChevronRight/>{" "}
                    Post-sales Engagement Surveys
                  </h5>
                  <p class="text-light para-desc ms-4 ps-2">
                    Share post-sales surveys to your now-clients and understand
                    their sales experience and how they like the journey so far.
                    If there’s anything amiss, take necessary measures for
                    improvement to improve the sales experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container pt-4 pb-4">
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
                <h5>
                  <ChevronRight/>{" "}
                  Customer Satisfaction Surveys
                </h5>
                <p class="text-muted para-desc ms-4 ps-2">
                  Measure CSAT and understand how satisfied customers are with
                  your product and services. Was the sales experience good? Did
                  the support query end in proper resolution? Find out and
                  improve.
                </p>
                <h5>
                  <ChevronRight/>{" "}
                  Transactional & Relational NPS
                </h5>
                <p class="text-muted para-desc ms-4 ps-2">
                  Assess brand loyalty and customer advocacy by sharing NPS
                  surveys. Transactional surveys after every interaction with
                  your customer-facing teams and relational NPS surveys for
                  overall brand perception.
                </p>
                <h5>
                  <ChevronRight/>{" "}
                  Customer Pulse Surveys
                </h5>
                <p class="text-muted para-desc ms-4 ps-2">
                  Automate customer pulse surveys for regular intervals using
                  Recurring Feature. Set the frequency of sharing, configure it
                  once, and leave the rest to us. Improve not just the sales
                  experience but the entire journey a customer has with you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Mrkjumbotron/>
     <div className="footer">
         <Footer/>
     </div>
    </div>
  );
};

export default Salesxp;
