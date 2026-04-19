/* eslint-disable react/react-in-jsx-scope */
import { Box, Button, Chip, Grid, Typography, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { cv } from '../../constants/data';
import { scrollToSection } from '../../utils/scroll';

const profilImage = require('../../assets/Brice Ngantou.jpeg');

const roles = ['Full Stack', 'Mobile', 'DevOps', 'IA & Data'];
const techStack = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'Flutter',
  'Docker',
  'Python'
];
const stats = [
  { value: '4+', label: "Années d'expérience" },
  { value: '10+', label: 'Projets livrés' },
  { value: '5+', label: 'Apps en prod.' }
];

function ProfilePhoto({ size }: { size: number | { md: number; lg: number } }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isSizeObject = typeof size === 'object';
  const glowSize = isSizeObject
    ? { md: size.md + 60, lg: size.lg + 60 }
    : size + 60;

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Box
        sx={{
          position: 'absolute',
          inset: -30,
          background: isLight
            ? 'radial-gradient(circle, rgba(79,142,247,0.18), transparent 70%)'
            : 'radial-gradient(circle, rgba(237,185,111,0.12), transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          width: glowSize,
          height: glowSize,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          background:
            'linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 50%, #EDB96F 100%)',
          p: '4px',
          boxShadow: isLight
            ? '0 20px 60px rgba(79,142,247,0.28)'
            : '0 20px 60px rgba(237,185,111,0.15)'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            background: theme.palette.background.default,
            p: '3px'
          }}
        >
          <img
            src={profilImage}
            alt="Brice Ngantou"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              display: 'block'
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: isSizeObject ? 16 : 8,
          right: isSizeObject ? -8 : -4,
          background: '#16A34A',
          color: '#fff',
          px: 1.5,
          py: 0.6,
          borderRadius: 5,
          fontSize: isSizeObject ? 11 : 10,
          fontWeight: 700,
          letterSpacing: 0.5,
          boxShadow: '0 4px 18px rgba(22,163,74,0.45)',
          display: 'flex',
          alignItems: 'center',
          gap: 0.8,
          fontFamily: 'Inter, sans-serif'
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#fff',
            flexShrink: 0
          }}
        />
        Disponible
      </Box>
    </Box>
  );
}

export default function Header() {
  const theme = useTheme();
  const { main } = theme.palette.primary;
  const isLight = theme.palette.mode === 'light';
  const accent = theme.palette.secondary.light;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isLight
          ? 'linear-gradient(135deg, #EEF2FF 0%, #F8FAFF 60%, #FFF7ED 100%)'
          : 'linear-gradient(135deg, #0B0F1A 0%, #12182B 60%, #1A1130 100%)',
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 8 },
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Decorative blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '-8%',
          width: 600,
          height: 600,
          background: isLight
            ? 'radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(79,142,247,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: 400,
          height: 400,
          background: isLight
            ? 'radial-gradient(circle, rgba(237,185,111,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(237,185,111,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      <Grid
        container
        sx={{ px: { xs: 3, md: 10 }, alignItems: 'center' }}
        spacing={4}
      >
        {/* Profile photo - desktop left column */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            order: { xs: 1, md: 0 }
          }}
        >
          {/* Mobile: smaller centered photo */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center'
            }}
          >
            <ProfilePhoto size={150} />
          </Box>

          {/* Desktop: larger photo */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center'
            }}
          >
            <ProfilePhoto size={{ md: 280, lg: 320 }} />
          </Box>
        </Grid>

        {/* Text content */}
        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            sx={{
              color: accent,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              mb: 1,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Bonjour, je suis
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 36, md: 54 },
              fontWeight: 800,
              background:
                'linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 55%, #EDB96F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
              mb: 1,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Brice Ngantou
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              fontWeight: 600,
              color: main,
              mb: 2.5,
              opacity: 0.9,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Développeur Full Stack & Mobile
          </Typography>

          {/* Role chips */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            {roles.map((role) => (
              <Chip
                key={role}
                label={role}
                size="small"
                sx={{
                  background: isLight
                    ? 'rgba(79,142,247,0.10)'
                    : 'rgba(237,185,111,0.10)',
                  color: accent,
                  border: `1px solid ${
                    isLight ? 'rgba(79,142,247,0.30)' : 'rgba(237,185,111,0.30)'
                  }`,
                  fontWeight: 600,
                  fontSize: 11,
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            ))}
          </Box>

          <Typography
            sx={{
              color: main,
              fontSize: 15,
              lineHeight: 1.85,
              mb: 3,
              maxWidth: 520,
              opacity: 0.88,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Ingénieur Full Stack chez{' '}
            <Box component="span" sx={{ color: accent, fontWeight: 700 }}>
              LinnovLab
            </Box>
            , je conçois des écosystèmes digitaux complets - web, mobile et
            DevOps. Passionné par l&apos;IA et les architectures scalables, je
            combine innovation et rigueur pour créer des solutions performantes
            à fort impact.
          </Typography>

          {/* Stats */}
          <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, mb: 3 }}>
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography
                  sx={{
                    fontSize: { xs: 24, md: 30 },
                    fontWeight: 800,
                    color: accent,
                    lineHeight: 1,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    color: main,
                    opacity: 0.65,
                    mt: 0.3,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Tech stack */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  background: theme.palette.background.paper,
                  color: main,
                  border: `1px solid ${
                    isLight ? 'rgba(0,0,0,0.09)' : 'rgba(255,255,255,0.09)'
                  }`,
                  fontSize: 11,
                  fontFamily: 'Inter, monospace',
                  '&:hover': {
                    borderColor: accent,
                    color: accent
                  },
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </Box>

          {/* CTA buttons */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component="a"
              href={cv}
              target="_blank"
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                color: '#fff',
                px: 3,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: 0.3,
                boxShadow: '0 8px 28px rgba(79,142,247,0.35)',
                border: 'none',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3B7FEF, #7C3AED)',
                  boxShadow: '0 12px 36px rgba(79,142,247,0.45)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.25s ease'
              }}
            >
              Télécharger mon CV
            </Button>
            <Button
              variant="outlined"
              onClick={() => scrollToSection('contact')}
              startIcon={<EmailIcon />}
              sx={{
                color: accent,
                borderColor: accent,
                px: 3,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: 0.3,
                background: 'transparent',
                textTransform: 'none',
                '&:hover': {
                  background: isLight
                    ? 'rgba(79,142,247,0.08)'
                    : 'rgba(237,185,111,0.08)',
                  borderColor: accent,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.25s ease'
              }}
            >
              Me contacter
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
