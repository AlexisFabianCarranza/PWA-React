import React from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#311b92'},
    secondary: { main: '#ff3d00'},
    action: { main: '#ffffff' }
  },
});

function App(props) {
  return (
    <ThemeProvider  theme={theme}>
      <Navigation />
      {props.children}
    </ThemeProvider > 
  );
}

export default App;
