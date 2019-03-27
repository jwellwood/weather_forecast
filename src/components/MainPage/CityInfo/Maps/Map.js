import React from 'react';
import PropTypes from 'prop-types';
// Packages
import { Map, GoogleApiWrapper } from 'google-maps-react';
// Styles
import Paper from '@material-ui/core/Paper';
import mapStyle from '../../../../assets/styles/mapStyle.json';
// Keys
const apiKey = process.env.REACT_APP_MAP_API_KEY;

const MapContainer = props => {
  const { google, latitude, longitude } = props;
  return (
    <Paper elevation={17} style={{ position: 'relative', margin: 'auto' }}>
      {google && latitude && longitude ? (
        <Map
          style={{
            width: '50%',
            height: '180px',
            position: 'relative',
            margin: 'auto',
            float: 'right',
          }}
          google={google}
          zoom={10}
          styles={mapStyle}
          initialCenter={{ lat: latitude, lng: longitude }}
          center={{
            lat: latitude,
            lng: longitude,
          }}
        />
      ) : null}
    </Paper>
  );
};

// Proptypes
MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
