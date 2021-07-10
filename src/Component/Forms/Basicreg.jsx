import React from 'react'

const Basicreg = () => {
    return (
        <div>
            <section className="d-flex justify-content-center pt-5">
        <form>
          <div className="row">
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                First Name
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
                Last Name
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
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Company Name
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
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Password
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
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            </div>
            {/* <div className="row">
            <div className="col-12">
              <label for="exampleInputEmail1" class="form-label">
                Campaign Type
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Campaign Type</option>
                <option value="Abj43p">Online Survey</option>
                <option value="EKY43b">Offline Survey</option>
                <option value="IKD43p">Nps survey</option>
                <option value="VIC43p">Questionaire</option>
              </select>
            </div>
            </div> */}

          <br />
          <div className="row">
            <div className="col-md-12">
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

export default Basicreg
