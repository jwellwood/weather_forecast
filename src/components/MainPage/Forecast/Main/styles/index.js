export const styles = theme => ({
  root: {
    fontSize: '22px',
  },
  icon: {
    margin: '2px auto',
    fontSize: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    lineHeight: '40px',
    background: 'rgba(10,10,10,0.3)',
  },
  temp: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  tempC: {
    fontWeight: 'bold',
  },
  tempF: {
    color: 'rgba(240,240,240,0.5)',
    fontSize: '14px',
  },
  symbol: {
    fontSize: '10px',
  },
});
