import React from "react";

const Cnavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light py-4"> 
        <div class="container-fluid">
          <a class="navbar-brand">
            <img
              src="\images\logo.png"
              height="30"
              class="logo-light-mode"
              alt=""
            ></img>
          </a>
          <form class="d-flex">
            <button class="btn btn-success" type="submit">
              Create a campaign
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Cnavbar;
