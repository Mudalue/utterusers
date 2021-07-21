import React, { useState, useEffect } from "react";
import axios from "axios";
import { createSurvery } from "./../../../../helpers/API";

const StartCampaign = () => {
  const [extraInput, setExtraInput] = useState([{ question: "", answers: "" }]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [saved, setSaved] = useState(null);

  const addInput = (e) => {
    e.preventDefault();
    const clone = [...extraInput];
    clone.push({ question: "", answers: "" });
    setExtraInput(clone);
  };

  const removeQuestion = (e, index) => {
    e.preventDefault();
    const clone = [...extraInput];
    clone.splice(index - 1, 1);
    setExtraInput(clone);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const inputs = [...extraInput];
    inputs[index][name] = value;
    setExtraInput(inputs);
  };

  const saveCampaign = async (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("__magnumpi");
    setSaved(
      <div className="alert alert-warning text-center">
        Saving Your Campaign!!!
      </div>
    );
    const API_CALL = await createSurvery({
      title,
      questions: extraInput,
      id: userid,
      category
    });

    API_CALL.status === "success"
      ? setSaved(
          <div className="alert alert-success text-center">
            Your Campaign As Been Created Successfully!
          </div>
        )
      : setSaved(
          <div className="alert alert-danger text-center">
            An Error Occured!
          </div>
        );
  };

  return (
    <div>
      <h2 className="text-center">Let's Create A New Campaign</h2>

      <div className="row justify-content-center">
        <hr />
        <form action="" className="col-md-8" onSubmit={saveCampaign}>
          <div className="mb-3">
            <label htmlFor="">What's Your Campaign Called?</label>
            <input
              type="text"
              placeholder="Campaign Title."
              className="form-control"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Select A Campaign Category</label>
            <select className="form-control" required onChange={({target : {value}}) => setCategory(value)}>
              <option value="">-- Campaign Category  --</option>
              <option>Vote</option>
              <option>Survey</option>
              <option>Product Testing</option>
            </select>
          </div>
          <h6>Campaign Questions.</h6>

          {extraInput.map((x, i) => (
            <>
              <div
                className="mb-3"
                style={{ backgroundColor: "#f8f8f8", padding: 10 }}
              >
                {i > 0 ? (
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-sm btn-danger mb-1"
                      onClick={(e) => {
                        removeQuestion(e, i);
                      }}
                    >
                      Remove Question
                    </button>
                  </div>
                ) : null}

                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter A Question."
                    className="form-control"
                    onChange={(e) => handleChange(e, i)}
                    name="question"
                    value={x.question}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter Your Answer Options, separated by commas"
                    className="form-control"
                    name="answers"
                    onChange={(e) => handleChange(e, i)}
                    value={x.answers}
                  />
                  <div className="form-text">
                    Ensure that your options are separated by commas..
                  </div>
                </div>
              </div>
            </>
          ))}

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            {saved && saved}
            <button className="btn btn-sm btn-success mt-3">
              Save Campaign
            </button>
            <button className="btn btn-sm btn-warning mt-3" onClick={addInput}>
              Ask Another Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartCampaign;
