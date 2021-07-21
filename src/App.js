import { useState } from "react";
import Home from "./Component/Home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Component/Others/Navbar";
import UserDashboard from "./Component/UserDashboard";
import Campaignres from "./Component/Forms/Campaignres";
import ClientInfo from "./Component/Forms/ClientInfo";
import Basicreg from "./Component/Forms/Basicreg";
import Profile from "./Component/DashComponents/Profile";
import OnlineSurvey from "./Component/HomeComponents/Survey/OnlineSurvey";
import OfflineSurvey from "./Component/HomeComponents/Survey/OfflineSurvey";
import Npssurvey from "./Component/HomeComponents/Survey/Npssurvey";
import MrketResearch from "./Component/HomeComponents/Survey/MrketResearch";
import Salesxp from "./Component/HomeComponents/Salesxp";
import Customerxp from "./Component/HomeComponents/Customerxp";
import CampaignHome from "./Component/CampaignHome";
import Pricing from "./Component/Pricing";
import Employeexp from "./Component/HomeComponents/Employeexp";
import Startasurvey from "./Component/Modals/Startasurvey";

import { ProtectedRoute } from "./Component/ProtectedRoute";
import Contact from "./Component/Others/Contact";
import Aboutus from "./Component/Others/Aboutus";
import axios from "axios";
import Scrolltotop from "./Component/Others/Scrolltotop";
import Cdashboard from "./Component/ClientComponent/Cdashboard";
function App() {
  return (
    <div>
      <Scrolltotop />
      <Switch>
        <Route path="/client">
          <Cdashboard />
        </Route>
        <Route path="/About-us">
          <Aboutus />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/employee-experience">
          <Employeexp />
        </Route>
        <Route path="/customer-experience">
          <Customerxp />
        </Route>
        <Route path="/sales-experience">
          <Salesxp />
        </Route>
        <Route path="/take-a-campaign">
          <CampaignHome />
        </Route>
        <Route path="/market-research">
          <MrketResearch />
        </Route>
        <Route path="/npssurvey">
          <Npssurvey />
        </Route>
        <Route path="/offlinesurvey">
          <OfflineSurvey />
        </Route>
        <Route path="/onlinesurvey">
          <OnlineSurvey />
        </Route>
        <ProtectedRoute path="/dashboard" component={UserDashboard} />

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Startasurvey />
    </div>
  );
}

export default App;
