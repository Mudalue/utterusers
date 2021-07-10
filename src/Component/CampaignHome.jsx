import React from "react";
import Navbar from "./Others/Navbar";
import { DollarSign, ChevronsRight, Clipboard,Airplay, CreditCard, Award } from "react-feather";
import Contactusjumbotron from "./Others/Contactusjumbotron";
import Footer from "./Others/Footer";

const CampaignHome = () => {
  return (
    <div>
      <Navbar />
      <section class="camphome bg-dark">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="title-heading mt-4">
                <h1 class="display-4 fw-bold mb-3 tx-success">
                  Get paid <br /> For taking surveys for{" "}
                  <span class="text-light fw-bold">FREE</span>
                </h1>
                <p class="para-desc text-light">
                  Take online surveys, polls and quizzes from the comfort of
                  your home and recive Money in any currency and also Bitcoin.{" "}
                </p>
              </div>

              <div class="subcribe-form mt-4 pt-3">
                <form>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="border bg-white rounded-pill p-3"
                    required
                    placeholder="Email Address"
                  />
                  <button type="submit" class="btn btn-success btn-lg">
                    Join Our Wishlist
                  </button>
                </form>
              </div>
            </div>

            <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="classic-app-image position-relative">
                <div class="position-relative">
                  <img
                    src="images\piggy bank.png"
                    class="img-fluid mover mx-auto d-block "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="campaignhow">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <div class="section-title mb-4 pb-2">
                <h1 class="title mb-3">How It Works</h1>
                <p class="text-muted para-desc mb-0 mx-auto">
                  Three easy steps of how{" "}
                  <span class="tx-success fw-bold">Utterusers</span>{" "}
                  respondents works
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 mt-4 pt-2 col-sm-12">
              <div class="card work-process border-0 rounded shadow">
                <div class="card-body">
                  <h4 class="title">Signup and tell us about yourself</h4>
                  <p class="text-muted para">
                    Register on our website and tell us about yourself so we can
                    send tailor made options for you.
                  </p>

                  <ul class="list-unstyled d-flex justify-content-between mb-0 mt-2">
                    <li class="step h1 mb-0 fw-bold">Step 01.</li>
                    <li class="step-icon">
                      <ChevronsRight/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 pt-2">
              <div class="card work-process border-0 rounded shadow">
                <div class="card-body">
                  <h4 class="title">
                    Complete available surveys, polls or quizzes
                  </h4>
                  <p class="text-muted para">
                    Select from the available options to you and complete them
                    within 1-10 minutes, try that.
                  </p>
                  <ul class="list-unstyled d-flex justify-content-between mb-0 mt-2">
                    <li class="step h1 mb-0 fw-bold">Step 02.</li>
                    <li class="step-icon">
                    <ChevronsRight/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 pt-2">
              <div class="card work-process border-0 rounded shadow">
                <div class="card-body">
                  <h4 class="title">
                    You earn real Money or Bitcoin, not points!
                  </h4>
                  <p class="text-muted para">
                    You recive your prefered option of either money or bitcoin
                    once you complete the survey.
                  </p>
                  <ul class="list-unstyled d-flex justify-content-between mb-0 mt-2">
                    <li class="step h1 mb-0 fw-bold">Step 03.</li>
                    <li class="step-icon">
                     <Clipboard/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="campsection py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-12 order-1 order-lg-2">
              <div class="section-title text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0">
                <span class="badge rounded-pill bg-success">Features</span>
                <h1 class="title mt-3 mb-4 text-success">Make Money, Doing less</h1>
                <p class="text-light para-desc mx-auto ms-lg-auto mb-0">
                  Join <span class="text-success fw-bold">Utterusers</span>{" "}
                  respondents to earn money, bitcoins and rewards
                </p>
                <div class="subcribe-form mt-4 pt-2">
                  <form>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="border bg-white rounded-pill p-3"
                      required
                      placeholder="Email Address"
                    />
                    <button
                      type="submit"
                      class="btn btn-pills btn-lg btn-success"
                    >
                      Join Our Wishlist
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-12 order-2 order-lg-1">
              <div class="row me-lg-5">
                <div class="col-md-6 col-12">
                  <div class="row">
                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon text-light text-center mx-auto">
                          <DollarSign />
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Earn as much <br /> As &#8358; 1000 Per Day
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            You can earn as much as
                            <br /> &#8358; 30000 per month.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon text-light text-center mx-auto">
                          <Airplay/>
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            More Options
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            There are more options than Surveys, like video
                            watching and signing up
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
                        <div class="icon text-light text-center mx-auto">
                          <CreditCard/>
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Get Paid instantly no matter the ammount
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            We pay on request from the user no matter the
                            amount or the time.
                          </p>
                          
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                        <div class="icon text-light text-center mx-auto">
                          <Award/>
                        </div>
                        <div class="card-body p-0 mt-4">
                          <a
                            href="javascript:void(0)"
                            class="title h5 text-dark"
                          >
                            Get Extra Rewards
                          </a>
                          <p class="text-muted mt-2 mb-0">
                            Get free things from brands to review or test.
                          </p>
                          
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
      <section class="section py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5">
              <div class="">
                <div class="text-center text-md-start">
                  <img
                    src="images\fill out.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">Why Take Online Surveys?</h1>
                <p class="para-desc text-muted lh-lg">
                  Fundamentally, a survey is a method of gathering information
                  from a sample of people. <br /> Big companies need help
                  sourcing people for market research. They gather that research
                  through surveys that we match our members up with. After our
                  members take a survey, the company collects the response for
                  further analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">Earn more through your family</h1>
                <p class="para-desc text-muted lh-lg">
                  You can earn more by allowing friends and family like children
                  and aged individuals take surveys partaning to them
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-md-5 order-1 order-md-2">
              <div class="">
                <div class="text-center text-md-end">
                  <img
                    src="images\child survey.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-100 mt-60">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5">
              <div class="">
                <div class="text-center text-md-start">
                  <img
                    src="images\invite.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">Share and Earn</h1>
                <p class="para-desc text-muted">
                  Share and refer other users to and earn rewards, money or
                  cryptocurrency.
                </p>
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

export default CampaignHome;
