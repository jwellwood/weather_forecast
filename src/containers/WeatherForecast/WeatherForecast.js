import React, { Component } from "react";
import DisplayForecastWeather from "../../components/DisplayWeather/DisplayForecastWeather/DisplayForecastWeather";
import DisplayCurrentWeather from "../../components/DisplayWeather/DisplayCurrentWeather/DisplayCurrentWeather";
import SearchBar from "../../components/SearchBar/SearchBar";

const apiKey = "06f22ef29c5b9509b8a81d45728d9372";
class WeatherForecast extends Component {
  state = {
    city: "madrid",
    currentData: [],
    forecastWeatherData: []    
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      }&units=metric&APPID=` + apiKey
    )
      .then(resp => resp.json())
      .then(data => {
        const city = data.city;
        const cityData = [city.name, city.country];
        const current = data.list[0];
        const unixTime = new Date(current.dt *1000);
        const date = unixTime.toDateString();
        const time = unixTime.toTimeString();
        const currentData = {
          date: date,
          time: time.slice(0, 5),
          temp: current.main.temp.toFixed(0),
          icon: current.weather[0].icon,
          description: current.weather[0].description,
          humidity: current.main.humidity,
          wind: current.wind.speed.toFixed(1)
        }
        const forecasts = data.list.slice(1, 9);
        const forecastData = forecasts.map(forecast => {
          return {
            ...forecast
          };
        });
        this.setState({
          forecastWeatherData: forecastData,
          city: cityData,
          currentData: currentData
        });
      })
      .catch(error => alert("Unable to fetch data", error));
  }

  searchCityHandler = (event) => {
    const searchCity = event.target.value;
    this.setState ({city: searchCity});
  }

  render() {
    return (
      <div>
        <SearchBar submitted={this.searchCityHandler}/>
        <DisplayCurrentWeather 
          city={this.state.city}
          currentData={this.state.currentData}/>
        <DisplayForecastWeather
          forecastData={this.state.forecastWeatherData}
        />
      </div>
    );
  }
}

export default WeatherForecast;
