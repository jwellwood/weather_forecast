import React from 'react';
import CityInfo from './CityInfo/';
import CurrentWeather from './Current';
import Forecast from './Forecast/index';
import MainNavbar from '../ui/Navbar/Navbar';
import Landing from './Landing/Landing';
import PageContainer from '../hoc/PageContainer';
import Footer from '../ui/Footer/Footer';

const MainPage = props => {
  const { currentData, forecastData, getForecast, error } = props;
  return (
    <div>
      <MainNavbar {...props} />
      <PageContainer>
        {currentData.name ? (
          <div>
            <CityInfo data={currentData} />
            <CurrentWeather data={currentData} />
            {forecastData.length !== 0 ? (
              <Forecast
                data={forecastData}
                getForecast={getForecast}
                error={error}
              />
            ) : null}
          </div>
        ) : (
          <Landing />
        )}
      </PageContainer>
      <Footer city={currentData.name} getForecast={getForecast} />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
