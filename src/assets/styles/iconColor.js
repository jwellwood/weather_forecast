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
    // Less common
    case 'Mist' ||
      'Smoke' ||
      'Haze' ||
      'Dust' ||
      'Fog' ||
      'Sand' ||
      'Ash' ||
      'Squall' ||
      'Tornado':
      return '#AF7AC5';
    default:
      return '#fff';
  }
};
