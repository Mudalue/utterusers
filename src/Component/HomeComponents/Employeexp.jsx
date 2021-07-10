import React from "react";
import Navbar from "../Others/Navbar";
import { Airplay, Edit, Mail , ArrowRightCircle, Clock, Calendar, Clipboard, Book, ChevronRight} from "react-feather";
import Footer from "../Others/Footer";
import Contactusjumbotron from  "../Others/Contactusjumbotron";

const Employeexp = () => {
  return (
    <div>
      <Navbar />
      <section class="employeexp">
        <div class="container">
          <div class="row mt-4 align-items-center p-5">
            <div class="col-lg-6 col-md-6">
              <div class="title-heading me-lg-4">
                {/* <div class="alert alert-white alert-pills shadow" role="alert">
                  <span class="badge rounded-pill bg-primary me-1">
                    Employee
                  </span>
                  <span class="content">Experience</span>
                </div> */}
                <h1 class="heading fw-bold mb-3">
                  Build a better workplace. <br /> Get candid employee feedback.
                </h1>
                <p class="para-desc text-light">
                  Gauge an employee’s happiness, understand their job
                  satisfaction, or analyze the workplace-climate. <br />
                  Elevate employee experience, build a fabulous work culture, &
                  boost productivity.
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

      <section class=" employeesection">
        <div class="container">
          <div class="row p-5">
            <div class="col-md-4 col-12 ">
              <div class="features text-center">
                <div class="image position-relative d-inline-block">
                  <Airplay />
                </div>

                <div class="mt-4">
                  <h5>Recruiting</h5>
                  <p class="text-muted mb-0 lh-lg">
                    Measure awareness of your employer brand and use recruiting
                    satisfaction surveys to improve the experience.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 mt-5 mt-sm-0">
              <div class="features text-center">
                <div class="image position-relative d-inline-block">
                  <Mail />
                </div>

                <div class=" mt-4">
                  <h5>Onboarding</h5>
                  <p class="text-muted mb-0 lh-lg">
                    Get new hires integrated faster. Use quizzes to reinforce
                    your existing training programs and collect feedback from
                    new hires.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 mt-5 mt-sm-0">
              <div class="features text-center">
                <div class="image position-relative d-inline-block">
                  <Edit />
                </div>

                <div class="mt-4">
                  <h5>Performance assessment</h5>
                  <p class="text-muted mb-0 lh-lg">
                    Get candid, real-time feedback from managers, peers, and
                    more with 360 surveys and performance review surveys.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-md-4 col-12">
              <div class="features text-center">
                <div class="image position-relative d-inline-block">
                  <Airplay />
                </div>

                <div class=" mt-4">
                  <h5>Learning and development</h5>
                  <p class="text-muted mb-0 lh-lg">
                    Develop better training programs and track employee
                    development with real-time surveys and quizzes.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 mt-5 mt-sm-0">
              <div class="features text-center">
                <div class="image position-relative d-inline-block">
                  <Mail />
                </div>

                <div class=" mt-4">
                  <h5>Employee engagement</h5>
                  <p class="text-muted mb-0 lh-lg">
                    Measure and track engagement with surveys or choose our
                    automated employee engagement solution.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 mt-5 mt-sm-0">
              <div class="features text-center">
                <div class="image position-relative d-inline-block">
                  <Edit />
                </div>

                <div class=" mt-4">
                  <h5>Exit feedback</h5>
                  <p class="text-muted mb-0 lh-lg">
                    Capture candid feedback with exit surveys. Share results
                    with teams and managers to see if any improvements are
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="employ bg-dark">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                  <h1 class="title mb-4 tx-success">
                    Get Employee Powered Data whenever you need it
                  </h1>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-md-5 mt-4 py-4 mb-5">
                <ul
                  class="nav nav-pills bg-dark nav-justified flex-column mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item bg-success rounded-md">
                    <a
                      class="nav-link rounded-md active"
                      id="dashboard"
                      data-bs-toggle="pill"
                      href="#dash-board"
                      role="tab"
                      aria-controls="dash-board"
                      aria-selected="false"
                    >
                      <div class="p-3 text-start">
                        <h5 class="title text-light">Recruit</h5>
                        <p class="text-light tab-para mb-0">
                          Attract and recruit talented people to your
                          organization
                        </p>
                      </div>
                    </a>
                  </li>

                  <li class="nav-item bg-success rounded-md mt-4">
                    <a
                      class="nav-link rounded-md"
                      id="timeline"
                      data-bs-toggle="pill"
                      href="#time-line"
                      role="tab"
                      aria-controls="time-line"
                      aria-selected="false"
                    >
                      <div class="p-3 text-start">
                        <h5 class="title">Onboard</h5>
                        <p class="text-light tab-para mb-0">
                          Get all your new hires up to speed faster
                        </p>
                      </div>
                    </a>
                  </li>

                  <li class="nav-item bg-success rounded-md mt-4">
                    <a
                      class="nav-link rounded-md"
                      id="paymentmanagement"
                      data-bs-toggle="pill"
                      href="#payment-management"
                      role="tab"
                      aria-controls="payment-management"
                      aria-selected="false"
                    >
                      <div class="p-3 text-start">
                        <h5 class="title text-light">Develop</h5>
                        <p class="text-light tab-para mb-0">
                          Turn more of your employees into star performers
                        </p>
                      </div>
                    </a>
                  </li>

                  <li class="nav-item bg-success rounded-md mt-4">
                    <a
                      class="nav-link rounded-md"
                      id="fileintegrate"
                      data-bs-toggle="pill"
                      href="#file-integrate"
                      role="tab"
                      aria-controls="file-integrate"
                      aria-selected="false"
                    >
                      <div class="p-3 text-start">
                        <h5 class="title text-light">Retain</h5>
                        <p class="text-light tab-para mb-0">
                          Raise engagement for happier, more productive
                          employees
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-7 col-12 mt-4 pt-2 ">
                <div class="tab-content ms-lg-4" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="dash-board"
                    role="tabpanel"
                    aria-labelledby="dashboard"
                  >
                    <h5 className="text-light">
                     <ArrowRightCircle className="tx-success"/>{" "}
                      Better target potential candidates
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Use surveys at recruiting events to learn about candidates
                      and secure more than just contact info.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Stay competitive with a strong employer brand
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Test your messaging and see if talented candidates are
                      aware of your mission, values, and perks.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Enhance the recruiting experience for candidates
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Get feedback on your recruiting experience to identify
                      what’s working well and what to improve.
                    </p>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="time-line"
                    role="tabpanel"
                    aria-labelledby="timeline"
                  >
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Reinforce your onboarding programs
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Our platform includes quizzes to ensure employees
                      understand company values, protocols, and more.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Create better onboarding experiences
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Inform your onboarding strategies and see where and how to
                      improve with feedback from new hires.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Give ongoing support to new employees
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Check in early and often with surveys. Easily identify if
                      a new hire is struggling or needs additional help.
                    </p>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="payment-management"
                    role="tabpanel"
                    aria-labelledby="paymentmanagement"
                  >
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Give every employee comprehensive feedback
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Create a 360 review process to provide employees with
                      positive and constructive input.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Create better learning and development programs
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Measure the effectiveness of existing programs and get
                      feedback before investing in new ones.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Measure and track progress of teams and more
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Identify which teams are working well and which ones need
                      additional resources, training, and more.
                    </p>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="file-integrate"
                    role="tabpanel"
                    aria-labelledby="fileintegrate"
                  >
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Measure engagement for every employee
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Get employee feedback on job satisfaction, work-life
                      balance, team dynamics, and more.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Keep your organization aligned
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Ensure all employees, teams, and departments are working
                      strategically towards the same purpose.
                    </p>
                    <h5 className="text-light">
                    <ArrowRightCircle className="tx-success"/>{" "}
                      Improve retention rates with exit surveys
                    </h5>
                    <p class="tx-success para-desc ms-4 ps-2">
                      Find out why people are leaving your organization and
                      identify any trouble spots with exit surveys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-12">
              <div class="sticky-bar">
                <div class="section-title text-lg-start text-center mb-4 mb-lg-0 pb-2 pb-lg-0">
                  <h1 class="title mb-4">
                    Create engagements, <br /> not turnovers.
                  </h1>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-12">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 tx-success">
                          <Book/>
                        </span>
                        <div class="card-body p-0">
                          <h5 className="text-success">Training & Assessment</h5>
                          <p class="para text-muted mb-0 text-lowercase">
                            Know when an employee requires a training session
                            and schedule it. Collect feedback about the training
                            and execute ways to improve it. Conduct assessments,
                            quizzes, auto-score responses, and evaluate
                            employees quickly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 tx-success">
                          <Clipboard/>
                        </span>
                        <div class="card-body p-0 ">
                          <h5 className="text-success">Employee Engagement</h5>
                          <p class="para text-muted mb-0 text-lowercase">
                            Share routine employee pulse surveys to measure how
                            engaged a workforce your organization has. Improve
                            the culture, enquire satisfaction regarding their
                            job & benefits.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 tx-success">
                         <Clock/>
                        </span>
                        <div class="card-body p-0">
                          <h5 className="text-success">Multi-rater Assessment</h5>
                          <p class="para text-muted mb-0 text-lowercase">
                            Monitor employee activities and take steps to
                            increase employee engagement. Have multiple
                            sub-accounts for each department in your
                            organization, with centralized billing. Enable SSO.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="row">
                    <div class="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 tx-success">
                          <Calendar/>
                        </span>
                        <div class="card-body p-0">
                          <h5 className="text-success">Management Surveys</h5>
                          <p class="para text-muted mb-0 text-lowercase">
                            Set-up an all-in-one employee portal for your
                            organization. Be it ad-hoc employee requirements,
                            incident reporting, leave request form, or time-off
                            forms, make it available in one place.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 tx-success">
                          <Clipboard/>
                        </span>
                        <div class="card-body p-0">
                          <h5 className="text-success">Employee Exit Surveys</h5>
                          <p class="para text-muted mb-0 text-lowercase">
                            Uncover the reasons behind the exit of an employee.
                            Conduct exit-interview surveys and use the feedback
                            to improve the work culture of your company.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2 text-center ">
                      <button href="javascript:void(0)" class="btn btn-success btn-lg">
                        See more{" "}
                        <ChevronRight/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Contactusjumbotron/>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
};

export default Employeexp;
