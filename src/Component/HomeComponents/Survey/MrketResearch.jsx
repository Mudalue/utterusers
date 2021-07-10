import React from "react";
import Navbar from "../../Others/Navbar";
import {
  Airplay,
  CreditCard,
  Clipboard,
  Columns,
  ChevronRight,
  CheckCircle,
  Search,
} from "react-feather";
import Footer from "../../Others/Footer";
import Mrkjumbotron from "../../Others/Mrkjumbotron";
const MrketResearch = () => {
  return (
    <div>
      <Navbar />
      <section class="mrkresearch">
        <div class="container">
          <div class="row mt-4 align-items-center">
            <div class="col-lg-7 col-md-6">
              <div class="title-heading me-lg-4">
                {/* <div class="alert alert-white alert-pills shadow" role="alert">
                  <span class="badge rounded-pill bg-primary me-1">
                    Reserch
                  </span>
                  <span class="content">Markets and Customers</span>
                </div> */}
                <h1 class="heading fw-bold mb-3">
                  Get insights with our <br /> Market research platform
                </h1>
                <p class="para-desc text-muted">
                  Drive better decisions by capturing market needs, industry
                  trends, and buyer feedback exactly when you need it. Keep pace
                  with the speed your market moves.
                </p>
                <div class="mt-4 pt-2">
                <button
                    type="button"
                    class="btn btn-success btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Start a survey
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-5 mt-5 pt-2 mt-lg-0 pt-lg-0">
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
      <section class="mrksection bg-light pt-4 pb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="features-absolute">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-12">
                    <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div class="icon text-primary text-center mx-auto">
                        <Airplay />
                      </div>

                      <div class="card-body p-0 ">
                        <h5 class="mt-4">
                          <a href="#market" class="title text-dark">
                            Market Knowledge
                          </a>
                        </h5>
                        <p class="text-muted">
                          The most well-known which is said to have originated
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0 pt-2 pt-md-0">
                    <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div class="icon text-primary text-center mx-auto">
                        <Clipboard />
                      </div>

                      <div class="card-body p-0 ">
                        <h5 class="mt-4">
                          <a href="#product" class="title text-dark">
                            Product Innovation
                          </a>
                        </h5>
                        <p class="text-muted">
                          The most well-known which is said to have originated
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div class="icon text-primary text-center mx-auto">
                        <CreditCard />
                      </div>

                      <div class="card-body p-0 ">
                        <h5 class="mt-4">
                          <a href="#brand" class="title text-dark">
                            Brand Development
                          </a>
                        </h5>
                        <p class="text-muted">
                          The most well-known which is said to have originated
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div class="icon text-primary text-center mx-auto">
                        <Columns />
                      </div>

                      <div class="card-body p-0 ">
                        <h5 class="mt-4">
                          <a href="#customer" class="title text-dark">
                            Consumer Reserch
                          </a>
                        </h5>
                        <p class="text-muted">
                          The most well-known which is said to have originated
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mrk pt-5 pb-5">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="position-relative">
                <img src="images\sheet.png" class="img-fluid mx-auto" alt="" />
              </div>
            </div>

            <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="section-title ms-lg-4">
                <h4 class="title mb-4">
                  The place <br /> For all your market research needs{" "}
                </h4>
                <p class="text-muted">
                  Whatever your goals, we’ve got the research solution. <br />
                  Choose from:
                </p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Product development
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Consumer segmentation
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Shopper insights
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Market sizing
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Industry tracking
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Creative testing
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Brand tracking
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Package testing
                  </li>
                  <li class="mb-0 pb-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Pricing research
                  </li>
                </ul>
                <button
                  href="javascript:void(0)"
                  class="btn btn-success btn-lg mt-3"
                >
                  Contact Us <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="market" class="market">
        <div class="container mrk">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <div class="section-title mb-4 pb-1">
                <h4 class="text-success">Market</h4>
                <h5 class="title mb-4">Market Knowledge</h5>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Airplay />
                </div>

                <div class="card-body p-0 ">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Market Tracker
                    </a>
                  </h5>
                  <p class="text-muted">
                    Monitor market dynamics for a specific product category over
                    time.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Clipboard />
                </div>

                <div class="card-body p-0 ">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Consumer Segmentation
                    </a>
                  </h5>
                  <p class="text-muted">
                    Understand the demographic and behavioral traits of your top
                    buyer segments.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <CreditCard />
                </div>

                <div class="card-body p-0 ">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Usage & Attitudes
                    </a>
                  </h5>
                  <p class="text-muted">
                    Learn about consumer preferences, habits, and purchase
                    behaviors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="product" class="mrkproduct bg-white pt-0">
        <div class="container">
          <div class="container mrk">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="section-title mb-4 pb-2">
                  <h4 class="text-success">Product</h4>
                  <h5 class="title mb-4">Product Innovation</h5>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Airplay />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Product Concept Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Test product ideas and compare against industry
                      benchmarks.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Clipboard />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Product Optimization (Conjoint)
                      </a>
                    </h5>
                    <p class="text-muted">
                      Uncover feature and service bundles that maximize success.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <CreditCard />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Feature Importance (MaxDiff)
                      </a>
                    </h5>
                    <p class="text-muted">
                      Understand which product features influence decisions and
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Columns />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Packaging Design Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Get feedback from your target audience on packaging
                      designs.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Search />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Pricing (Van Westendorp)
                      </a>
                    </h5>
                    <p class="text-muted">
                      Find the optimal price point and range for your product or
                      service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brand" class="mrkbrand bg-dark pt-0 pb-5">
        <div class="container">
          <div class="container mrk">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="section-title mb-4 pb-2">
                  <h4 class="text-primary">Brand</h4>
                  <h5 class="title mb-4">Brand Development</h5>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Airplay />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Brand Tracker
                      </a>
                    </h5>
                    <p class="text-muted">
                      Measure your brand’s performance across markets, over
                      time.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Clipboard />
                  </div>

                  <div class="card-body p-0">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Ad Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Test your marketing and advertising campaigns before you
                      launch.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <CreditCard />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Messaging & Claims Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Get feedback on messages, taglines, product copy, and
                      more.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Columns />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Brand Name Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Test out different names for your brand, product, or
                      service.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Search />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Logo Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Uncover the optimal logo design for your brand or
                      products.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div class="icon text-primary text-center mx-auto">
                    <Search />
                  </div>

                  <div class="card-body p-0 ">
                    <h5 class="mt-4">
                      <a href="javascript:void(0)" class="title text-dark">
                        Video Analysis
                      </a>
                    </h5>
                    <p class="text-muted">
                      Find out how your videos resonate with your target
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="customer" class="mrkcustomers bg-white pt-0">
        <div class="container mrk">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <div class="section-title">
                <h4 class="text-success">Consumer</h4>
                <h5 class="title">Consumer Research</h5>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Airplay />
                </div>

                <div class="card-body p-0 ">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Brand Tracker
                    </a>
                  </h5>
                  <p class="text-muted">
                    Measure your brand’s performance across markets, over time.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Clipboard />
                </div>

                <div class="card-body p-0">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Ad Analysis
                    </a>
                  </h5>
                  <p class="text-muted">
                    Test your marketing and advertising campaigns before you
                    launch.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <CreditCard />
                </div>

                <div class="card-body p-0 ">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Messaging & Claims Analysis
                    </a>
                  </h5>
                  <p class="text-muted">
                    Get feedback on messages, taglines, product copy, and more.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Columns />
                </div>

                <div class="card-body p-0 ">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Brand Name Analysis
                    </a>
                  </h5>
                  <p class="text-muted">
                    Test out different names for your brand, product, or
                    service.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Search />
                </div>

                <div class="card-body p-0">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Logo Analysis
                    </a>
                  </h5>
                  <p class="text-muted">
                    Uncover the optimal logo design for your brand or products.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Search />
                </div>

                <div class="card-body p-0">
                  <h5 class="mt-4">
                    <a href="javascript:void(0)" class="title text-dark">
                      Video Analysis
                    </a>
                  </h5>
                  <p class="text-muted">
                    Find out how your videos resonate with your target audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mrkjumbotron />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MrketResearch;
