import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/ui/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import Background from '../components/ui/Background/Background';
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
    const currentDetails = currentWeather.main;
    const currentData = {
      date,
      time,
      icon: currentConditions.icon,
      temp: currentDetails.temp.toFixed(0),
      description: currentConditions.description,
      humidity: currentDetails.humidity,
      wind: (currentWeather.wind.speed * 3.6).toFixed(1),
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
      weatherCurrent = <CurrentWeather current={currentData} />;
    }

    // let weatherForecast = <Message />;
    // if (city.length !== 0) {
    //   weatherForecast = (
    //     <Forecast
    //       city={city}
    //       country={country}
    //       current={currentData}
    //       forecast={forecastData}
    //     />
    //   );
    // }

    return (
      <div>
        <Navbar />
        <div>
          <SearchBar
            getWeather={this.getWeather}
            city={city}
            country={country}
          />

          {/* {weatherForecast} */}
          {weatherCurrent}
          <ForecastDropdown forecast={forecastData} />
        </div>
      </div>
    );
  }
}

export default App;
