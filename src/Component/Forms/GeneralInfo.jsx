import React from 'react'

const GeneralInfo = () => {
    return (
        <div>
                      <section className="d-flex justify-content-center pt-5">
                  <form>
                    <div className="row ">
                      <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">
                          Account Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">
                          Account Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">
                          Bank
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">
                          CryptoCurrency
                        </label>

                        <select
                          value={value}
                          onChange={handleChange}
                          className="form-select form-control"
                        >
                          <option selected>Select CryptoCurrency</option>
                          <option value="Abj43p">Bitcoin</option>
                          <option value="EKY43b">Eth</option>
                          <option value="IKD43p">PSG</option>
                          <option value="VIC43p">Pi</option>
                        </select>
                        {/* <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      /> */}
                      </div>
                      <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <label for="exampleInputEmail1" class="form-label">
                         Amount paid
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-2">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </section>
        </div>
    )
}

export default GeneralInfo
