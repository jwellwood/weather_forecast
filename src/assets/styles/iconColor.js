export const iconColor = desc => {
  switch (desc) {
    // most common
    case 'Clear':
      return '#F1C40F';
    case 'Clouds':
      return '#BFC9CA';
    case 'Drizzle':
      return '#7FB3D5';
    case 'Rain':
      return '#03A9F4';
    case 'Thunderstorm':
      return '#DC7633';
    case 'Snow':
      return '#F7F9F9';
    case 'Haze':
      return '#AF7AC5';
    // Less common
    case 'Mist' ||
      'Smoke' ||
      'Dust' ||
      'Fog' ||
      'Sand' ||
      'Ash' ||
      'Squall' ||
      'Tornado':
      return '#a4f9c6';
    default:
      return '#fff';
  }
};
