export const colorsTokens = {
  primary: {
    100: '#F3F4F6',
    200: '#FFFFFF',
    300: '#4b4b4b',
    400: '#000000',
    500: '#F7F4F6',
    600: '#222222'
  },
  grey: {
    100: '#f1f7fc',
    200: '#000000',
    300: '#474245',
    400: '#4b4b4b',
    500: '#212121'
  }
};

export const themeSettings = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            dark: colorsTokens.primary[600],
            main: colorsTokens.primary[100],
            light: colorsTokens.primary[200]
          },
          secondary: {
            dark: colorsTokens.grey[400],
            main: colorsTokens.primary[500],
            light: colorsTokens.grey[200]
          },
          background: {
            default: colorsTokens.grey[200],
            paper: colorsTokens.grey[300]
          }
        }
      : {
          // palette values for light mode
          primary: {
            dark: colorsTokens.primary[400],
            main: colorsTokens.primary[300],
            light: colorsTokens.primary[200]
          },
          secondary: {
            dark: colorsTokens.grey[300],
            main: colorsTokens.grey[300],
            light: colorsTokens.grey[200]
          },
          background: {
            default: colorsTokens.grey[300],
            paper: colorsTokens.primary[500]
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
