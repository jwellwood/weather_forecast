export const styles = theme => ({
  desc: {
    fontSize: '1.5rem',
  },
  background: {
    background: 'transparent',
  },
  button: {
    padding: theme.spacing.unit,
  },
  icon: {
    margin: '10px auto',
    fontSize: '35px',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    lineHeight: '75px',
    background: 'rgba(10,10,10,0.3)',
  },
  main: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: '15px',
    fontWeight: 'lighter',
  },
  exact: {
    fontSize: '12px',
    color: theme.palette.secondary.light,
    background: theme.palette.primary.dark,
    padding: '3px',
    width: '45%',
    margin: '0px auto',
  },
});
