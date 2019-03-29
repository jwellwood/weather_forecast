import { fade } from '@material-ui/core/styles/colorManipulator';
export const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  bar: {
    justifyContent: 'space-between',
    padding: theme.spacing.unit,
  },
  search: {
    marginLeft: theme.spacing.unit,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  inputRoot: {
    color: 'inherit',
    width: 'auto',
    padding: theme.spacing.unit,
  },
  inputInput: {
    padding: theme.spacing.unit,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    zIndex: 10,
  },
  toolbar: {
    fontSize: '15px',
    color: theme.palette.primary.light,
  },
  paper: {
    backgroundColor: 'rgba(0,0,0, 0.9)',
    boxShadow: 'none',
    border: '2px solid',
    borderColor: theme.palette.secondary.dark,
  },
  close: {
    padding: theme.spacing.unit / 2,
  },
});
