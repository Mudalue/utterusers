import {useState} from "react";
import Home from "./Component/Home"
import './App.css';
import { Switch, Route } from "react-router-dom"
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


import axios from "axios";
function App() {
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState(null);
  // state
  const [msg, setMsg] = useState(null);
  const registeraccount = async(e)=>{
    e.preventDefault();
    // setState=== loading
    const response = await axios.post("https://utteruser.herokuapp.com/api/v1/users/register", {email, password});
    console.log(response);
  }
  return (
    <div>
      <Switch>
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
          <CampaignHome/>
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
        <Route path="/dashboard">
          <UserDashboard />
        </Route>
        <Route path="/stuff">
        <div style={{height: 400}}>

<form action="" onSubmit={registeraccount}>
  <input type="text"placeholder="email" onChange={({target : {value}}) => setEmail(value)} />
  <input type="text" placeholder="password" onChange={({target : {value}}) => setPass(value)} />
  {/*  */}
  <button>register</button>
</form>
</div>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Startasurvey/>
    </div>
  );
}

export default App;
