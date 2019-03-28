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
  const { currentData, showForecast } = props;
  return (
    <div>
      <MainNavbar {...props} />
      <PageContainer>
        {currentData.name ? (
          <div>
            <CityInfo {...props} />
            <CurrentWeather {...props} />
            <Collapse
              in={showForecast}
              mountOnEnter
              timeout={{
                enter: 800,
                exit: 600,
              }}
            >
              <Forecast {...props} />
            </Collapse>
          </div>
        ) : (
          <Landing />
        )}
      </PageContainer>
      <Footer />
    </div>
  );
};

// Proptypes
MainPage.propTypes = {
  currentData: PropTypes.object.isRequired,
  showForecast: PropTypes.bool.isRequired,
};

export default MainPage;
