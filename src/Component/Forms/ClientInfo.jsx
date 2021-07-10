import { React, useState } from "react";

const ClientInfo = () => {
  const [value, setValue] = useState(" ");
  const handleChange = ({ target: { value } }) => {
    setValue({ value });
  };
  return (
    <div>
      <section className="d-flex justify-content-center pt-5">
        <form>
          <div className="row ">
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Bank Name
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Bank</option>
                <option value="Abj43p">Gtbank</option>
                <option value="EKY43b">UBA</option>
                <option value="IKD43p">Union</option>
                <option value="VIC43p">First Bank</option>
              </select>
            </div>
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Phone type
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Phone Type</option>
                <option value="Abj43p">IPhone</option>
                <option value="EKY43b">Samsung</option>
                <option value="IKD43p">Nokia</option>
                <option value="VIC43p">Motorola</option>
              </select>
            </div>
          </div>

          <div className="row ">
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Mobile Network
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Mobile Network</option>
                <option value="Abj43p">Mtn</option>
                <option value="EKY43b">Glo</option>
                <option value="IKD43p">Airtel</option>
                <option value="VIC43p">9mobile</option>
              </select>
            </div>
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Computer Brand
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Phone Type</option>
                <option value="Abj43p">HP</option>
                <option value="EKY43b">Samsung</option>
                <option value="IKD43p">Apple</option>
                <option value="VIC43p">Lenovo</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Salary Range
              </label>
              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Salary Range</option>
                <option value="Abj43p">10,000-20,000</option>
                <option value="EKY43b">20,000-30,000</option>
                <option value="IKD43p">30,000-40,000</option>
                <option value="VIC43p">40,000-50,000</option>
              </select>
            </div>
            <div className="col-6">
              <label for="exampleInputEmail1" class="form-label">
                Number Of Family Members
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Number</option>
                <option value="Abj43p">IPhone</option>
                <option value="EKY43b">Samsung</option>
                <option value="IKD43p">Nokia</option>
                <option value="VIC43p">Motorola</option>
              </select>
            </div>
            <div className="row">
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">
                  Religion
                </label>

                <select
                  value={value}
                  onChange={handleChange}
                  className="form-select form-control"
                >
                  <option selected>Select Religion</option>
                  <option value="Abj43p">Christianity</option>
                  <option value="EKY43b">Islam</option>
                  <option value="IKD43p">Buddism</option>
                  <option value="VIC43p">Judism</option>
                </select>
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">
                  Most Active Social Media
                </label>

                <select
                  value={value}
                  onChange={handleChange}
                  className="form-select form-control"
                >
                  <option selected>Select Social Media</option>
                  <option value="Abj43p">Facebook</option>
                  <option value="EKY43b">Instagram</option>
                  <option value="IKD43p">Tiktok</option>
                  <option value="VIC43p">Snapchat</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label for="exampleInputEmail1" class="form-label">
                Covid Status
              </label>

              <select
                value={value}
                onChange={handleChange}
                className="form-select form-control"
              >
                <option selected>Select Covid Status</option>
                <option value="Abj43p">Positive (past and present)</option>
                <option value="EKY43b">Negative</option>
                <option value="EKY43b">Know Someone Positive</option>
              </select>
            </div>
          </div>

          
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
  );
};

export default ClientInfo;
