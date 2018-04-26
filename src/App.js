import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import CurrentWeather from './containers/CurrentWeather/CurrentWeather';
import WeatherForecast from './containers/WeatherForecast/WeatherForecast';
// import SearchBar from './components/SearchBar/SearchBar';
// import ForecastButtons from './components/ForecastButtons/ForecastButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>       
        {/* <ForecastButtons /> */}
        <WeatherForecast />
        {/* <p>footer</p> */}
      </div>
    );
  }
}

export default App;
