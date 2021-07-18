import React from "react";
import Navbar from "./Navbar";
import { Globe, Book, MessageCircle, User,Mail } from "react-feather";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <section class="contact bg-dark">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="title-heading text-center mt-5 pt-3">
                {/* <div
                  class="alert alert-light alert-pills"
                  role="alert"
                  data-aos="-up"
                  data-aos-duration="1000"
                >
                  <span class="badge rounded-pill bg-success me-1">
                    Support
                  </span>
                  <span class="content"> Customer Support 24/7</span>
                </div> */}
                <h1
                  class="heading mb-3"
                  data-aos="-up"
                  data-aos-duration="1400"
                >
                  How Can We Help You ?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contactsection mb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <div class="section-title mb-4 pb-2">
                <h3 class="title mb-4" data-aos="-up" data-aos-duration="1000">
                  Send Us A Message
                </h3>
                <p
                  class="text-muted para-desc mb-0 mx-auto"
                  data-aos="-up"
                  data-aos-duration="1400"
                >
                  We are always here to help, talk to us.
                </p>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5 col-12 mt-4 pt-2">
              <img
                src="images\contact us.png"
                data-aos="-up"
                data-aos-duration="1400"
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-6 col-md-7 col-12 mt-4 pt-2">
              <div
                class="card rounded shadow border-0 ms-lg-4"
                data-aos="-up"
                data-aos-duration="1400"
              >
                <div class="card-body p-4">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Your Name :</label>
                          <div class="form-icon position-relative">
                           {/* <User/> */}
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control ps-5"
                              placeholder="This is you :"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Your Email :</label>
                          <div class="form-icon position-relative">
                            {/* <Mail/> */}
                            <input
                              name="email"
                              id="email"
                              type="email"
                              class="form-control ps-5"
                              placeholder="Your email :"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">Reason :</label>
                          <select
                            class="form-control custom-select"
                            id="Sortbylist-Shop"
                          >
                            <option>Inquiry</option>
                            <option>Request</option>
                            <option>Message</option>
                            <option>Issue</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Subject :</label>
                          <div class="form-icon position-relative">
                            {/* <Book/> */}
                            <input
                              name="subject"
                              id="subject"
                              class="form-control ps-5"
                              placeholder="Your subject :"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Company Name :</label>
                          <div class="form-icon position-relative">
                           {/* <Globe/> */}
                            <input
                              name="company-name"
                              id="company-name"
                              type="url"
                              class="form-control ps-5"
                              placeholder="Company Name :"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">Description :</label>
                          <div class="form-icon position-relative">
                            {/* <MessageCircle/> */}
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              class="form-control ps-5"
                              placeholder="How may we assist you? :"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="mb-3">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              I Accept{" "}
                              <a
                                href="termsandconditions.html"
                                class="tx-success"
                              >
                                Terms And Condition
                              </a>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          class="btn btn-warning btn-md"
                          value="Submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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

export default Contact;
