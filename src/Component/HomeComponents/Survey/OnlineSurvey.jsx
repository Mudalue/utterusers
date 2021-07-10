import React from "react";
import Navbar from "../../Others/Navbar";
import {
  Heart,
  Smile,
  Bookmark,
  Thermometer,
  UserCheck,
  Search,
  Gift,
  Book,
  ArrowRight,
  Edit2,
  BarChart,
  PlusCircle,
  Download,
  CheckCircle,
} from "react-feather";
import Footer from "../../Others/Footer";
import Contactusjumbotron from "../../Others/Contactusjumbotron";
const OnlineSurvey = () => {
  return (
    <div>
      <Navbar />
      <section className="onlinesurvey">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div class="title-heading mt-4">
                {/* <div
                  class="alert alert-transparent alert-pills shadow badge rounded-pill"
                  role="alert"
                >
                  <span class="badge rounded-pill bg-info me-1">
                    Surveys: Built to drive your success
                  </span>
                  <span class="content "></span>
                </div> */}
                <h1 class="heading mb-3">Turn feedback into results</h1>
                <p class="para-desc text-light">
                  Our survey platform makes it easy to measure and understand
                  feedback so you can drive growth and innovation.
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
            <div class="col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="classic-app-image position-relative">
                <div class="position-relative">
                  <img
                    src="images\survey 4.svg"
                    class="img-fluid mover mx-auto d-block "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section p-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Heart />
                  </div>
                  <div class="mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Customer satisfaction surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Smile />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Employee satisfaction surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Bookmark />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Market research surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <UserCheck />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Net Promoter Score
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Search />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Marketing surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Thermometer />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Healthcare surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Gift />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Non-profit surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-12  pt-2">
              <div class="card explore-feature border-0 rounded text-center bg-white">
                <div class="card-body py-5">
                  <div class="icon rounded-circle shadow-lg d-inline-block">
                    <Book />
                  </div>
                  <div class="survey mt-3">
                    <h5>
                      <a href="javascript:void(0)" class="title text-dark">
                        Student surveys, teacher surveys, school surveys
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="text-center mt-4 pt-2">
                <button
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#createcampaign"
                  class="btn btn-success btn-lg"
                >
                  Start A Survey <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="allsurvey mt-4 p-5 bg-dark">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-12 order-1 order-lg-2 ">
              <div class="section-title  text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0">
                <h1 className="text-center">Surveys</h1>
                <h4 class="title mt-3 mb-4 text-center">All in one place</h4>
              </div>
            </div>

            <div class="col-lg-7 col-12 order-2 order-lg-1">
              <div class="row me-lg-5">
                <div class="col-md-6 col-12">
                  <div class="row">
                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon rounded-circle shadow-lg d-inline-block  text-success text-center mx-auto">
                          <Edit2 />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Easily create surveys
                          </a>
                          <p class="text-light mt-2 mb-0">
                            It is a long established fact that a reader at its
                            layout.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon rounded-circle shadow-lg d-inline-block  text-success text-center mx-auto">
                          <BarChart />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a href="javascript:void(0)" class="title h5 ">
                            Gather feedback via weblink, email, chat, and more.
                          </a>
                          <p class="text-light mt-2 mb-0">
                            It is a long established fact that a reader at its
                            layout.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-12">
                  <div class="row pt-lg-4 mt-lg-4">
                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon rounded-circle shadow-lg d-inline-block  text-success text-center mx-auto">
                          <PlusCircle />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a href="javascript:void(0)" class="title h5 ">
                            Analyze your results{" "}
                          </a>
                          <p class="text-light mt-2 mb-0">
                            It is a long established fact that a reader at its
                            layout.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon rounded-circle shadow-lg d-inline-block  text-success text-center mx-auto">
                          <Download />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a href="javascript:void(0)" class="title h5">
                            Export your results
                          </a>
                          <p class="text-light mt-2 mb-0">
                            It is a long established fact that a reader at its
                            layout.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 d-lg-none d-block text-center">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#createcampaign"
                  class="btn btn-primary"
                >
                  Start Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section overflow-hidden mt-5">
        <div class="container mt-100 mt-60">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5">
              <div class="app-feature-shape-left position-relative">
                <div class="text-center text-md-start">
                  <img src="images\accountancy.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3 ">Powerful Analysis</h1>
                <p class="para-desc text-muted">Analyze your data—in a snap.</p>
                <ul class="list-unstyled ">
                  <li class="mb-0 ">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Get quick insights
                  </li>
                  <li class="mb-0 pt-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Dig deeper into your data with combined filters and crosstab
                    reports.{" "}
                  </li>
                  <li class="mb-0 pt-1">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Measure responses against industry benchmarks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-5">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">Fast Survey Creation</h1>
                <p class="para-desc text-muted">
                  Everything you need to create the best surveys
                </p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Get access to survey templates that speak to customers,
                    employees, or your target audience.
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Choose from expert-written sample questions to include in
                    your surveys.
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Explore our best practices for creating the even the most
                    sophisticated surveys.
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6 col-md-5 order-1 order-md-2">
              <div class="app-feature-shape-right position-relative">
                <div class="text-center text-md-end">
                  <img src="images\funnel.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-5 mb-5">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5">
              <div class="app-feature-shape-left position-relative">
                <div class="text-center text-md-start">
                  <img src="images\welcome.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">Easy Sharing</h1>
                <p class="para-desc text-muted">
                  Share survey templates and creative assets with your team.
                </p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Use flexible permission controls to share surveys securely.
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Show off your results in beautiful formats with custom
                    charts, graphs, and dashboards.
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Export your data in popular formats such as CSV, XLS, PDF,
                    PPT, and SPSS.
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

export default OnlineSurvey;
