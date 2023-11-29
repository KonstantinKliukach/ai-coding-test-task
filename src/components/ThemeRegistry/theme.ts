import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff80ab',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {},
});

export default theme;
