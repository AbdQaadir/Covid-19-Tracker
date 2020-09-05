import React from "react";

import Map from "./map.png";
import "./Countries.css";
const Countries = ({ countries, selectedCountry, handleClick }) => {
  return (
    <div className="bg-white mx-5 px-4 py-5 mt-4">
      <div className="row  mx-5">
        <div className="col-12">
          <h1>Top Affected Countries</h1>
        </div>
        <div className="col-5">
          <p>Last Updated</p>
        </div>
        <div className="col-3">
          <h5>{selectedCountry.Country}</h5>
        </div>
      </div>

      <div className="row mx-5">
        <div className="col-4" id="top-coutries">
          <p className="px-0 mx-0">Countries</p>

          <ul className="list-unstyled px-3">
            {countries.map((country, idx) => {
              while (idx < 5) {
                return (
                  <li
                    className={
                      country.CountryCode === selectedCountry.CountryCode
                        ? "active-con row justify-content-between country-item my-1"
                        : "row justify-content-between country-item my-1"
                    }
                    key={country.CountryCode}
                    onClick={() => handleClick(`${country.CountryCode}`)}
                  >
                    <h6>{country.Country}</h6>
                    <h6 className="text-primary">
                      {country.TotalConfirmed
                        ? country.TotalConfirmed.toLocaleString()
                        : "000000"}
                    </h6>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-5 country-detail">
              <small className="text-muted">Total Cases</small>
              <h6>
                {selectedCountry.TotalConfirmed
                  ? selectedCountry.TotalConfirmed.toLocaleString()
                  : "0000000"}
              </h6>
            </div>
            <div className="col-5 country-detail">
              <small className="text-muted">Active Cases</small>
              <h6>
                {selectedCountry.TotalConfirmed
                  ? (
                      selectedCountry.TotalConfirmed -
                      selectedCountry.TotalRecovered
                    ).toLocaleString()
                  : "000000"}
              </h6>
            </div>
            <div className="col-5 country-detail">
              <small className="text-muted">Recovered</small>
              <h6>
                {selectedCountry.TotalRecovered
                  ? selectedCountry.TotalRecovered.toLocaleString()
                  : "000000"}
              </h6>
            </div>
            <div className="col-5 country-detail">
              <small className="text-muted">Total Deaths</small>
              <h6>
                {selectedCountry.TotalDeaths
                  ? selectedCountry.TotalDeaths.toLocaleString()
                  : "000000"}
              </h6>
            </div>
            <div className="col-5 country-detail">
              <small className="text-muted">New Cases</small>
              <h6>
                {selectedCountry.NewConfirmed
                  ? selectedCountry.NewConfirmed.toLocaleString()
                  : "000000"}
              </h6>
            </div>
            <div className="col-5 country-detail">
              <small className="text-muted">New Deaths </small>
              <h6>
                {selectedCountry.NewDeaths
                  ? selectedCountry.NewDeaths.toLocaleString()
                  : "000000"}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <img src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Countries;
