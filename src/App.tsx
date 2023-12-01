import { createTheme, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Competences from './pages/competences/Competences';
import Contact from './pages/contact/Contact';
import Experiences from './pages/experiences/Experiences';
import Home from './pages/home/Home';
import { themeSettings } from './configs/theme/theme';

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
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
