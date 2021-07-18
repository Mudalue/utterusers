import React from "react";

const CAlert = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong> You're profile is waiting to be activated. </strong>{" "}
              Re-send activation email
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAlert;
