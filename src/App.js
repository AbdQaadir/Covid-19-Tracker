import React from "react";

// Components
import Header from "./components/Header/Header";
import Tracker from "./components/Tracker/Tracker";
import Countries from "./components/Countries/Countries";
import Symptoms from "./components/Symptoms/Symptoms";
import Protection from "./components/Protection/Protection";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortedCountries: [],
      currentDate: "",
      Global: [],
      selectedCountry: [],
    };
  }
  getData = async () => {
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    console.log(data);
    const { Countries, Date: currentDate, Global } = data;
    const sortedCountries = Countries.sort(
      (a, b) => parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed)
    );
    const selectedCountry = sortedCountries[0];
    this.setState({
      sortedCountries,
      currentDate,
      Global,
      selectedCountry,
    });
  };
  componentDidMount() {
    this.getData();
  }

  handleClick = (code) => {
    const { sortedCountries } = this.state;
    console.log(code);
    const selectedCountry = sortedCountries.filter(
      (country) => country.CountryCode === code
    );
    console.log(selectedCountry);
    this.setState({
      selectedCountry: selectedCountry[0],
    });
  };
  render() {
    const {
      sortedCountries,
      Global,
      currentDate,
      selectedCountry,
    } = this.state;
    return (
      <div className="container-fluid">
        <Header currentDate={currentDate} />

        <Tracker global={Global} />

        <Countries
          countries={sortedCountries}
          selectedCountry={selectedCountry}
          handleClick={this.handleClick}
        />

        <Symptoms />

        <Protection />

        <Footer />
      </div>
    );
  }
}

export default App;
