import React from 'react';
import CityInfo from './CityInfo/';
import CurrentWeather from './Current';
import Forecast from './Forecast/index';
import MainNavbar from '../ui/Navbar/Navbar';
import Landing from './Landing/Landing';
import PageContainer from '../hoc/PageContainer';
import Footer from '../ui/Footer/Footer';
import Collapse from '@material-ui/core/Collapse';

const MainPage = props => {
  const {
    currentData,
    forecastData,
    getForecast,
    showDetails,
    showForecast,
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
            <Collapse
              in={showForecast}
              mountOnEnter
              unmountOnExit
              timeout={{
                enter: 1000,
                exit: 600,
              }}
            >
              <Forecast
                data={forecastData}
                getForecast={getForecast}
                showForecast={showForecast}
                error={error}
              />
            </Collapse>
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
