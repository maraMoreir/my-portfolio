import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    };

    color: {
    primary: string,   
    secondary: string,

    star1: string,
    star2: string,
    planet1: string,
    planet2: string,
    galaxy1: string,
    galaxy2: string,

    text: string,
    textMuted: string,
    };

    weight: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
      9: number;
    };

    space: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    };

    radius: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      round: string;
    };

    shadows: {
      1: string;
      2: string;
    };

    zIndices: {
      appBar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
    };
  }
}
