/* eslint-disable no-unused-vars */
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Title({ title = '' }) {
  const theme = useTheme();
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
              whiteSpace={'nowrap'}
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
