import React from "react";
import {Clock} from "react-feather"
const Campaign = () => {
  return (
    <div>
      <section className="home">
        <div className="container">
          {/* <div class=" align-items-top">
            <div  className="justify-content-between">
              <h2 class=" font-weight-600 mb-10">
                Campaign History
              </h2>
              <button href="#" type="button" class="btn btn-primary justify-content-end">
              Take Campaign
            </button>
            </div>
            
            
          </div> */}
          <div className="row p-5">
            <div className="col-md-9">
              <h2>Campaign History</h2>
            </div>
            <div className="col-md-3">
            <button href="#" type="button" class="btn btn-success">
              Take Campaign
            </button>
            </div>
          </div>
          

          <div class=" mb-30">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Completed By</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EN</td>
                    <td>Herman Beck</td>
                    <td>
                      <span class="text-muted">
                      <Clock/> Oct 16, 2016
                      </span>{" "}
                    </td>
                    <td>$45.00</td>
                    <td>
                      <div class="badge bg-success">Survey</div>
                    </td>
                    <td>
                      <a href="javascript:void(0)">#26589</a>
                    </td>
                  </tr>
                  <tr>
                    <td>CN</td>
                    <td>Mary Adams</td>
                    <td>
                      <span class="text-muted">
                      <Clock/> Oct 12, 2016
                      </span>{" "}
                    </td>
                    <td>$245.30</td>
                    <td>
                      <div class="badge bg-primary">Polls And Quizzes</div>
                    </td>
                    <td>
                      <a href="javascript:void(0)">#58746</a>
                    </td>
                  </tr>
                  <tr>
                    <td>AU</td>
                    <td>Caleb Richards</td>
                    <td>
                      <span class="text-muted">
                        <Clock/> May 18, 2016
                      </span>{" "}
                    </td>
                    <td>$38.00</td>
                    <td>
                      <div class="badge bg-info">Form</div>
                    </td>
                    <td>
                      <a href="javascript:void(0)">#98458</a>
                    </td>
                  </tr>
                  <tr>
                    <td>FR</td>
                    <td>June Lane</td>
                    <td>
                      <span class="text-muted">
                      <Clock/> Apr 28, 2016
                      </span>{" "}
                    </td>
                    <td>$77.99</td>
                    <td>
                      <div class="badge bg-secondary">Product Testing</div>
                    </td>
                    <td>
                      <a href="javascript:void(0)">#32658</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
