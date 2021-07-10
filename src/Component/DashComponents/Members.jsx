import React, { useState } from "react";
import { User, Link } from "react-feather";
const Members = () => {
  const [value, setValue] = useState(" ");
  const handleChange = ({ target: { value } }) => {
    setValue({ value });
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-4 mb-4">
          <div className="col-md-12">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Members
              </button>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="card-text">
            
                  <div className="row ">
                    <div className="col-md-5">
                    <div className="card p-3">
                    <div className="row">
                      <div className="col-md-9">
                        <h5>Martha Griffin</h5>
                      </div>
                      <div className="col-md-3">
                        <Link/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h6>Grand Mother</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h6>Age: 77</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h6>Hobbies</h6>
                       
                        <span class="badge bg-info mx-2 ">Reading</span>
                          <span class="badge bg-success mx-2 ">Fishing</span>
                          <span class="badge bg-warning mx-2">
                            Taking walks
                          </span>
                          <span class="badge bg-secondary mx-2 ">
                            Being with family
                          </span>
                          <span class="badge bg-danger mx-2 ">Sleeping</span>
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
      {/* <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-center">
            <h4></h4>
            <button
              type="button"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#addrespondents"
            >
              Add Member
            </button>
          </div>

            <div class="row ">
              <div class="col-sm ">
                <div class="row ">
                  <div class="col-md-4 col-sm-12 ">
                    <div class="card card-refresh ">
                      <div class="refresh-container ">
                        <div class="loader-pendulums "></div>
                      </div>
                      <div class="card-header card-header-action ">
                        <h5>Martha Griffin</h5>
                        <div class="d-flex align-items-center card-action-wrap ">
                          <div class="d-flex align-items-center card-action-wrap">
                            <div class="inline-block dropdown">
                              <a
                                class="dropdown-toggle no-caret"
                                data-toggle="dropdown"
                                href="#"
                                aria-expanded="false"
                                role="button"
                              >
                                <Edit />
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="collapse_1 " class="collapse show ">
                        <div class="card-body ">
                          <p class="card-text ">Grand Mother</p>
                          <p class="card-text ">Age : 77</p>
                          <span class="badge bg-primary mx-3 ">Reading</span>
                          <span class="badge bg-primary mx-3 ">Fishing</span>
                          <span class="badge bg-primary mx-3">
                            Taking walks
                          </span>
                          <span class="badge bg-primary mx-3 ">
                            Being with family
                          </span>
                          <span class="badge bg-primary mx-3 ">Sleeping</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
        </div>
    
      <div
        class="modal fade "
        id="addrespondents"
        tabindex="-1 "
        role="dialog "
        aria-labelledby="addrespondents"
        aria-hidden="true "
      >
        <div class="modal-dialog modal-dialog-centered " role="document ">
          <div class="modal-content ">
            <div class="modal-header ">
              <h5 class="modal-title " id="addrespondents">
                Add Members
              </h5>
              <button
                type="button "
                class="close "
                data-dismiss="modal "
                aria-label="Close "
              >
                <span aria-hidden="true ">&times;</span>
              </button>
            </div>
            <div class="modal-body ">
              <form>
                <div class="form-group">
                  <label class="control-label mb-10" for="member_name">
                    Member Name
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="member_name"
                      placeholder="Memeber Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label mb-10" for="member_relationship">
                    Member Relationship
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-envelope-open"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      id="member_relationship"
                      placeholder="Member Relationship"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label mb-10" for="member_age">
                    Memeber Age
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-lock"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="member_age"
                      placeholder="Member Age"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="input_tags">Skills And Hobbies</label>
                  <select
                    id="input_tags"
                    class="form-control"
                    multiple="multiple"
                  >
                    <option selected="selected">orange</option>
                    <option>white</option>
                    <option selected="selected">purple</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary mr-10">
                  Submit
                </button>
                <button type="submit" class="btn btn-light">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Member Form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="row p-2">
                  <div className="col-md-12">
                    <label class="" for="autoSizingInputGroup">
                      Members name
                    </label>
                    <div class="input-group">
                      <div class="input-group-text">
                        <User />
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Members Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-12">
                    <label class="" for="autoSizingInputGroup">
                      Relationship Status
                    </label>
                    <select
                      defaultValue={value}
                      onChange={handleChange}
                      className="form-select form-control"
                    >
                      <option value="">Select Relationship Status</option>
                      <option value="Abj43p">Married</option>
                      <option value="EKY43b">Single</option>
                      <option value="IKD43p">Divorced</option>
                    </select>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-12">
                    <label class="" for="autoSizingInputGroup">
                      Members Age
                    </label>
                    <div class="input-group">
                      <div class="input-group-text">
                        <User />
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Members Age"
                      />
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-12">
                    <label class="" for="autoSizingInputGroup">
                      Skills and Hobbies
                    </label>
                    <select
                      defaultValue={value}
                      onChange={handleChange}
                      className="form-select form-control"
                    >
                      <option value="">Select Skills and Hobbies</option>
                      <option value="Abj43p">Running</option>
                      <option value="EKY43b">work-out</option>
                      <option value="IKD43p">swimmming</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
