import React from 'react';
import { Grid, useTheme } from '@mui/material';
import Footer from '../../widgets/footer/Footer';
import Navbar from '../../widgets/navbar/Navbar';
import MyExperience from '../../layouts/experience/MyExperience';
import ContactUs from '../../layouts/contactUs/ContactUs';

export default function Experiences() {
  const theme = useTheme();
  const { dark, light } = theme.palette.primary;
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
        <MyExperience />
      </Grid>
      <Grid container item xs={12}>
        <ContactUs />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
