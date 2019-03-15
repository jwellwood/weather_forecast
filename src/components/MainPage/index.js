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
          <div>
            <CityInfo data={currentData} />
          </div>
          <div>
            <CurrentWeather data={currentData} />
          </div>
          <div>
            <Forecast data={forecastData} getForecast={getForecast} />
          </div>
        </PageContainer>
      ) : (
        <Landing />
      )}
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
