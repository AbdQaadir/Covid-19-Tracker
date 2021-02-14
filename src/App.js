import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import Header from "./components/Header/Header";
import Tracker from "./components/Tracker/Tracker";
import Countries from "./components/Countries/Countries";
import Symptoms from "./components/Symptoms/Symptoms";
import Protection from "./components/Protection/Protection";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import "./App.css";

const initialState = {
  sortedCountries: [],
  currentDate: "",
  Global: [],
  selectedCountry: [],
  loading: true,
};

const App = () => {
  const [covidState, setCovidState] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        const { data } = response;
        const { Countries, Date: currentDate, Global } = data;
        const sortedCountries = Countries.sort(
          (a, b) => parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed)
        );
        const selectedCountry = sortedCountries[0];
        setCovidState({
          sortedCountries,
          currentDate,
          Global,
          selectedCountry,
          loading: false,
        });
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  }, []);

  const handleClick = (code) => {
    const { sortedCountries } = covidState;
    const selectedCountry = sortedCountries.filter(
      (country) => country.CountryCode === code
    );
    setCovidState({ ...covidState, selectedCountry: selectedCountry[0] });
  };

  const {
    sortedCountries,
    Global,
    currentDate,
    selectedCountry,
    loading,
  } = covidState;
  return (
    <div className="container-fluid">
      {loading ? <Loading /> : null}
      {error ? <h3>{error}</h3> : null}
      {!error && !loading ? (
        <>
          <Header currentDate={currentDate} />

          <Tracker global={Global} />

          <Countries
            countries={sortedCountries}
            selectedCountry={selectedCountry}
            handleClick={handleClick}
          />

          <Symptoms />

          <Protection />

          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
