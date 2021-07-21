import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Clock } from "react-feather";
import { mySurveys } from "../../../../helpers/API";

const CampaignIndex = () => {
  const { path, url } = useRouteMatch();
  const [loading, isLoading] = useState(true);
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("__magnumpi");
    (async () => {
      let data = await mySurveys({ token });
      if(data.status ==="success"){
        setSurveys(data.surveys);
      }
      
      isLoading(true);
    })();
  }, []);

  return (
    <>
      <div>
        <h2>Active Campaigns.</h2>
        <div className="row p-5">
          {!loading ? (
            <div className="custom-alert custom-alert-warning">
              Fetching Your Campaigns! Please Wait!!
            </div>
          ) : surveys.length === 0 ? (
            <div className="custom-alert custom-alert-error">
            You have not created any campaigns yet!!!{" "}
            <Link to={`${url}/createcampaign`}>Start A New Campaign</Link>
          </div>
          ) : (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>Campaign Title</td>
                  <td>Date Created</td>
                  <td>Action</td>
                  <td>Responses</td>
                </tr>
              </thead>
              <tbody>
              {
                surveys.map((survey)=>(
                  <tr>
                  <td>{survey.title}</td>
                  <td>{survey.createdAt}</td>
                  <td><Link to={`${url}/details/${survey.slug}`} className="btn btn-primary btn-sm">Details</Link></td>
                  <td>0</td>
                </tr>
                ))
              }
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="row p-5">
        <div className="col-md-9">
          <h2>Campaign History</h2>
        </div>
        <div className="col-md-3">
          <Link to={`${url}/createcampaign`} className="btn btn-success">
            Start A Campaign
          </Link>
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
                    <Clock /> Oct 16, 2016
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
                    <Clock /> Oct 12, 2016
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
                    <Clock /> May 18, 2016
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
                    <Clock /> Apr 28, 2016
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
    </>
  );
};

export default CampaignIndex;
