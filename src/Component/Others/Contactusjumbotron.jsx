import React from "react";

const Contactusjumbotron = () => {
  return (
    <div>
      <section className="sectionjumbo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Have a question? Contact us</h2>
              <p>
                {" "}
                We are always available for you, you can contact us or message
                us on our live chat
              </p>
            </div>
            <div className="contactbtn justify-content-center">
              <button className="btn btn-success btn-lg">Contact us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactusjumbotron;
