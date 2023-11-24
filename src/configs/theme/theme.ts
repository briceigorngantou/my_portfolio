export const colorsTokens = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#FFF0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#A3A3A3',
    400: '#858585',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000'
  },
  primary: {
    50: '#E6FBFF',
    100: '#CCF7FE',
    200: '#99EEFD',
    300: '#66E6FC',
    400: '#33DDFB',
    500: '#00D5FA',
    600: '#00A0BC',
    700: '#006B7D',
    800: '#00353F',
    900: '#001519'
  }
};

export const themeSettings = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            dark: colorsTokens.primary[200],
            main: colorsTokens.primary[500],
            light: colorsTokens.primary[800]
          },
          secondary: {
            dark: colorsTokens.grey[100],
            main: colorsTokens.grey[200],
            light: colorsTokens.grey[700]
          },
          background: {
            default: colorsTokens.grey[900],
            paper: colorsTokens.grey[800]
          }
        }
      : {
          // palette values for light mode
          primary: {
            dark: colorsTokens.primary[700],
            main: colorsTokens.primary[500],
            light: colorsTokens.primary[50]
          },
          secondary: {
            dark: colorsTokens.grey[700],
            main: colorsTokens.grey[500],
            light: colorsTokens.grey[50]
          },
          background: {
            default: colorsTokens.grey[10],
            paper: colorsTokens.grey[0]
          }
        })
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 40
    },
    h2: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 32
    },
    h3: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 24
    },
    h4: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 20
    },
    h5: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 16
    },
    h6: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 14
    }
  }
});
