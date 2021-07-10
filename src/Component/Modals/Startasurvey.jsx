import React from "react";
import { Send } from "react-feather";

const Startasurvey = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-target-backdrop="static"
        data-target-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center tx-success" id="staticBackdropLabel">
                Create a Campaign
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div className="row my-4">
                        <div className="col-md-6">
                          <label className="py-2">Name</label>
                          <input
                            className="form-control"
                            placeholder="Enter name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="py-2">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <label className="py-2">Subject</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label className="py-2">Comments</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                      <div className="row my-4">
                          <div className="col-md-12">
                              <button className= " btn btn-md btn-warning">
                                  Send Message <Send/>
                              </button>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startasurvey;
