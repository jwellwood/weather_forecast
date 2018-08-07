import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/UI/Navbar/Nav/Navbar';
import SearchBar from './components/UI/SearchBar/SearchBar';
import WeatherModal from './components/WeatherModal/WeatherModal';
import Aux from './hoc/Auxiliary';
import Background from './components/Background/Background';
import Message from './components/Message/Message';
import classes from './App.module.css';
import WeatherConditions from './components/WeatherItems/WeatherConditions/WeatherConditions';

class App extends Component {
  state = {
    city: '',
    country: '',
    currentData: [],
    forecastData: [],
  };

  getWeather = async e => {
    e.preventDefault();
    const apiKey = '06f22ef29c5b9509b8a81d45728d9372';
    const city = e.target.city.value;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`,
    );
    const cityInfo = res.data.city;
    // Current weather calls
    const currentWeather = res.data.list[0];
    const dateDetails = new Date(currentWeather.dt * 1000);
    const date = dateDetails.toLocaleDateString();
    const time = dateDetails.toLocaleTimeString();
    const currentConditions = currentWeather.weather[0];
    const currentDetails = currentWeather.main;
    const currentData = {
      date,
      time,
      icon: currentConditions.icon,
      temp: currentDetails.temp.toFixed(0),
      description: currentConditions.description,
      humidity: currentDetails.humidity,
      wind: currentWeather.wind.speed.toFixed(1),
    };
    // Forecast data
    const forecasts = res.data.list.slice(1, 9);
    const forecastData = forecasts.map(forecast => ({ ...forecast }));
    // set State
    this.setState({
      city: cityInfo.name,
      country: cityInfo.country,
      currentData,
      forecastData,
    });
  };

  render() {
    const { city, country, currentData, forecastData } = this.state;

    let weatherCurrent = <Background />;
    if (city.length !== 0) {
      weatherCurrent = <WeatherConditions current={currentData} />;
    }

    let weatherForecast = <Message />;
    if (city.length !== 0) {
      weatherForecast = (
        <WeatherModal city={city} country={country} current={currentData} forecast={forecastData} />
      );
    }

    return (
      <Aux>
        <Navbar />
        <div className={classes.App}>
          <SearchBar getWeather={this.getWeather} city={city} country={country} />
          {weatherForecast}
          {weatherCurrent}
        </div>
      </Aux>
    );
  }
}

export default App;
