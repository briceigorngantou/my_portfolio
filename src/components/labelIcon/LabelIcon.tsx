import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function LabelIcon({
  iconImage = '',
  mode = 'light',
  label = '',
  uri = ''
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
          style={{ display: 'flex', textDecorationLine: 'none' }}
        >
          <img
            src={iconImage}
            alt="icon"
            style={{ width: '26px', height: '26px', marginRight: 8 }}
          />
          {label && (
            <Typography
              sx={{
                color: mode === 'light' ? main : light,
                cursor: 'pointer',
                '&:hover': {
                  color: mode === 'light' ? main : light
                }
              }}
              textAlign="center"
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
            style={{ width: '26px', height: '26px', marginRight: 8 }}
          />
          {label && (
            <Typography
              sx={{
                color: mode === 'light' ? main : light,
                cursor: 'pointer',
                '&:hover': {
                  color: mode === 'light' ? main : light
                }
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
