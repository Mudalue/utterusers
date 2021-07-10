import React from "react";
import { ChevronRight } from "react-feather";

const Mrkjumbotron = () => {
  return (
    <div>
      <section class="mrkjumbo pt-5 pb-5">
        <div class="container mt-100 mt-60">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="section-title">
                <h4 class="title mb-4">Reach your Target Audience</h4>
                <p class="text-muted para-desc">Start work</p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <ChevronRight/>
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <ChevronRight/>
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li class="mb-0">
                    <span class="text-success h5 me-2">
                      <ChevronRight/>
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="row ms-lg-5" id="counter">
                <div class="col-md-6 col-12">
                  <div class="row">
                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <div class="card counter-box border-0 bg-light bg-gradient shadow text-center rounded">
                        <div class="card-body py-5">
                          <h2 class="mb-0">
                            <span class="counter-value" data-target="97">
                              3
                            </span>
                            +
                          </h2>
                          <h5 class="counter-head mb-0">Countries</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card counter-box border-0 bg-success bg-gradient shadow text-center rounded">
                        <div class="card-body py-5">
                          <h2 class="text-light title-dark mb-0">
                            <span class="counter-value" data-target="6">
                              1
                            </span>
                            M+
                          </h2>
                          <h5 class="counter-head mb-0 title-dark text-light">
                            People
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-12">
                  <div class="row pt-lg-4 mt-lg-4">
                    <div class="col-12 mt-4 pt-2">
                      <div class="card counter-box border-0 bg-success bg-gradient shadow text-center rounded">
                        <div class="card-body py-5">
                          <h2 class="text-light title-dark mb-0">
                            <span class="counter-value" data-target="2">
                              0
                            </span>
                            K+
                          </h2>
                          <h5 class="counter-head mb-0 title-dark text-light">
                            Focus Groups
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                      <div class="card counter-box border-0 bg-light bg-gradient shadow text-center rounded">
                        <div class="card-body py-5">
                          <h2 class="mb-0">
                            <span class="counter-value" data-target="99">
                              3
                            </span>
                            %
                          </h2>
                          <h5 class="counter-head mb-0">Project Complete</h5>
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
    </div>
  );
};

export default Mrkjumbotron;
