import React from "react";
import Navbar from "./Navbar";
import { CheckCircle, Airplay, Clipboard, Phone, Mail, MapPin } from "react-feather";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <section class="aboutus bg-dark">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12 text-center">
              <div class="page-next-level">
                {/* <div
                  class="alert alert-light alert-pills"
                  role="alert"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span class="badge rounded-pill bg-success me-1">
                    Support
                  </span>
                  <span class="content"> Customer Support 24/7</span>
                </div> */}
                <h1 class="title"> About us </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="aboutussection my-5">
        <div class="container">
          <div class="row align-items-center" id="counter">
            <div class="col-md-6">
              <img src="images\about us.png" class="img-fluid" alt="" />
            </div>

            <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="ms-lg-4">
                <div class="section-title">
                  <h4 class="title mb-4">Who we are ?</h4>
                  <p class="text-muted lh-lg">
                    We want to make business development, market research and
                    surveys easy and accessible, that every business little or
                    large can make good business desions backed by customers and
                    reserch. This way all people and businesses around Africa
                    can make market and customer solutions and solve problems
                    that businesses face today, and create better business
                    desions for themselves and their customers in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="howaboutus bg-dark">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h6 class="tx-success">Work Process</h6>
                <h4 class="title mb-4">How do we works ?</h4>
                <p class="text-light para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span class="tx-success fw-bold">Utterusers</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 mt-4 pt-2">
              <div class="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div class="icon text-primary text-center mx-auto">
                  <Clipboard/>
                </div>

                <div class="card-body">
                  <h5 class="text-dark">Discussion</h5>
                  <p class="text-light mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated
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
                  <h5 class="text-dark">Strategy & Testing</h5>
                  <p class="text-light mb-0">
                    Generators convallis odio, vel pharetra quam malesuada vel.
                    Nam porttitor malesuada.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
              <div class="card features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div class="icon text-success text-center mx-auto">
                  <CheckCircle/>
                </div>

                <div class="card-body">
                  <h5 class="text-dark">Reporting</h5>
                  <p class="text-light mb-0">
                    Internet Proin tempus odio, vel pharetra quam malesuada vel.
                    Nam porttitor malesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class=" my-5">
        <div class="container aboutcontact my-4">
          <div class="row">
            <div class="col-md-4">
              <div class="card border-0 text-center features feature-clean">
                <div class="icon text-success text-center mx-auto">
                  <Phone size={40}/>
                </div>
                <div class="mt-3">
                  <h5 class="fw-bold">Phone</h5>
                  <p class="text-muted">
                    We are available between 8 am to 5pm WAT Monday to Friday
                  </p>
                  <a href="tel:+234-704-788-6892" class="tx-success">
                    +234-704-788-6892
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="card border-0 text-center features feature-clean">
                <div class="icon text-success text-center mx-auto">
                 <Mail size={40}/>
                </div>
                <div class="mt-3">
                  <h5 class="fw-bold">Email</h5>
                  <p class="text-muted">
                    We respond to emails as soon as we can
                  </p>
                  <a href="mailto:hello@econhut.com" class="tx-success">
                    hello@Utteruser.com
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="card border-0 text-center features feature-clean">
                <div class="icon text-success text-center mx-auto">
                  <MapPin size={40}/>
                </div>
                <div class="mt-3">
                  <h5 class="fw-bold">Address</h5>
                  <p class="text-muted">
                    3, oduduaway GRA Ikeja, <br />
                    Lagos, Nigeria
                  </p>
                  <a
                    href=""
                    data-type="iframe"
                    class="video-play-icon tx-success lightbox"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class=" col-md-8 pt-2 pt-sm-0 order-2 order-md-1">
              <div class="card shadow rounded border-0">
                <div class="card-body py-5">
                  <h4 class="card-title">Get In Touch !</h4>
                  <div class="custom-form mt-3">
                    <form
                      method="post"
                      name="myForm"
                      onsubmit="return validateForm()"
                    >
                      <p id="error-msg" class="mb-0"></p>
                      <div id="simple-msg"></div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">
                              Your Name <span class="text-danger">*</span>
                            </label>
                            <div class="form-icon position-relative">
                              <i
                                data-feather="user"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                name="name"
                                id="name"
                                type="text"
                                class="form-control ps-5"
                                placeholder="Name :"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">
                              Your Email <span class="text-danger">*</span>
                            </label>
                            <div class="form-icon position-relative">
                              <i
                                data-feather="mail"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                name="email"
                                id="email"
                                type="email"
                                class="form-control ps-5"
                                placeholder="Email :"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="mb-3">
                            <label class="form-label">Subject</label>
                            <div class="form-icon position-relative">
                              <i
                                data-feather="book"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                name="subject"
                                id="subject"
                                class="form-control ps-5"
                                placeholder="subject :"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="mb-3">
                            <label class="form-label">
                              Comments <span class="text-danger">*</span>
                            </label>
                            <div class="form-icon position-relative">
                              <i
                                data-feather="message-circle"
                                class="fea icon-sm icons clearfix"
                              ></i>
                              <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                class="form-control ps-5"
                                placeholder="Message :"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="d-grid">
                            <button
                              type="submit"
                              id="submit"
                              name="send"
                              class="btn btn-primary"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class=" col-md-4 order-1 order-md-2">
              
                
                  <img
                    src="images\contact us.png"
                    class="img-fluid"
                    alt=""
                  />
        
              </div>
            
          </div>
        </div>
      </section>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
};

export default Aboutus;
