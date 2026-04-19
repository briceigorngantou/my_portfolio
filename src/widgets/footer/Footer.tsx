/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { email, github, linkedin, navLinks } from '../../constants/data';
import { scrollToSection } from '../../utils/scroll';

export default function Footer() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { main } = theme.palette.primary;
  const accent = theme.palette.secondary.light;

  return (
    <Box
      sx={{
        background: isLight ? '#F0F4FF' : '#080C18',
        borderTop: `1px solid ${
          isLight ? 'rgba(79,142,247,0.12)' : 'rgba(255,255,255,0.06)'
        }`
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            gap: 4,
            mb: 4
          }}
        >
          {/* Brand */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              onClick={() => scrollToSection('accueil')}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                mb: 1.5,
                '&:hover': { opacity: 0.82 },
                transition: 'opacity 0.2s'
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(79,142,247,0.30)'
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 13,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  BN
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: main,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Brice Ngantou
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 13,
                color: main,
                opacity: 0.55,
                maxWidth: 240,
                lineHeight: 1.7,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Développeur Full Stack & Mobile
              <br />
              Basé en Île-de-France, France
            </Typography>
          </Box>

          {/* Nav links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 },
              justifyContent: 'center'
            }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                sx={{
                  cursor: 'pointer',
                  color: main,
                  opacity: 0.65,
                  fontSize: 14,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  '&:hover': { color: accent, opacity: 1 },
                  transition: 'all 0.2s ease'
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Social links */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <IconButton
              component="a"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: main,
                opacity: 0.7,
                background: isLight
                  ? 'rgba(0,0,0,0.04)'
                  : 'rgba(255,255,255,0.04)',
                '&:hover': {
                  color: '#0A66C2',
                  opacity: 1,
                  background: 'rgba(10,102,194,0.1)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: main,
                opacity: 0.7,
                background: isLight
                  ? 'rgba(0,0,0,0.04)'
                  : 'rgba(255,255,255,0.04)',
                '&:hover': {
                  color: isLight ? '#24292F' : '#fff',
                  opacity: 1,
                  background: isLight
                    ? 'rgba(36,41,47,0.1)'
                    : 'rgba(255,255,255,0.1)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={`mailto:${email}`}
              sx={{
                color: main,
                opacity: 0.7,
                background: isLight
                  ? 'rgba(0,0,0,0.04)'
                  : 'rgba(255,255,255,0.04)',
                '&:hover': {
                  color: accent,
                  opacity: 1,
                  background: isLight
                    ? 'rgba(79,142,247,0.1)'
                    : 'rgba(237,185,111,0.1)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <EmailOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Divider
          sx={{
            borderColor: isLight
              ? 'rgba(0,0,0,0.07)'
              : 'rgba(255,255,255,0.06)',
            mb: 3
          }}
        />

        <Typography
          sx={{
            textAlign: 'center',
            fontSize: 13,
            color: main,
            opacity: 0.45,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          © {new Date().getFullYear()} Brice Ngantou - Tous droits réservés
        </Typography>
      </Container>
    </Box>
  );
}
