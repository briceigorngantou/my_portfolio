/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, useTheme } from '@mui/material';
import Footer from '../../widgets/footer/Footer';
import Header from '../../widgets/header/Header';
import Navbar from '../../widgets/navbar/Navbar';

export default function Home() {
  const theme = useTheme();
  const { dark, main, light } = theme.palette.primary;
  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? light : dark,
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid container item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
