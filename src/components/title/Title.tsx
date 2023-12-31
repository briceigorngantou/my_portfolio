/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Title({ title = '' }) {
  const theme = useTheme();
  const minWidth625 = useMediaQuery('(min-width:625px)');
  const { main } = theme.palette.primary;
  return (
    <>
      {title && (
        <Grid borderRadius={5}>
          <Grid sx={{ flexDirection: 'column', textAlign: 'center' }}>
            <Typography
              fontSize={30}
              fontWeight={'bold'}
              color={theme.palette.secondary.light}
              whiteSpace={minWidth625 ? 'nowrap' : undefined}
            >
              {title}
            </Typography>
            <CircleIcon
              fontSize="large"
              sx={{ color: theme.palette.secondary.light, marginTop: 2 }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
