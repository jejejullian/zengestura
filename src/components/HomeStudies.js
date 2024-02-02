import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/homestudies.css";

const HomeStudies = () => {
  return (
    <section className="homestudies" id="studies">
      <div className="container">
        <div className="row row-custom align-items-center">
          <h2>Belajar Bersama</h2>
          <div className="card-deck">
            <Link to="/abjad" className="card">
              <div className="card-body">
                <h5 className="card-title">Abjad</h5>
              </div>
            </Link>
            <Link to="/angka" className="card">
              <div className="card-body">
                <h5 className="card-title">Angka</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStudies;
