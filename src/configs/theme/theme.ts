export const colorsTokens = {
  primary: {
    100: '#EEF2FF',
    200: '#FFFFFF',
    300: '#1E293B',
    400: '#0F172A',
    500: '#F8FAFF',
    600: '#12182B',
    700: '#4F8EF7'
  },
  grey: {
    100: '#F8FAFF',
    200: '#0B0F1A',
    300: '#1A2234',
    400: '#2C3A52',
    500: '#0B0F1A',
    600: '#EDB96F'
  }
};

export const themeSettings = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            dark: colorsTokens.grey[300],
            main: '#E2E8F6',
            light: colorsTokens.primary[200]
          },
          secondary: {
            dark: colorsTokens.grey[400],
            main: colorsTokens.primary[500],
            light: colorsTokens.grey[600]
          },
          background: {
            default: colorsTokens.grey[200],
            paper: colorsTokens.grey[300]
          }
        }
      : {
          primary: {
            dark: colorsTokens.primary[400],
            main: colorsTokens.primary[300],
            light: colorsTokens.primary[200]
          },
          secondary: {
            dark: '#334155',
            main: '#334155',
            light: colorsTokens.primary[700]
          },
          background: {
            default: colorsTokens.primary[100],
            paper: colorsTokens.primary[500]
          }
        })
  },
  typography: {
    fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
      fontSize: 48,
      fontWeight: 800
    },
    h2: {
      fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
      fontSize: 36,
      fontWeight: 700
    },
    h3: {
      fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
      fontSize: 28,
      fontWeight: 700
    },
    h4: {
      fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
      fontSize: 22,
      fontWeight: 600
    },
    h5: {
      fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
      fontSize: 18,
      fontWeight: 500
    },
    h6: {
      fontFamily: ['Inter', 'Rubik', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 500
    }
  }
});
