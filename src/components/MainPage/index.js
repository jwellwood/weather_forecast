import React from 'react';
import CityInfo from './CityInfo/';
import CurrentWeather from './Current';
import Forecast from './Forecast/index';
import MainNavbar from '../ui/Navbar/Navbar';
import Landing from './Landing/Landing';
import PageContainer from '../hoc/PageContainer';
import Footer from '../ui/Footer/Footer';
import Buttons from '../ui/Buttons';

const MainPage = props => {
  const {
    currentData,
    forecastData,
    getForecast,
    showDetails,
    toggleDetails,
    showForecast,
    toggleForecast,
    error,
  } = props;
  return (
    <div>
      <MainNavbar {...props} />
      <PageContainer>
        {currentData.name ? (
          <div>
            <CityInfo data={currentData} />
            <CurrentWeather data={currentData} showDetails={showDetails} />

            {forecastData.length !== 0 && showForecast ? (
              <Forecast
                data={forecastData}
                getForecast={getForecast}
                showForecast={showForecast}
                error={error}
              />
            ) : null}
          </div>
        ) : (
          <Landing />
        )}
      </PageContainer>
      <Footer city={currentData.name} getForecast={getForecast} {...props} />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
