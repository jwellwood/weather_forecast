export const styles = theme => ({
  root: {
    background: 'rgba(10, 10, 10, 0.5)',
    padding: '0px 5px',
    margin: '5px auto',
  },
  detailsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.secondary.light,
  },
  time: {
    color: '#2ECC71',
    background: 'rgba(20,20,20, 0.5)',
    padding: '3px',
  },
  icons: {
    fontSize: '15px',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    lineHeight: '25px',
    textShadow: '1px 1px #222',
    margin: '0px auto',
  },
  sun: {
    fontSize: '12px',
  },
  sunrise: {
    color: '#f5af19',
  },
  sunset: {
    color: '#ff8819',
  },
});
