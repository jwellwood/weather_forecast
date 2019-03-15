import React from 'react';
import SearchBar from './Search/SearchBar';
import CityInfo from './CityInfo/';
import CurrentWeather from './Current';
import Forecast from './Forecast/Forecast';
import MainNavbar from '../ui/Navbar/Navbar';
import Landing from './Landing/Landing';
import PageContainer from '../hoc/PageContainer';

const MainPage = props => {
  const { currentData, forecastData, getForecast } = props;
  return (
    <div>
      <MainNavbar />
      <PageContainer>
        <SearchBar {...props} />
      </PageContainer>
      {currentData.name ? (
        <PageContainer>
          <CityInfo data={currentData} />
          <CurrentWeather data={currentData} />
          <Forecast data={forecastData} getForecast={getForecast} />
        </PageContainer>
      ) : (
        <Landing />
      )}
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
