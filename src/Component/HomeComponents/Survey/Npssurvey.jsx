import React from "react";
import {
  CheckCircle,
  Bell,
  Airplay,
  TrendingUp,
  BarChart,
  BarChart2,
  Mail,
  File,
  List,
} from "react-feather";
import Contactusjumbotron from "../../Others/Contactusjumbotron";
import Footer from "../../Others/Footer";
import Navbar from "../../Others/Navbar";

const Npssurvey = () => {
  const style = {
    maxWidth: 300,
  };
  return (
    <div>
      <Navbar />
      <section class="npssurvey" id="home">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-7">
              <div class="title-heading mt-4">
                {/* <div
                  class="alert alert-transparent alert-pills shadow"
                  role="alert"
                >
                  <span class="badge rounded-pill bg-primary me-1">
                    Surveys
                  </span>
                  <span class="content">Built to drive your success</span>
                </div> */}
                <h1 class="heading mb-3">Turn feedback into results</h1>
                <p class="para-desc text-muted">
                  Grow your business with a continuous feedback loop. <br />
                  NPS is one of the finest customer loyalty barometers used by
                  companies, around the world.
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

            <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="classic-app-image position-relative">
                <div class="position-relative">
                  <img
                    src="images\nps.png"
                    class="img-fluid mover mx-auto d-block "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="businessCycle">
        <div class="grid no-padding">
          <svg viewBox="0 0 1380 60" class="svg-piece">
            <path
              id="arch"
              width="1380px"
              height="60px"
              fill="#f5f5f5"
              d="M0,0h1380c0,31.3,0,31.3,0,60C1139,24.1,914.4,0.2,690,0C464.7-0.2,239.5,23.4,0,60
                C0,45.3,0,45.3,0,0z"
            ></path>
          </svg>
          <div class="flex__container">
            <div class="watch__block">
              <h2 class="title_h1" style={style}>
                How NPS Surveys works
              </h2>
            </div>
            <div class="slider-circle">
              <div class="slide-item">
                <div class="icon icon-rocket"></div>
                <h3 class="rest__title_h4">1. Listen</h3>
                <p class="description_small">
                  Collect customer feedback. Cover all crucial touchpoints.
                </p>
              </div>

              <div class="slide-item">
                <div class="icon icon-schedule"></div>
                <h3 class="rest__title_h4">2. Analyze</h3>
                <p class="description_small">
                  Track NPS. Study feedback. Uncover loyalty-driving factors.
                </p>
              </div>

              <div class="slide-item">
                <div class="icon icon-growth"></div>
                <h3 class="rest__title_h4">3. Improve</h3>
                <p class="description_small">
                  Learn from your customers. Take action. Measure progress.
                </p>
                <a>More</a>
              </div>

              <div class="slide-item">
                <div class="icon icon-portfolio"></div>
                <h3 class="rest__title_h4">4. Grow</h3>
                <p class="description_small">
                  Gather reviews from promoters. Acquire new customers.
                  Progress.
                </p>
              </div>

              <div class="slide-item">
                <div class="icon icon-idea"></div>
                <h3 class="rest__title_h4">5. Repeat</h3>
                <p class="description_small">
                  Your business has expanded, and need to continue the process
                  to continue growing.
                </p>
              </div>

              <div class="next"></div>
            </div>
          </div>
        </div>
      </div>
      <section class="npssection">
        <div class="container">
          <div class="row ">
            <div class="col-12 text-center">
              <div class="section-title">
                <h4 class="title mb-4 text-center">Must-have Features</h4>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card bg-light rounded shadow border-0">
                <div className="icon text-center mx-auto">
                  <List />
                </div>

                <div class="card-body text-center mt-4">
                  <h5 class="card-title">Add Dynamic Lists & segment</h5>
                  <p class="text-muted mt-3 mb-0">
                    Create dynamic lists and segment your respondents easily
                    based on any criteria. Get an in-depth analysis of your
                    customer persona and manage follow-ups easily.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card bg-light rounded shadow border-0">
                <div className="icon text-center mx-auto">
                  <File />
                </div>

                <div class="card-body mt-4">
                  <h5 class="card-title">Automate & get things done</h5>
                  <p class="text-muted mt-3 mb-0">
                    Automate net promoter score surveys based on your
                    preference. Choose the time, frequency, and add the list of
                    contacts. Configure & set in the recurring mode. Track NPS
                    over time and benchmark with industry standards.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card bg-light rounded shadow border-0">
                <div className="icon text-center mx-auto">
                  <BarChart2 />
                </div>

                <div class="card-body mt-4">
                  <h5 class="card-title">
                    Analyze real-time dynamic Dashboard
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Monitor Net Promoter Score with time. View responses each
                    from promoters, passives, and detractors. Filter responses
                    and gather insights.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card bg-light rounded shadow border-0">
                <div className="icon text-center mx-auto">
                  <BarChart2 />
                </div>

                <div class="card-body mt-4">
                  <h5 class="card-title">Conduct Sentiment Analysis</h5>
                  <p class="text-muted mt-3 mb-0">
                    Decode customer sentiments easily with sentiment analysis.
                    Pick out their insights and get a word cloud to have a clear
                    & concise understanding of the loyalty factor.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card bg-light rounded shadow border-0">
                <div className="icon text-center mx-auto">
                  <File />
                </div>

                <div class="card-body mt-4">
                  <h5 class="card-title">
                    Distribute easily via SMS, Email, In-app
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Embed an NPS survey in your app, share Net Promoter Score
                    survey emails, or send SMS surveys to your customers. Make
                    it convenient for your customers and for you too!
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div class="card bg-light rounded shadow border-0">
                <div className="icon text-center mx-auto">
                  <Mail />
                </div>

                <div class="card-body mt-4">
                  <h5 class="card-title">
                    {" "}
                    Share follow-up questions & emails
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Add follow-up questions to know the ‘Why’ behind everything.
                    It’s best to have an open-ended text question to get
                    in-depth insights. Share custom follow-up emails to your
                    promoters, passives, & detractors, and close the loop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="npsprocess bg-dark p-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-12 order-1 order-lg-2">
              <div class="section-title text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0">
                <span class="badge rounded-pill bg-soft-primary">Services</span>
                <h4 class="title mt-3 mb-4">
                  Why use NPS? <br /> And is the NPS worth investing in?
                </h4>
                <p class="text-light para-desc mx-auto ms-lg-auto mb-0">
                  When you ask customers the Net Promoter Score question, you’re
                  essentially asking them whether or not they’re taking the time
                  to say positive things about your company or brand.
                </p>
                <div class="mt-4 d-lg-block d-none">
                  <button href="javascript:void(0)" class="btn btn-success btn-lg">
                    Start a campaign
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-12 order-2 order-lg-1">
              <div class="row me-lg-5">
                <div class="col-md-6 col-12">
                  <div class="row">
                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon text-primary text-center mx-auto">
                          <TrendingUp />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Simple and quick
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            All your responses at one place. Assign responses as
                            tickets to any employee in your organization. Check
                            the status and track it right from the assignment,
                            investigation, and resolution.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon text-primary text-center mx-auto">
                          <Airplay />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Standardized
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            Widely known as the standard for measuring and
                            improving customer loyalty, the NPS is trusted by
                            brands like American Express, Apple, GE, JetBlue,
                            and Kaiser Permanente.
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
                        <div class="icon text-primary text-center mx-auto">
                          <BarChart />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Quantifiable{" "}
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            Management can see how well your company is
                            performing with one simple metric. The NPS
                            introduces common terminologies that are easy to
                            understand by everyone.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon text-primary text-center mx-auto">
                          <Bell />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Benchmarkable
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            One of the most valuable benefits is the ability to
                            see how your organization stacks up against the
                            competition. Because hundreds of companies using
                            NPS.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 d-lg-none d-block text-center">
                <a href="javascript:void(0)" class="btn btn-primary">
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section overflow-hidden">
        <div class="container pt-5 pb-5">
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
                <h1 class="title mb-3">Powerful Analysis</h1>
                <p class="para-desc text-muted">Analyze your data—in a snap.</p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Get quick insights
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <CheckCircle />
                    </span>
                    Dig deeper into your data with combined filters and crosstab
                    reports.{" "}
                  </li>
                  <li class="mb-0">
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

        <div class="container pb-5 pt-5">
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

        <div class="container pt-5, pb-5">
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

export default Npssurvey;
