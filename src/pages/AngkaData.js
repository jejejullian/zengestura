import React from "react";
import data from "../components/bisindo";
import { Link } from "react-router-dom";
import "../assets/css/navback.css";

const AngkaData = () => {
  return (
    <>
      <section className="navback">
        <div className="row-custom">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/home" className="btn btn-custom">
              <h5>BACK</h5>
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap-content">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {data.angka.map((item) => (
              <div key={item.title} className="col-md-3 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AngkaData;
