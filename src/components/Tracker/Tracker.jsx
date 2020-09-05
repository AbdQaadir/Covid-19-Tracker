import React from "react";

import "./Tracker.css";
const Tracker = ({ countries, global }) => {
  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = global;
  return (
    <React.Fragment>
      <div className="row px-5" id="tracker-header">
        <div className="col-12 my-4">
          <h1>COVID-19 Tracker</h1>
        </div>
      </div>
      <div className="row mx-5 py-4 align-items-center" id="tracker-body">
        <div className="tracter-item mx-auto px-4 py-2 text-center">
          <h5>Active Cases</h5>
          <h1 className="tracker-figure">
            {TotalConfirmed - TotalRecovered || "000000"}
          </h1>

          <p className="tracker-change">+{NewConfirmed || "000000"}</p>
        </div>

        <div className="tracter-item mx-auto px-4 py-2 text-center">
          <h5>Total Cases</h5>
          <h1 className="tracker-figure">{TotalConfirmed || "000000"}</h1>
          <p className="tracker-change">
            +{NewConfirmed - NewRecovered || "000000"}
          </p>
        </div>

        <div className="tracter-item mx-auto px-4 py-2 text-center">
          <h5>Recovered</h5>
          <h1 className="tracker-figure">{TotalRecovered || "000000"}</h1>
          <p className="tracker-change">+{NewRecovered || "000000"}</p>
        </div>

        <div className="tracter-item mx-auto px-4 py-2 text-center">
          <h5>Total Deaths</h5>
          <h1 className="tracker-figure">{TotalDeaths || "000000"}</h1>
          <p className="tracker-change">+{NewDeaths || "000000"}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tracker;
