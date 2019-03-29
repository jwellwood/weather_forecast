export const styles = theme => ({
  text: {
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  tag: {
    fontSize: '12px',
    color: theme.palette.secondary.dark,
    margin: '0 auto',
    width: '30px',
  },
  value: {
    fontSize: '15px',
    color: theme.palette.secondary.light,
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
  },
  desc: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px auto',
    textAlign: 'center',
    width: '100%',
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
  },
  card: {
    margin: '2px',
    background: 'transparent',
    cursor: 'pointer',
  },
  title: {
    color: theme.palette.secondary.light,
  },
  time: {
    color: '#2ECC71',
  },
});
