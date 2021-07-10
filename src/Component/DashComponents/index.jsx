import React from 'react'
import { Clock } from 'react-feather';

const DashboardIndex =()=>{
    return (
        <>
        <header>
              <div className="row m-4">
                <div className="col-12">
                  <h2 className="">Welcome Back!</h2>
                </div>
              </div>
            </header>
            <div className="row sinzu">
              <div class="col-lg-3 col-sm-6">
                <div class="card card-sm">
                  <div class="card-body">
                    <span class="d-block font-11 font-weight-500 text-dark text-uppercase mb-10">
                      Campaigns Done This Month
                    </span>
                    <div class="d-flex align-items-center justify-content-between position-relative">
                      <div>
                        <span class="d-block display-5 font-weight-400 text-dark">
                          12
                        </span>
                      </div>
                      <div class="position-absolute r-0"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card card-sm">
                  <div class="card-body">
                    <span class="d-block font-11 font-weight-500 text-dark text-uppercase mb-10">
                      Available Balance
                    </span>
                    <div class="d-flex align-items-center justify-content-between position-relative">
                      <div>
                        <span class="d-block">
                          <span class="display-5 font-weight-400 text-dark">
                            ₦<span class="counter-anim">140,260</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card card-sm">
                  <div class="card-body">
                    <span class="d-block font-11 font-weight-500 text-dark text-uppercase mb-10">
                      Revenue this month
                    </span>
                    <div class="d-flex align-items-end justify-content-between">
                      <div>
                        <span class="d-block">
                          <span class="display-5 font-weight-400 text-dark">
                            ₦ 8,725
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card card-sm">
                  <div class="card-body">
                    <span class="d-block font-11 font-weight-500 text-dark text-uppercase mb-10">
                      Total Campaigns Done
                    </span>
                    <div class="d-flex align-items-end justify-content-between">
                      <div>
                        <span class="d-block">
                          <span class="display-5 font-weight-400 text-dark">
                            18
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 activity">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-header">Recent Activity</h6>
                    <div className="d-flex p-2">
                      <div>
                        <span class="d-block mb-2">
                          <span class="font-weight-500 text-dark text-capitalize">
                            Laura Thompson
                          </span>
                          <span class="pl-5"> joined josh groben team.</span>
                        </span>
                        <span class="d-block font-13 text-muted">
                          3 hours ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-2 p-2">
                      <div>
                        <span class="d-block">
                          <span class="font-weight-500 text-dark text-capitalize">
                            Meayme Fletcher
                          </span>
                          <span class="pl-5"> liked photos</span>
                        </span>
                        <span class="d-block font-13 text-muted">
                          6 hours ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-2 p-2">
                      <div>
                        <span class="d-block">
                          <span class="font-weight-500 text-dark text-capitalize">
                            Billy Flowers{" "}
                          </span>
                          <span class="pl-5">
                            Until recently, the prevailing view assumed lorem
                            ipsum was born as a nonsense text.
                          </span>
                        </span>
                        <span class="d-block font-13 text-muted">
                          3 days ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-2 p-2">
                      <div>
                        <span class="d-block mt-2">
                          <span class="font-weight-500 text-dark text-capitalize">
                            Morgan Freeman
                          </span>
                          <span class="pl-5"> joined josh groben team.</span>
                        </span>
                        <span class="d-block font-13 text-muted">
                          3 hours ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card">
                      <h6 class="card-header">Transactions</h6>
                      <div class="card-body pa-0">
                        <div class="table-wrap">
                          <div class="table-responsive">
                            <table class="table mb-0">
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Amount</th>
                                  <th>Role</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">11/4/2012</th>
                                  <td>₦ 12,987</td>
                                  <td>
                                    <span class="badge bg-danger">Failed</span>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">20/4/2021</th>
                                  <td>₦ 34,000</td>
                                  <td>
                                    <span class="badge bg-info">Pending</span>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card">
                      <h6 class="card-header">Available Campaigns</h6>
                      <div class="card-body pa-0">
                        <div class="table-wrap">
                          <div class="table-responsive">
                            <table class="table mb-0">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Brincket</td>
                                  <td>
                                    <span class="badge bg-primary">Survey</span>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Hay123</td>
                                  <td>
                                    <span class="badge bg-info">Forms</span>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mt-5 os ">
                  <h6 class="card-header">Campaigns Done</h6>
                  <div class="card-body pa-0">
                    <div class="table-wrap">
                      <div class="table-responsive">
                        <table class="table table-hover mb-0 ">
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
                                  <Clock size={16} /> Oct 16, 2016
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
                                  <Clock size={16} /> Oct 12, 2016
                                </span>{" "}
                              </td>
                              <td>$245.30</td>
                              <td>
                                <div class="badge bg-dark">
                                  Polls And Quizzes
                                </div>
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
                                  <Clock size={16} /> May 18, 2016
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
                                  <Clock size={16} /> Apr 28, 2016
                                </span>{" "}
                              </td>
                              <td>$77.99</td>
                              <td>
                                <div class="badge bg-warning">
                                  Product Testing
                                </div>
                              </td>
                              <td>
                                <button className="btn btn-info"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
    )
}

export default DashboardIndex;