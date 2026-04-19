/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Footer from '../../widgets/footer/Footer';
import Header from '../../widgets/header/Header';
import Navbar from '../../widgets/navbar/Navbar';
import Skills from '../../layouts/skills/Skills';
import MyExperience from '../../layouts/experience/MyExperience';
import MyPortfolio from '../../layouts/my.portfolio/MyPortfolio';
import ContactUs from '../../layouts/contactUs/ContactUs';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box component="section" id="accueil">
        <Header />
      </Box>
      <Box component="section" id="competences">
        <Skills />
      </Box>
      <Box component="section" id="experiences">
        <MyExperience />
      </Box>
      <Box component="section" id="projets">
        <MyPortfolio />
      </Box>
      <Box component="section" id="contact">
        <ContactUs />
      </Box>
      <Footer />
    </>
  );
}
