import React from "react";
import Contactusjumbotron from "../../Others/Contactusjumbotron";
import Footer from "../../Others/Footer";
import Navbar from "../../Others/Navbar";
import {
  Database,
  Minimize,
  Lock,
  Layers,
  FilePlus,
  WifiOff, Edit, Airplay, Rss,
} from "react-feather";
const OfflineSurvey = () => {
  return (
    <div>
      <Navbar />
      <section class="offlinesurvey p-5" id="home">
        <div class="container mt-5 mb-5">
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
                  <span class="content">Offline</span>
                </div> */}
                <h1 class="heading mb-3">
                  Get Feedback from users Without internet
                </h1>
                <p class="para-desc text-muted">
                  Our offline survey tool provides responses from users with bad
                  or no internet connections.
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
                    src="images\designstyle.png"
                    class="img-fluid mover mx-auto d-block "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="offlinesection mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="card border-0 text-center features feature-clean rounded">
                <div class="icon text-primary text-center mx-auto">
                  <WifiOff />
                </div>

                <div class="card-body p-0 mt-4">
                  <a href="javascript:void(0)" class="title h5 text-dark">
                    No internet required
                  </a>
                  <p class="text-muted mt-3 mb-0">
                    Design your survey online, and download it for offline use
                    on any mobile device to capture data anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-4 pt-sm-0">
              <div class="card border-0 text-center features feature-clean rounded">
                <div class="icon text-primary  text-center mx-auto">
                  <Database />
                </div>

                <div class="card-body p-0 mt-4">
                  <a href="javascript:void(0)" class="title h5 text-dark">
                    Get better data, faster
                  </a>
                  <p class="text-muted mt-3 mb-0">
                    Transform your web surveys into offline mode—a
                    mobile-optimized experience built for easy response
                    collection.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-4 pt-lg-0">
              <div class="card border-0 text-center features feature-clean rounded">
                <div class="icon text-primary text-center mx-auto">
                  <Minimize />
                </div>

                <div class="card-body p-0 mt-4">
                  <a href="javascript:void(0)" class="title h5 text-dark">
                    Kiosk Mode
                  </a>
                  <p class="text-muted mt-3 mb-0">
                    Turn any mobile device into a survey station that loops back
                    to the start to capture survey data from multiple
                    respondents privately and securely.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mt-5">
              <div class="card border-0 text-center features feature-clean rounded">
                <div class="icon text-primary text-center mx-auto">
                  <Lock />
                </div>

                <div class="card-body p-0 mt-4">
                  <a href="javascript:void(0)" class="title h5 text-dark">
                    Secure data
                  </a>
                  <p class="text-muted mt-3 mb-0">
                    Protecting your confidential survey data is our highest
                    priority. Rest assured your survey data is completely
                    secure—data is encrypted on device and in transit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12  pt-4 pt-sm-0 mt-5">
              <div class="card border-0 text-center features feature-clean rounded">
                <div class="icon text-primary text-center mx-auto">
                  <Layers />
                </div>

                <div class="card-body p-0 mt-4">
                  <a href="javascript:void(0)" class="title h5 text-dark">
                    Gather data at scale
                  </a>
                  <p class="text-muted mt-3 mb-0">
                    Anywhere is easy enough for anyone to use to collect data
                    online or offline. Use a single device or purchase a bundle
                    of multiple devices to gather data at scale.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12  pt-4 pt-lg-0 mt-5">
              <div class="card border-0 text-center features feature-clean rounded">
                <div class="icon text-primary text-center mx-auto">
                  <FilePlus />
                </div>

                <div class="card-body p-0 mt-4">
                  <a href="javascript:void(0)" class="title h5 text-dark">
                    Easy management
                  </a>
                  <p class="text-muted mt-3 mb-0">
                    You can keep an eye on all the offline surveys tied to your
                    account to monitor responses and data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="offlineprocess bg-dark">
        <div class="container ">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h4>Work Process</h4>
                <h6 class="title mb-4">How do we works ?</h6>
                <p class="text-light para-desc mx-auto mb-0">
                  We get the feedback you need from users who have poor or
                  little and also from location based users
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 mt-4 pt-2">
              <div class="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Edit/>
                </div>

                <div class="card-body">
                  <h5 class="text-dark">Discussion</h5>
                  <p class="text-muted mb-0">
                    Either tell us what you want to achieve or start an offline
                    campaign.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
              <div class="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Airplay/>
                </div>

                <div class="card-body">
                  <h5 class="text-dark">Get answers from respondents</h5>
                  <p class="text-muted mb-0">
                    We go to your target group and get the feed back that you
                    need from them.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
              <div class="card features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Rss/>
                </div>

                <div class="card-body">
                  <h5>Feedback and Analysis</h5>
                  <p class="test-light mb-0">
                    We provide the feedback, data and analysis from the
                    respondents to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section overflow-hidden mt-5 mb-5">
        <div class="container mt-100 mt-60">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5">
              <div class="app-feature-shape-left position-relative">
                <div class="text-center text-md-start">
                  <img src="images\fill out.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">No Internet, No problems</h1>

                <p class="para-desc text-muted">
                  You needn’t wait for the Internet now. Offline survey tools
                  help pocket feedback anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-100 mt-60 mt-5 mb-5">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
              <div class="section-title">
                <h1 class="title mb-3">One-for-all Tool</h1>
                <p class="para-desc text-muted">
                  Running a medical camp remotely? Or collecting guest feedback
                  from your hotel? Be it any, offline survey tool is your best
                  bet.
                </p>
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
      </section>
      <Contactusjumbotron />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default OfflineSurvey;
