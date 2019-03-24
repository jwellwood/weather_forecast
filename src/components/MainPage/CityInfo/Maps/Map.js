import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import mapStyle from './mapStyle.json';
import Spinner from '../../../ui/Spinner/Spinner';
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
      ) : (
        <Spinner />
      )}
    </Paper>
  );
};

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
