import React from "react";

const Profile = () => {
  return (
        <div className="container">
          <div class="row">
            <div class="col-xl-12 pa-0">
              <div class="tab-content mt-sm-60 mt-30">
                <div class="tab-pane fade show active" role="tabpanel">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="card card-profile-feed">
                          <div class="card-header card-header-action">
                            <div class="media align-items-center">
                              <div class="media-body">
                                <div class="text-capitalize font-weight-500 text-dark">
                                  <h4>Personal Details :</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="table-wrap">
                            <table
                              class="table tablesaw table-bordered"
                              data-tablesaw-mode="stack"
                            >
                              <tbody>
                                <tr>
                                  <td class="title text-dark">Email :</td>
                                  <td>
                                    <p>kristajoseph0203@mail.com</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">Gender :</td>
                                  <td>Female</td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">Skills :</td>
                                  <td>html, css, js, mysql</td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">Language :</td>
                                  <td>English, Japanese, Chinese</td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">Birthday :</td>
                                  <td>2nd March, 1996</td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">Address :</td>
                                  <td>10 Adama Ikeja Lagos</td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">Location :</td>
                                  <td>Beijing, China</td>
                                </tr>
                                <tr>
                                  <td class="title text-dark">
                                    Phone Number :
                                  </td>
                                  <td>(+234) 1277687612</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="card card-profile-feed">
                          <div class="card-header card-header-action">
                            <div class="media align-items-center">
                              <div class="media-body">
                                <div class="text-capitalize font-weight-500 text-dark">
                                  <h4>Work And Experience :</h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <span>
                                <i class="ion ion-md-calendar font-18 text-light-20 mr-10"></i>
                                <span>Level of Education:</span>
                              </span>
                              <span class="ml-5 text-dark">PHD</span>
                            </li>
                            <li class="list-group-item">
                              <span>
                                <i class="ion ion-md-briefcase font-18 text-light-20 mr-10"></i>
                                <span>Current Job:</span>
                              </span>
                              <span class="ml-5 text-dark">
                                Senior Web Developer
                              </span>
                            </li>
                            <li class="list-group-item">
                              <span>
                                <i class="ion ion-md-home font-18 text-light-20 mr-10"></i>
                                <span>Hobbies:</span>
                              </span>
                              <span class="ml-5 text-dark">
                                sleeping, singing, traveling
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div class="card card-profile-feed">
                          <div>
                            <div>
                              <h6 class="card-header">Available Campaigns</h6>
                              <div class="card-body pa-0">
                                <div class="table-wrap">
                                  <div class="table-responsive">
                                    <table class="table mb-0">
                                      <tbody>
                                        <tr>
                                          <td>Subscribe to Newsletter</td>
                                          <td>
                                            <div class="toggle toggle-simple toggle-light toggle-bg-primary toggle1"></div>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Recive email alerts</td>
                                          <td>
                                            <div class="toggle toggle-simple toggle-light toggle-bg-primary toggle1"></div>
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
          </div>
        </div>
    
    
  );
};

export default Profile;
