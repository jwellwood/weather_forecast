import React, { Component } from 'react';
import axios from 'axios';
import MainPage from '../components/MainPage/index';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const initialState = {
  city: '',
  country: '',
  currentData: {},
  forecastData: [],
  showDetails: false,
  showForecast: false,
  error: false,
};
class App extends Component {
  state = {
    ...initialState,
  };

  getCurrentWeather = e => {
    e.preventDefault();
    const city = e.target.city.value;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
      )
      .then(res => {
        this.setState({
          ...initialState,
          city: res.data.name,
          currentData: res.data,
        });
      })
      .catch(() => this.setState({ error: true }));
  };

  getForecast = e => {
    e.preventDefault();
    const { city } = this.state;
    if (city !== '') {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`,
        )
        .then(res => {
          const forecastData = res.data.list.slice(1, 9);
          this.setState({
            forecastData: forecastData,
            showForecast: true,
          });
        })
        .catch(() => this.setState({ error: true }));
    }
  };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  toggleForecast = () => {
    this.setState({ showForecast: !this.state.showForecast });
  };

  onReset = () => {
    this.setState({
      ...initialState,
    });
  };

  render() {
    const {
      city,
      currentData,
      forecastData,
      showDetails,
      showForecast,
      error,
    } = this.state;
    return (
      <div>
        <MainPage
          city={city}
          currentData={currentData}
          forecastData={forecastData}
          getCurrentWeather={this.getCurrentWeather}
          getForecast={this.getForecast}
          onReset={this.onReset}
          toggleDetails={this.toggleDetails}
          toggleForecast={this.toggleForecast}
          showDetails={showDetails}
          showForecast={showForecast}
          error={error}
        />
      </div>
    );
  }
}

export default App;
