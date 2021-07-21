import React from "react";
import { Clock } from "react-feather";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import CampaignIndex from "./Route/campaignRoute/Index";
import StartCampaign from "./Route/campaignRoute/StartCampaign";
import CampaignDetail from "./Route/campaignRoute/CampaignDetails";

const Campaign = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <section className="home" style={{ marginBottom: 170 }}>
        <div className="container">
          <Switch>
          <Route path={`${path}/details/:slug`}>
              <CampaignDetail />
            </Route>
            <Route path={`${path}/createcampaign`}>
              <StartCampaign />
            </Route>
            <Route path={`${path}`}>
              <CampaignIndex />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
