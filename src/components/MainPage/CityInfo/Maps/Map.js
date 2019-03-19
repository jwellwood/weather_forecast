import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyle from './mapStyle.json';
import Spinner from '../../../ui/Spinner/Spinner';
const apiKey = process.env.REACT_APP_MAP_API_KEY;

const MapContainer = props => {
  const { google, latitude, longitude } = props;
  return (
    <div style={{ position: 'relative', margin: 'auto' }}>
      {google && latitude && longitude ? (
        <Map
          style={{
            width: '160px',
            height: '140px',
            position: 'relative',
            margin: 'auto',
            border: '2px solid black',
            borderRadius: '10px',
            float: 'right',
          }}
          google={google}
          zoom={10}
          styles={mapStyle}
          center={{
            lat: latitude,
            lng: longitude,
          }}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
