import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "#80c12d",
      light: "#e2f1d0",
      dark :  "#355210"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    // MuiGrid: {
    //   defaultProps: {
    //     useFlexGap: true,
    //   },
    //   variants: [
    //     {
    //       props: { direction: "row" },
    //       style: { alignItems: "center" },
    //     },
    //   ],
    // },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
