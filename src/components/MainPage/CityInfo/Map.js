import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const apiKey = process.env.REACT_APP_MAP_API_KEY;
const mapStyles = {
  width: '50%',
  height: '45%',
};

export class MapContainer extends Component {
  render() {
    const { google, latitude, longitude } = this.props;

    return (
      <Map
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: latitude,
          lng: longitude,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
