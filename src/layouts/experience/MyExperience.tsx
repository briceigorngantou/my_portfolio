import { Grid } from '@mui/material';
import React from 'react';
import Title from '../../components/title/Title';

export default function MyExperience() {
  return (
    <Grid container xs={12} alignItems={'center'} justifyContent={'center'}>
      <Grid sx={{ width: '40%' }} margin={5}>
        <Title title="MES EXPÉRIENCES" />
      </Grid>
    </Grid>
  );
}
