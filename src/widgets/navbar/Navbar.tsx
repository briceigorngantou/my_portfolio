/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Close,
  DarkMode,
  LightMode,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from '../../state';
import { cv, navLinks } from '../../constants/data';
import { scrollToSection } from '../../utils/scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMdUp = useMediaQuery('(min-width:900px)');
  const isLight = theme.palette.mode === 'light';
  const accent = theme.palette.secondary.light;
  const navScrollBg = isLight
    ? 'rgba(238,242,255,0.88)'
    : 'rgba(11,15,26,0.90)';
  const activeItemBg = isLight
    ? 'rgba(79,142,247,0.10)'
    : 'rgba(237,185,111,0.10)';
  const hoverItemBg = isLight
    ? 'rgba(79,142,247,0.08)'
    : 'rgba(237,185,111,0.08)';
  const drawerBg = isLight ? 'rgba(79,142,247,0.10)' : 'rgba(237,185,111,0.10)';
  const drawerHoverBg = isLight
    ? 'rgba(79,142,247,0.06)'
    : 'rgba(237,185,111,0.06)';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 120;
      let current = 'accueil';
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPos) {
          current = link.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? navScrollBg : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${
                isLight ? 'rgba(79,142,247,0.12)' : 'rgba(255,255,255,0.07)'
              }`
            : 'none',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          py: scrolled ? 1 : 1.5
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Logo */}
            <Box
              onClick={() => handleNav('accueil')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                '&:hover': { opacity: 0.82 },
                transition: 'opacity 0.2s'
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(79,142,247,0.35)',
                  flexShrink: 0
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 14,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1
                  }}
                >
                  BN
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: theme.palette.primary.main,
                  fontFamily: 'Inter, sans-serif',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Brice Ngantou
              </Typography>
            </Box>

            {/* Desktop nav */}
            {isMdUp && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navLinks.map((link) => (
                  <Box
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    sx={{
                      px: 1.8,
                      py: 0.8,
                      borderRadius: 2,
                      cursor: 'pointer',
                      color:
                        activeSection === link.id
                          ? accent
                          : theme.palette.primary.main,
                      fontWeight: activeSection === link.id ? 700 : 500,
                      fontSize: 14,
                      fontFamily: 'Inter, sans-serif',
                      background:
                        activeSection === link.id
                          ? activeItemBg
                          : 'transparent',
                      '&:hover': {
                        color: accent,
                        background: hoverItemBg
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {link.label}
                  </Box>
                ))}

                <Box
                  component="a"
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ml: 1,
                    px: 2.5,
                    py: 0.9,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 13,
                    fontFamily: 'Inter, sans-serif',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(79,142,247,0.32)',
                    display: 'inline-block',
                    '&:hover': {
                      boxShadow: '0 6px 22px rgba(79,142,247,0.50)',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.22s ease'
                  }}
                >
                  Mon CV
                </Box>

                <IconButton
                  onClick={() => dispatch(setMode())}
                  sx={{
                    ml: 0.5,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      color: accent,
                      background: isLight
                        ? 'rgba(79,142,247,0.08)'
                        : 'rgba(237,185,111,0.08)'
                    },
                    transition: 'color 0.2s ease'
                  }}
                >
                  {isLight ? (
                    <DarkMode fontSize="small" />
                  ) : (
                    <LightMode fontSize="small" />
                  )}
                </IconButton>
              </Box>
            )}

            {/* Mobile buttons */}
            {!isMdUp && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <IconButton
                  onClick={() => dispatch(setMode())}
                  sx={{ color: theme.palette.primary.main }}
                >
                  {isLight ? (
                    <DarkMode fontSize="small" />
                  ) : (
                    <LightMode fontSize="small" />
                  )}
                </IconButton>
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ color: theme.palette.primary.main }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: isLight ? '#F8FAFF' : '#0B0F1A',
            px: 3,
            py: 4
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontWeight: 900,
                fontSize: 14,
                fontFamily: 'Inter'
              }}
            >
              BN
            </Typography>
          </Box>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: theme.palette.primary.main }}
          >
            <Close />
          </IconButton>
        </Box>

        <List sx={{ gap: 0.5, display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.id}
              onClick={() => handleNav(link.id)}
              sx={{
                borderRadius: 2,
                color:
                  activeSection === link.id
                    ? accent
                    : theme.palette.primary.main,
                fontWeight: activeSection === link.id ? 700 : 500,
                fontSize: 15,
                fontFamily: 'Inter, sans-serif',
                background:
                  activeSection === link.id ? drawerBg : 'transparent',
                '&:hover': {
                  color: accent,
                  background: drawerHoverBg
                },
                transition: 'all 0.2s ease',
                py: 1.5
              }}
            >
              {link.label}
            </ListItemButton>
          ))}

          <Box
            component="a"
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 2,
              px: 2,
              py: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              boxShadow: '0 4px 16px rgba(79,142,247,0.32)'
            }}
          >
            Télécharger Mon CV
          </Box>
        </List>
      </Drawer>
    </>
  );
}
