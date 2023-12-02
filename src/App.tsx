import { createTheme, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Competences from './pages/competences/Competences';
import Contact from './pages/contact/Contact';
import MyExperience from './pages/experiences/Experiences';
import Home from './pages/home/Home';
import { themeSettings } from './configs/theme/theme';
import Portfolio from './pages/portofolio/Portofolio';

function App() {
  const mode = useSelector((state: any) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experiences" element={<MyExperience />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
