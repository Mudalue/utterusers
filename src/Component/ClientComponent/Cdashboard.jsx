import React from "react";
import Cnavbar from "./ClientOthers/Cnavbar";
import {
  Home,
  Clipboard,
  User,
  CreditCard,
  Edit2,
  Share,
  Trash2,
  TrendingUp,
  TrendingDown,
  Clock,
  MoreVertical,
} from "react-feather";
import CAlert from "./ClientOthers/CAlert";
import ClientMap from "./ClientOthers/ClientMap";
import { Chart } from "react-google-charts";

const Cdashboard = () => {
  return (
    <div>
      <Cnavbar />
      <section className="clientdashboard">
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-12">
              <div class="d-flex align-items-start ">
                <div
                  class="nav flex-column nav-pills me-3  p-2 flex-shrink-1 bd-highlight"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <span>
                      <Home size={16} /> Dashboard
                    </span>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span>
                      <Clipboard size={16} /> Campaigns
                    </span>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <span>
                      <User size={16} /> Contact
                    </span>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <span>
                      <CreditCard size={16} /> Plans & Billings
                    </span>
                  </button>
                </div>

                {/* <nav content> */}

                <div
                  class="tab-content p-2 w-100 bd-highlight"
                  id="v-pills-tabContent"
                >
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="header">
                            <h1>Dashboard</h1>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <CAlert />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 my-2">
                          <h4 className="text-center">
                            Create A Campaign (Survey, Forms, Quizzes, Polls,
                            Focus Group, Product Testing)
                          </h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="card bg-danger text-light">
                            <div className="card-body p-4">
                              <h5 className="card-title  pt-2">
                                Start From Scratch
                              </h5>

                              <p class="card-text lh-base">
                                Build your campaign from scratch or paste what
                                you've already written.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-success text-light">
                            <div className="card-body">
                              <h5 class="card-title  pt-2">
                                Start From Template
                              </h5>
                              <p class="card-text lh-base">
                                Choose from our campaign library of ready-to-use
                                campaign templates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-dark text-light">
                            <div className="card-body">
                              <h5 class="card-title pt-2">Build For Me</h5>
                              <p class="card-text lh-base">
                                Tell us your goals—we'll create a survey for you
                                and guide you the rest of the way.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <section className="clientstat">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="card-title">
                                  <h5 className="text-center">
                                    Number Of Participants
                                  </h5>
                                </div>
                                <div className="card-text">
                                  <h1 className="text-center tx-success">
                                    12,734
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="card-title">
                                  <h5 className="text-center">
                                    Number Of Campaigns
                                  </h5>
                                </div>
                                <div className="card-text">
                                  <h1 className="text-center tx-success">
                                    734
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="card-title">
                                  <h5 className="text-center">Progress</h5>
                                </div>
                                <div className="card-text">
                                  <h1 className="text-center tx-success">
                                    94.14%
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 pt-5 pb-3">
                            <h4>Campaign Responses World Overview</h4>
                          </div>
                          <div className="col-md-12">
                            <ClientMap />
                          </div>
                        </div>

                        <div className="row clientable">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="card-body">
                                <div className="card-title d-flex align-items-center justify-content-between p-5">
                                  <h4>Campaigns Overview</h4>
                                  <button class="btn btn-sm btn-info">
                                    view all
                                  </button>
                                </div>
                                <div className="card-text">
                                  <table class="table table-sm table-hover mb-0">
                                    <thead>
                                      <tr>
                                        <th>Campaign Name</th>
                                        <th>Campaign Type</th>
                                        <th>Target Audience</th>
                                        <th>Started</th>
                                        <th>Questions</th>
                                        <th class="w-20">Status</th>
                                        <th>End Date</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Branding</td>
                                        <td>
                                          <div class="badge bg-success">
                                            Survey
                                          </div>
                                        </td>
                                        <td>General</td>
                                        <td>13 Nov 2018</td>
                                        <td>
                                          <span class="d-flex align-items-center">
                                            <i class="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
                                            <span>0</span>
                                          </span>
                                        </td>
                                        <td>
                                          <div class="progress">
                                            <div
                                              class="progress-bar bg-success"
                                              role="progressbar"
                                              style={{ width: "95%" }}
                                              aria-valuenow="95"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            >
                                              95%
                                            </div>
                                          </div>
                                        </td>
                                        <td>10 Nov 2018</td>
                                      </tr>
                                      <tr>
                                        <td>Website</td>
                                        <td>
                                          <div class="badge bg-pink">
                                            Polls And Quizzes
                                          </div>
                                        </td>
                                        <td>Custom</td>
                                        <td>30 Nov 2018</td>
                                        <td>
                                          <span class="d-flex align-items-center">
                                            <i class="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
                                            <span>3</span>
                                          </span>
                                        </td>
                                        <td>
                                          <div class="progress">
                                            <div
                                              class="progress-bar bkg-success"
                                              role="progressbar"
                                              style={{ width: "70%" }}
                                              aria-valuenow="70"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            >
                                              70%
                                            </div>
                                          </div>
                                        </td>
                                        <td>13 Dec 2018</td>
                                      </tr>
                                      <tr>
                                        <td>Collaterals</td>
                                        <td>
                                          <div class="badge bg-info">Form</div>
                                        </td>
                                        <td>Custom</td>
                                        <td>12 Nov 2018</td>
                                        <td>
                                          <span class="d-flex align-items-center">
                                            <i class="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
                                            <span>14</span>
                                          </span>
                                        </td>
                                        <td>
                                          <div class="progress">
                                            <div
                                              class="progress-bar bg-danger"
                                              role="progressbar"
                                              style={{ width: "35%" }}
                                              aria-valuenow="35"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            >
                                              35%
                                            </div>
                                          </div>
                                        </td>
                                        <td>21 Oct 2018</td>
                                      </tr>
                                      <tr>
                                        <td>Branding, Print</td>
                                        <td>
                                          <div class="badge bg-indigo">
                                            Product Testing
                                          </div>
                                        </td>
                                        <td>General</td>
                                        <td>10 Nov 2018</td>
                                        <td>
                                          <span class="d-flex align-items-center">
                                            <i class="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
                                            <span>6</span>
                                          </span>
                                        </td>
                                        <td>
                                          <div class="progress">
                                            <div
                                              class="progress-bar bkg-success"
                                              role="progressbar"
                                              style={{ width: "85%" }}
                                              aria-valuenow="85"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            >
                                              85%
                                            </div>
                                          </div>
                                        </td>
                                        <td>14 Nov 2018</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row clientstatistics">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="card-body">
                                <div className="card-title p-4">
                                  <h4>Statistics</h4>
                                </div>
                                <div className="card-text">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <Chart
                                        width={"800px"}
                                        height={"400px"}
                                        chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                          ["Age", "group (in millions)"],
                                          ["", 13],
                                          ["", 83],
                                          ["", 1.4],
                                          ["", 2.3],
                                          ["", 46],
                                          ["", 300],
                                          ["", 38],
                                          ["", 5.5],
                                          ["", 5],
                                          ["", 20],
                                          ["", 33],
                                          ["", 1.5],
                                          ["", 72],
                                          ["", 2.9],
                                          ["", 33],
                                          ["", 29],
                                          ["", 0.01],
                                          ["", 6.5],
                                          ["", 2.5],
                                          ["", 61],
                                          ["", 74],
                                          ["", 52],
                                        ]}
                                        options={{
                                          title: "Age group",
                                          legend: "none",
                                          pieSliceText: "label",
                                          slices: {
                                            4: { offset: 0.2 },
                                            12: { offset: 0.3 },
                                            14: { offset: 0.4 },
                                            15: { offset: 0.5 },
                                          },
                                        }}
                                        rootProps={{ "data-testid": "5" }}
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <Chart
                                        width={"500px"}
                                        height={"300px"}
                                        chartType="Bar"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                          [
                                            "Devices",
                                            "Desktop",
                                            "Mobile",
                                            "Tablet",
                                          ],
                                          ["2014", 1000, 400, 200],
                                          ["2015", 1170, 460, 250],
                                          ["2016", 660, 1120, 300],
                                          ["2017", 1030, 540, 350],
                                        ]}
                                        options={{
                                          // Material design options
                                          chart: {
                                            title: "Devices Used",
                                            subtitle:
                                              "Desktop, Mobile, and Talet: 2014-2017",
                                          },
                                        }}
                                        // For tests
                                        rootProps={{ "data-testid": "2" }}
                                      />
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
                  {/* <tab2></tab2> */}
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-12">
                            <h1>Campaign</h1>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <CAlert />
                            </div>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="card p-3">
                                  <div className="card-body">
                                    <div className="card-title">
                                      <h5>Respondants</h5>
                                    </div>
                                    <div className="card-text">
                                      <h1>
                                        <span className="badge bkg-success">
                                          1000
                                        </span>
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="card p-3">
                                  <div className="card-body">
                                    <div className="card-title">
                                      <h5>Campaign types</h5>
                                    </div>
                                    <div className="card-text">
                                      <h1>
                                        <span className="badge bkg-success">
                                          24
                                        </span>
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="card p-3">
                                  <div className="card-body">
                                    <div className="card-title">
                                      <h5>Campaigns</h5>
                                    </div>
                                    <div className="card-text">
                                      <h1>
                                        <span className="badge bkg-success">
                                          54
                                        </span>
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="card p-3">
                                  <div className="card-body">
                                    <div className="card-title">
                                      <h5>Amount Spent</h5>
                                    </div>
                                    <div className="card-text">
                                      <h1>
                                        <span className="badge bkg-success">
                                          {" "}
                                          &#8358; 24, 000
                                        </span>
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row clienthistory">
                              <div className="col-md-12">
                                <div className="card p-4">
                                  <div className="card-body">
                                    <div className="card-title d-flex align-items-center justify-content-between">
                                      <h4>campaign</h4>
                                      <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-end">
                                          <li class="page-item">
                                            <a
                                              class="page-link tx-success"
                                              href="#"
                                              aria-label="Previous"
                                            >
                                              <span aria-hidden="true">
                                                &laquo;
                                              </span>
                                            </a>
                                          </li>
                                          <li class="page-item ">
                                            <a
                                              class="page-link text-dark"
                                              href="#"
                                            >
                                              1
                                            </a>
                                          </li>
                                          <li class="page-item">
                                            <a
                                              class="page-link text-dark"
                                              href="#"
                                            >
                                              2
                                            </a>
                                          </li>
                                          <li class="page-item ">
                                            <a
                                              class="page-link text-dark"
                                              href="#"
                                            >
                                              3
                                            </a>
                                          </li>
                                          <li class="page-item tx-success">
                                            <a
                                              class="page-link tx-success"
                                              href="#"
                                              aria-label="Next"
                                            >
                                              <span aria-hidden="true">
                                                &raquo;
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </div>
                                    <div className="card-text">
                                      <table class="table table-hover mb-0">
                                        <thead>
                                          <tr>
                                            <th>Name of Campaign</th>
                                            <th>Type</th>
                                            <th>Date Created</th>
                                            <th>Responses</th>
                                            <th>Analyze</th>
                                            <th>Collect</th>
                                            <th>Share</th>
                                            <th>Delete</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Strong</td>
                                            <td>
                                              <div class="badge bg-success">
                                                Survey
                                              </div>
                                            </td>
                                            <td>13 Nov 2018</td>
                                            <td>13,000</td>
                                            <td>
                                              <a
                                                href="#"
                                                class="mr-25"
                                                data-toggle="tooltip"
                                                data-original-title="Edit"
                                              >
                                                {" "}
                                                <Edit2 className="tx-success" />{" "}
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                class="mr-25"
                                                data-toggle="tooltip"
                                                data-original-title="Edit"
                                              >
                                                {" "}
                                                <Edit2 className="tx-success" />{" "}
                                              </a>
                                            </td>
                                            <td>
                                              <div class="inline-block ">
                                                <a
                                                  class="dropdown-toggle no-caret"
                                                  data-toggle="dropdown"
                                                  href="#"
                                                  aria-expanded="false"
                                                  role="button"
                                                >
                                                  <Share className="tx-success" />
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    With Member
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    Send to mail
                                                  </a>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    Something else here
                                                  </a>
                                                  <div class="dropdown-divider"></div>
                                                  <a
                                                    class="dropdown-item"
                                                    href="#"
                                                  >
                                                    Separated link
                                                  </a>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <a
                                                data-toggle="modal"
                                                data-target="#exampleModal"
                                                data-original-title="Close"
                                              >
                                                {" "}
                                                <Trash2 className="tx-success" />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12 pt-5 pb-3">
                                <h4>Campaign Responses World Overview</h4>
                              </div>
                              <div className="col-md-12">
                                <ClientMap />
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-4">
                                <div class="card">
                                  <div class="">
                                    <div class="refresh-container">
                                      <div class="la-anim-1"></div>
                                    </div>
                                    <h6 class="card-header">Members</h6>
                                    <div class="card-body pa-0">
                                      <div class="table-wrap">
                                        <div class="table-responsive">
                                          <table class="table mb-0">
                                            <thead>
                                              <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Role</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th scope="row">1</th>
                                                <td>Brincker123</td>
                                                <td>
                                                  <span class="badge bg-danger">
                                                    admin
                                                  </span>{" "}
                                                </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">2</th>
                                                <td>Hay123</td>
                                                <td>
                                                  <span class="badge bg-info">
                                                    member
                                                  </span>{" "}
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
                              <div class="col-md-4">
                                <div class="card">
                                  <div class="card-header">
                                    <h5>Statistics</h5>
                                  </div>
                                  <div class="card-body pa-0">
                                    <div class="">
                                      <div class="col-sm">
                                        <div class="table-wrap">
                                          <div class="table-responsive">
                                            <table class="table table-hover mb-0">
                                              <thead>
                                                <tr>
                                                  <th>Range</th>
                                                  <th>Change</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>Men and boys</td>
                                                  <td>
                                                    <span class="text-danger">
                                                      <TrendingDown /> 28.76%
                                                    </span>{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>Women and girls</td>
                                                  <td>
                                                    <span class="text-danger">
                                                      <TrendingDown /> 8.55%
                                                    </span>{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>Age (5 - 30)</td>
                                                  <td>
                                                    <span class="tx-success">
                                                      <TrendingUp /> 58.56%
                                                    </span>{" "}
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>Age (31 - 90)</td>
                                                  <td>
                                                    <span class="tx-success">
                                                      <TrendingUp /> 35.76%
                                                    </span>{" "}
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
                              </div>
                              <div class="col-lg-4">
                                <div class="card">
                                  <div class="card-header card-header-action">
                                    <h5>Campaign Calender</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="">
                                      <div class="nicescroll-bar">
                                        <div class="add-event-wrap">
                                          <div
                                            class="calendar-event alert alert-success alert-dismissible fade show"
                                            role="alert"
                                          >
                                            <p>NYC Conference</p>
                                          </div>
                                          <div
                                            class="calendar-event alert alert-primary alert-dismissible fade show"
                                            role="alert"
                                          >
                                            <p>Family Lunch</p>
                                          </div>
                                          <div
                                            class="calendar-event alert alert-danger alert-dismissible fade show"
                                            role="alert"
                                          >
                                            <p>UX Meetup</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* client contact tab */}
                  <div
                    class="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <h1>Contact</h1>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <CAlert />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <ul
                                class="nav nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                  >
                                    Members
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                  >
                                    Respondents
                                  </button>
                                </li>
                              </ul>
                              <div class="tab-content" id="pills-tabContent">
                                <div
                                  class="tab-pane fade show active p-4"
                                  id="pills-home"
                                  role="tabpanel"
                                  aria-labelledby="pills-home-tab"
                                >
                                  <div class="d-flex align-items-center justify-content-between mt-10 mb-20 ">
                                    <h4>Members</h4>
                                    <button
                                      type="button"
                                      class="btn btn-success"
                                      data-toggle="modal"
                                      data-target="#addrespondents"
                                    >
                                      Add Member
                                    </button>
                                  </div>
                                  <table
                                    id="datable_1"
                                    class="table table-hover w-100 display"
                                  >
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Position</th>
                                        <th>Team</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Tiger Nixon</td>
                                        <td>linkup@turnup.com</td>
                                        <td>Member</td>
                                        <td>Marketing</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div
                                  class="tab-pane fade p-4"
                                  id="pills-profile"
                                  role="tabpanel"
                                  aria-labelledby="pills-profile-tab"
                                >
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h4>Respondents</h4>
                                    <button
                                      type="button"
                                      class="btn btn-success"
                                      data-toggle="modal"
                                      data-target="#addrespondents"
                                    >
                                      Add Respondents
                                    </button>
                                  </div>
                                  <table
                                    id="datable_2"
                                    class="table table-hover w-100 display pb-30"
                                  >
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Target</th>
                                        <th>Emails</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Demogrpy A</td>
                                        <td>Marketing</td>
                                        <td>aug v@hotmail.com</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <h1>Plans and Billing</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <CAlert />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5>Payment Methods: </h5>
                            <button className="btn bton-success">
                              Add payment Method
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card p-4">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-center justify-content-between pb-4">
                                <h5>Current plan</h5>
                                <button className="btn btn-warning">
                                  Basic Plan
                                </button>
                              </div>
                              <div className="card-text">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="d-flex align-items-center justify-content-between px-3">
                                      <CreditCard />
                                      <MoreVertical />
                                    </div>
                                    <div class="d-flex flex-column mb-3 mt-3">
                                      <div class="p-3 bd-highlight">
                                        2356783335
                                      </div>
                                      <div class="p-3 bd-highlight">
                                        Access Bank
                                      </div>
                                      <div class="p-3 bd-highlight">
                                        Cristino Murfy
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="d-flex align-items-center justify-content-between px-3">
                                      <CreditCard />
                                      <MoreVertical />
                                    </div>
                                    <div class="d-flex flex-column mb-3 mt-3">
                                      <div class="p-3 bd-highlight">
                                        78UVY868FYI8BYB8Y8BI985
                                      </div>
                                      <div class="p-3 bd-highlight">
                                        Calvin Carlo
                                      </div>
                                      <div class="p-3 bd-highlight">
                                        Bitcoin
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="d-flex align-items-center justify-content-between px-3">
                                      <CreditCard />
                                      <MoreVertical />
                                    </div>
                                    <div class="d-flex flex-column mb-3 mt-3">
                                      <div class="p-3 bd-highlight">
                                        5478*********34
                                      </div>
                                      <div class="p-3 bd-highlight">
                                        Miriam Jockky
                                      </div>
                                      <div class="p-3 bd-highlight">Card</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title">
                                <h4>Payment History</h4>
                              </div>
                              <div className="card-text">
                                <table class="table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Date</th>
                                      <th>Amount</th>
                                      <th>Method</th>
                                      <th>Status</th>
                                      <th>Id</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span class="text-muted">
                                          <Clock/>  Oct
                                          16, 2016
                                        </span>{" "}
                                      </td>
                                      <td>₦ 4500</td>
                                      <td>Bank Account</td>
                                      <td>
                                        <div class="badge bg-primary">
                                          Success
                                        </div>
                                      </td>
                                      <td>
                                        <a href="javascript:void(0)">#26589</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span class="text-muted">
                                          <Clock/> Oct
                                          12, 2016
                                        </span>{" "}
                                      </td>
                                      <td>₦ 24530</td>
                                      <td>Paypal</td>
                                      <td>
                                        <div class="badge bg-danger">
                                          Fail
                                        </div>
                                      </td>
                                      <td>
                                        <a href="javascript:void(0)">#58746</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span class="text-muted">
                                          <Clock/>  May
                                          8, 2016
                                        </span>{" "}
                                      </td>
                                      <td>₦ 3800</td>
                                      <td>Bitcoin</td>
                                      <td>
                                        <div class="badge bg-info">
                                          Pending
                                        </div>
                                      </td>
                                      <td>
                                        <a href="javascript:void(0)">#98458</a>
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

export default Cdashboard;
