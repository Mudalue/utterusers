import React from "react";
import { CreditCard , Clock} from "react-feather";
const Payment = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-9">
            <h2>Payment and History</h2>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success btn-lg">
              Create a campaign
            </button>
          </div>
        </div>
        <div className="row mt-4 p-3">
          <div className="col-md-10">
            <h6 className="font-weight-bold">Payment Methods: </h6>
          </div>
          <div className="col-md-2">
            <button className="btn btn-danger btn-md">Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="row p-3">
                      <div className="col-md-12">
                        <CreditCard />
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Account Number: 2323290302</h6>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Bank Name: Access Bank</h6>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Account Name: Cristo Murphy</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    {" "}
                    <div className="row p-3">
                      <div className="col-md-12">
                        <CreditCard />
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>78UVY868FYI8BYB8Y8BI985</h6>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Crypto-Currency: Bitcoin</h6>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Account Name: Calvin Carlo</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="row p-3">
                      <div className="col-md-12">
                        <CreditCard />
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Email: Miriam@gmail.com</h6>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Pay-Pal</h6>
                      </div>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-12">
                        <h6>Account Name: Miriam Jockky</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-md-12">
            <h6>Payment History:</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table class="table">
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
                    <Clock/> Oct 16, 2016
                    </span>{" "}
                  </td>
                  <td>₦ 4500</td>
                  <td>Bank Account</td>
                  <td>
                    <div class="badge bg-primary">Success</div>
                  </td>
                  <td>
                    <a href="javascript:void(0)">#26589</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="text-muted">
                    <Clock/> Oct 12, 2016
                    </span>{" "}
                  </td>
                  <td>₦ 24530</td>
                  <td>Paypal</td>
                  <td>
                    <div class="badge bg-danger">Fail</div>
                  </td>
                  <td>
                    <a href="javascript:void(0)">#58746</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="text-muted">
                      <Clock/> May 8, 2016
                    </span>{" "}
                  </td>
                  <td>₦ 3800</td>
                  <td>Bitcoin</td>
                  <td>
                    <div class="badge bg-info">Pending</div>
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
  );
};

export default Payment;
