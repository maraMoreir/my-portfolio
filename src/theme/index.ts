import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
   primary: '#2B2E42',  
   secondary: '#F0E68C', 

   star1: '#FFFFFF',     
   star2: '#E6E6E6',     
   planet1: '#F49A59',   
   planet2: '#5B87FF',   
   galaxy1: '#9955FF',   
   galaxy2: '#FFD700',   

   text: '#FFFFFF',     
   textMuted: '#A0A0A0', 
  },
  fontSizes: {
    1: '1.2rem',
    2: '1.4rem',
    3: '1.6rem',
    4: '2rem',
    5: '2.4rem',
    6: '2.8rem',
    7: '3.2rem',
    8: '4.8rem',
    9: '6.4rem',
    10: '7.2rem',
  },
  weight: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
  },
  space: {
    0: '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
  radius: {
    1: '4px',
    2: '8px',
    3: '10px',
    4: '16px',
    5: '20px',
    round: '50%',
  },
  shadows: {
    1: '0 2px 4px 0px rgba(0, 0, 0, 0.2)',
    2: '2px 2px 12px 2px rgba(99, 99, 99, 0.3)',
  },
  zIndices: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default theme;
