import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './assets/styles/index.css';
import './assets/fonts/css/weather-icons.min.css';
// Components
import Root from '../src/containers/Root';
// MUI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#0d47a1',
      main: '#17202A',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
