const windDir = dir => {
  switch (true) {
    case dir === null:
      return '--';
    case dir >= 0 && dir <= 25:
      return 'N';
    case dir >= 26 && dir <= 65:
      return 'NE';
    case dir >= 66 && dir <= 115:
      return 'E';
    case dir >= 116 && dir <= 155:
      return 'SE';
    case dir >= 156 && dir <= 205:
      return 'S';
    case dir >= 206 && dir <= 245:
      return 'SW';
    case dir >= 246 && dir <= 295:
      return 'W';
    case dir >= 296 && dir <= 340:
      return 'NW';
    case dir >= 341 && dir <= 360:
      return 'N';
    default:
      return '--';
  }
};

export default windDir;
