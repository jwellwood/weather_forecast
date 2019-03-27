import React from 'react';
import PropTypes from 'prop-types';
// Styles
// Animations
import Collapse from '@material-ui/core/Collapse';
// Components
import PageContainer from '../hoc/PageContainer';
import MainNavbar from '../ui/Navbar/Navbar';
import Landing from './Landing/Landing';
import CityInfo from './CityInfo/';
import CurrentWeather from './Current';
import Forecast from './Forecast/index';
import Footer from '../ui/Footer/Footer';

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

// Proptypes
MainPage.propTypes = {
  currentData: PropTypes.object.isRequired,
  forecastData: PropTypes.array.isRequired,
  getForecast: PropTypes.func.isRequired,
  showDetails: PropTypes.bool.isRequired,
  showForecast: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default MainPage;
