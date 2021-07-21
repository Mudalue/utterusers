import React from "react";
import { Facebook, Twitter, Linkedin, ChevronRight, Mail } from "react-feather";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <a class="logo" href="index.html">
                <img
                  src="\images\logo.png"
                  height="30"
                  class="logo-light-mode"
                  alt=""
                />
              </a>

              <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                <li class="list-inline-item">
                  <a
                    href="https://web.facebook.com/Utterusers-100555645600517"
                    class="rounded"
                  >
                    <Facebook />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/utterusers" class="rounded">
                    <Twitter />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/company/utterusers/"
                    class="rounded"
                  >
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 class="text-light footer-head">Company</h5>
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="/about-us" class="text-foot">
                   <ChevronRight/>
                    About us
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-foot">
                  <ChevronRight/>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="careers.html" class="text-foot">
                  <ChevronRight/>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="terms-of-use.html" class="text-foot">
                  <ChevronRight/>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="privacy-policy.html" class="text-foot">
                  <ChevronRight/>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 class="text-light footer-head">Resources</h5>
              <ul class="list-unstyled footer-list mt-4">
                <li>
                  <a href="faqs.html" class="text-foot">
                  <ChevronRight/>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="pricing.html" class="text-foot">
                  <ChevronRight/>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="create-campaign.html" class="text-foot">
                  <ChevronRight/>
                    Create Campaign
                  </a>
                </li>
                <li>
                  <a href="take-campaign.html" class="text-foot">
                  <ChevronRight/>
                    Earn Money
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 class="text-light footer-head">Newsletter</h5>
              <p class="mt-4">Sign up and receive the latest tips via email.</p>
              <form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="foot-subscribe mb-3">
                      <label class="form-label">
                        Write your email <span class="text-danger">*</span>
                      </label>
                      <div class="form-icon position-relative">
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          class="form-control ps-5 rounded txt-light"
                          placeholder="Your email : "
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                  <div class="col-md-12">
                    <button
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      class="btn btn-warning btn-md"
                      value="Subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                  </div>
                  
                </div>
       
              </form>
            </div>
          </div>
        </div>
      </footer>

      <footer class="footer footer-bar">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-sm-6">
              <div class="text-sm-start">
                <p class="mb-0">
                  Copyright ©
                  <script>document.write(new Date().getFullYear())</script>{" "}
                  Utterusers. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
