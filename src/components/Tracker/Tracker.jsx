import React from "react";

import "./Tracker.css";
const Tracker = ({ global }) => {
  let {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = global;

  return (
    <React.Fragment>
      <div className="row px-1 px-md-3 px-lg-5" id="tracker-header">
        <div className="col-12 my-4">
          <h1>COVID-19 Tracker</h1>
        </div>
      </div>
      <div
        className="row mx-1 mx-md-3 mx-lg-5 py-4 align-items-center"
        id="tracker-body"
      >
        <div className="tracter-item mx-auto px-1 px-md-3 px-lg-4 py-2 text-center my-4">
          <h5>Active Cases</h5>
          <h1 className="tracker-figure">
            {(TotalConfirmed - TotalRecovered).toLocaleString() || "000000"}
          </h1>

          <p className="tracker-change">
            +{NewConfirmed ? NewConfirmed.toLocaleString() : "000000"}
          </p>
        </div>

        <div className="tracter-item mx-auto px-1 px-md-3 px-lg-4 py-2 text-center my-4">
          <h5>Total Cases</h5>
          <h1 className="tracker-figure">
            {TotalConfirmed ? TotalConfirmed.toLocaleString() : "000000"}
          </h1>
          <p className="tracker-change">
            +
            {NewConfirmed
              ? (NewConfirmed - NewRecovered).toLocaleString()
              : "000000"}
          </p>
        </div>

        <div className="tracter-item mx-auto px-1 px-md-3 px-lg-4 py-2 text-center my-4">
          <h5>Recovered</h5>
          <h1 className="tracker-figure">
            {TotalRecovered ? TotalRecovered.toLocaleString() : "000000"}
          </h1>
          <p className="tracker-change">
            +{NewRecovered ? NewRecovered.toLocaleString() : "000000"}
          </p>
        </div>

        <div className="tracter-item mx-auto px-1 px-md-3 px-lg-4 py-2 text-center my-4">
          <h5>Total Deaths</h5>
          <h1 className="tracker-figure">
            {TotalDeaths ? TotalDeaths.toLocaleString() : "000000"}
          </h1>
          <p className="tracker-change">
            +{NewDeaths ? NewDeaths.toLocaleString() : "000000"}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tracker;
