import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/ui/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import ForecastDropdown from '../components/ui/ForecastDropdown/ForecastDropdown';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  state = {
    city: '',
    country: '',
    currentData: [],
    forecastData: [],
  };

  getWeather = async e => {
    e.preventDefault();
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
    console.log(currentConditions);
    const currentDetails = currentWeather.main;
    const currentData = {
      date,
      time,
      icon: currentConditions.id,
      temp: currentDetails.temp.toFixed(0),
      description: currentConditions.description,
      humidity: currentDetails.humidity,
      wind: (currentWeather.wind.speed * 3.6).toFixed(1),
    };
    console.log(currentData.icon);
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
    return (
      <div>
        <Navbar />
        <div>
          <SearchBar
            getWeather={this.getWeather}
            city={city}
            country={country}
          />
          {city.length !== 0 ? <CurrentWeather current={currentData} /> : null}
          {forecastData.length !== 0 ? (
            <ForecastDropdown forecast={forecastData} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
