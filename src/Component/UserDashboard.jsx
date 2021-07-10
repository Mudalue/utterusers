import React from "react";
import Navbar from "./Others/Navbar";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  User,
  Home,
  Users,
  CreditCard,
  Briefcase,
  LogOut,
  Bell,
  Clock,
} from "react-feather";
import { Menu } from "react-feather";
import { BookOpen } from "react-feather";
import UserFooter from "./Others/UserFooter";
import { Activity } from "react-feather";
import { Archive } from "react-feather";
import DashboardIndex from "./DashComponents";
import Members from "./DashComponents/Members";
import Profile from "./DashComponents/Profile";
import Campaign from "./DashComponents/Campaign";
import Charges from "./DashComponents/Charges";
import Payment from "./DashComponents/Payment";
const UserDashboard = () => {
  const { url, path } = useRouteMatch();

  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <a className="navbar-brand" href="#">
            <img
              src="\images\logo.png"
              height="30"
              class="logo-light-mode"
              alt=""
            />
          </a>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <Home className="mx-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/profile`}>
              <Archive className="mx-3" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/members`}>
              <Users className="mx-3" />
              <span>Members</span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/campaign`}>
              <Activity className="mx-3" />
              <span>Campaign</span>
            </Link>
          </li>
          {/* <li>
            <Link to={`${url}/charges`}>
              <BookOpen className="mx-3" />
              <span>Charges</span>
            </Link>
          </li> */}
          <li>
            <Link to={`${url}/payment`}>
              <CreditCard className="mx-3" />
              <span>Payment</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <LogOut className="mx-3" />
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </nav>

      <div id="content">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-transparent"
            >
              <Menu className="text-light" />
            </button>
            {/* <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button> */}
            <div className="nav-banner  mt-2 p-2 d-inline-block text-light">
              <a className="navbar-brand" href="#">
                <img
                  src="\images\logo.png"
                  height="30"
                  class="logo-light-mode"
                  alt=""
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <User className="text-light" />
                    <span className="text-light">Welcome Admin</span>
                  </a>
                </li>
                {/* <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i data-feather="circle"></i>Page</a>
                            </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div id="content" className="content">
          <div className="container">
            {/* routing done here. */}
            <Switch>
            <Route path={`${path}/payment`}>
                <Payment/>
              </Route>
            <Route path={`${path}/campaign`}>
                <Campaign/>
              </Route>
            <Route path={`${path}/members`}>
                <Members/>
              </Route>
              <Route path={`${path}/profile`}>
                <Profile/>
              </Route>
              <Route path={path}>
                <DashboardIndex />
              </Route>
            </Switch>
          </div>

          <div className="dashfooter">
            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
