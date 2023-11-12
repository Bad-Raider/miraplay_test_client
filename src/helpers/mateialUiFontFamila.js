import { createTheme } from '@mui/material/styles';
import NeueMachinaBlack from '../fonts/NeueMachina-Black.woff2';
import NeueMachinaBold from '../fonts/NeueMachina-Bold.woff2';
import NeueMachinaLight from '../fonts/NeueMachina-Light.woff2';
import NeueMachinaMedium from '../fonts/NeueMachina-Medium.woff2';
import NeueMachinaRegular from '../fonts/NeueMachina-Regular.woff2';
import NeueMachinaUltrabold from '../fonts/NeueMachina-Ultrabold.woff2';
import NeueMachinaUltralight from '../fonts/NeueMachina-Ultralight.woff2';

const theme = createTheme({
    typography: {
        fontFamily: 'Neue Machina',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        body {
            background-color: #181818;
            color: white;
        }


        @font-face {
          font-family: 'Neue Machina';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src:  url(${NeueMachinaLight}) format('woff2');
        }

        @font-face {
            font-family: 'Neue Machina';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src:  url(${NeueMachinaMedium}) format('woff2');
          }

          @font-face {
            font-family: 'Neue Machina';
            font-style: normal;
            font-display: swap;
            font-weight: bold;
            src:  url(${NeueMachinaBold}) format('woff2');
          }

          @font-face {
            font-family: 'Neue Machina';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src:  url(${NeueMachinaBlack}) format('woff2');
          }

          @font-face {
            font-family: 'Neue Machina';
            font-style: normal;
            font-display: swap;
            font-weight: normal;
            src:  url(${NeueMachinaRegular}) format('woff2');
          }

          @font-face {
            font-family: 'Neue Machina';
            font-style: normal;
            font-display: swap;
            font-weight: 800;
            src:  url(${NeueMachinaUltrabold}) format('woff2');
          }

          @font-face {
            font-family: 'Neue Machina';
            font-style: normal;
            font-display: swap;
            font-weight: 200;
            src:  url(${NeueMachinaUltralight}) format('woff2');
          }
        `,
        },
    },
});

export default theme;
