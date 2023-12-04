import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function LabelIcon({
  iconImage = '',
  mode = 'light',
  label = '',
  uri = '',
  color = '',
  whiteSpace = true,
  marginLeft = 0,
  uriDisable = true
}) {
  const theme = useTheme();
  const { main, light } = theme.palette.primary;

  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: 2,
        justifyContent: 'left',
        alignItems: 'center'
      }}
    >
      {uri ? (
        <a
          href={uri}
          target="blank"
          style={{
            display: 'flex',
            textDecorationLine: uriDisable ? 'none' : 'underline'
          }}
        >
          <img
            src={iconImage}
            alt="icon"
            style={{ width: '28px', height: '28px', marginRight: 8 }}
          />
          {label && (
            <Typography
              whiteSpace={whiteSpace ? 'nowrap' : undefined}
              sx={{
                color: color || (mode === 'light' ? main : light),
                cursor: 'pointer',
                marginLeft
              }}
              textAlign="left"
            >
              {label}
            </Typography>
          )}
        </a>
      ) : (
        <>
          <img
            src={iconImage}
            alt="icon"
            style={{ width: '28px', height: '28px', marginRight: 8 }}
          />
          {label && (
            <Typography
              sx={{
                color: color || (mode === 'light' ? main : light)
              }}
              textAlign="center"
            >
              {label}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}
