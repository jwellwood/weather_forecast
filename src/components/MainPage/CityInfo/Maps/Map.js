import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyle from './mapStyle';
import Spinner from '../../../ui/Spinner/Spinner';
const apiKey = process.env.REACT_APP_MAP_API_KEY;

export class MapContainer extends Component {
  render() {
    const { google, longitude, latitude } = this.props;

    return (
      <div style={{ position: 'relative', margin: 'auto' }}>
        {google && latitude && longitude ? (
          <Map
            style={{
              width: '75%',
              height: '140px',
              position: 'relative',
              margin: 'auto',
              border: '2px solid black',
              borderRadius: '10px',
            }}
            google={google}
            zoom={10}
            styles={mapStyle}
            initialCenter={{
              lat: latitude,
              lng: longitude,
            }}
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
