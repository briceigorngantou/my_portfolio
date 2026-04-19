/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VerifiedIcon from '@mui/icons-material/Verified';
import Title from '../../components/title/Title';

const skillGroups = [
  {
    category: 'Langages',
    emoji: '⌨️',
    color: '#4F8EF7',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'PHP']
  },
  {
    category: 'Frontend & Mobile',
    emoji: '🎨',
    color: '#8B5CF6',
    skills: [
      'React',
      'Vue.js',
      'Angular',
      'React Native',
      'Flutter',
      'Next.js',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap'
    ]
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    color: '#06B6D4',
    skills: ['Node.js', 'NestJS', 'Laravel', 'Symfony', 'REST API', 'GraphQL']
  },
  {
    category: 'Bases de données',
    emoji: '🗄️',
    color: '#10B981',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Redis']
  },
  {
    category: 'DevOps & Cloud',
    emoji: '☁️',
    color: '#F59E0B',
    skills: [
      'Docker',
      'Kubernetes',
      'GCP',
      'CI/CD',
      'Nginx',
      'Git / GitHub',
      'Sentry',
      'Cloudflare Workers',
      'Cloudflare Pages',
      'Serverless'
    ]
  },
  {
    category: 'IA, Agents & Orchestration',
    emoji: '🤖',
    color: '#EF4444',
    skills: [
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'OpenAI API',
      'Claude API',
      'RAG',
      'Fine-tuning',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Transformer'
    ]
  },
  {
    category: 'Outils & Méthodes',
    emoji: '🛠️',
    color: '#EC4899',
    skills: [
      'Figma',
      'Postman',
      'Jira',
      'ClickUp',
      'VS Code',
      'Scrum / Agile',
      'TDD / BDD'
    ]
  }
];

const certifications = [
  {
    org: 'IBM',
    name: 'Docker Certification',
    desc: 'Déploiement, gestion et sécurité des conteneurs',
    color: '#0062FF',
    icon: '🐳',
    link: 'https://drive.google.com/file/d/1cuA5PzkQg6RY0OEyVJ14TfBrdLaFaCiL/view?usp=sharing'
  },
  {
    org: 'Oracle',
    name: 'Cloud AI Foundations 2023',
    desc: 'Machine Learning & Deep Learning',
    color: '#F80000',
    icon: '☁️',
    link: 'https://drive.google.com/file/d/1zJonutJrDOeL7w_5CIf4cMKZ0586Zfs7/view?usp=sharing'
  },
  {
    org: 'IBM',
    name: 'SQL Databases',
    desc: 'Administration des bases de données relationnelles',
    color: '#0062FF',
    icon: '🗄️',
    link: 'https://drive.google.com/file/d/1f83IuiQutA6eZV90TFfwosJVS8PCWyMK/view?usp=sharing'
  },
  {
    org: 'Scrum.org',
    name: 'Scrum Fundamental',
    desc: 'Principes et pratiques Scrum',
    color: '#009FDA',
    icon: '🔄',
    link: 'https://drive.google.com/file/d/1ObFDiu86tFUUDFir40dmRKcksfbQol85/view?usp=drive_link'
  }
];

export default function Skills() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { main } = theme.palette.primary;

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: isLight
          ? 'linear-gradient(180deg, #F8FAFF 0%, #EEF2FF 100%)'
          : 'linear-gradient(180deg, #0E1626 0%, #0B0F1A 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Title title="MES COMPÉTENCES" />
          <Typography
            sx={{
              mt: 2,
              fontSize: 15,
              color: main,
              opacity: 0.65,
              maxWidth: 500,
              mx: 'auto',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7
            }}
          >
            Technologies et outils maîtrisés au fil de mes expériences
            professionnelles
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 10 }}>
          {skillGroups.map((group) => (
            <Grid item xs={12} sm={6} md={6} key={group.category}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: isLight ? '#FFFFFF' : '#1A2234',
                  border: `1px solid ${
                    isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)'
                  }`,
                  boxShadow: isLight
                    ? '0 2px 20px rgba(0,0,0,0.05)'
                    : '0 2px 20px rgba(0,0,0,0.25)',
                  height: '100%',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: isLight
                      ? '0 8px 30px rgba(0,0,0,0.10)'
                      : '0 8px 30px rgba(0,0,0,0.40)'
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    mb: 2
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      background: group.color,
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: main,
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: 0.3
                    }}
                  >
                    {group.emoji} {group.category}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        background: `${group.color}14`,
                        color: group.color,
                        border: `1px solid ${group.color}30`,
                        fontWeight: 600,
                        fontSize: 12,
                        fontFamily: 'Inter, sans-serif',
                        borderRadius: 2,
                        '&:hover': {
                          background: `${group.color}22`,
                          border: `1px solid ${group.color}55`
                        },
                        transition: 'all 0.18s ease'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Certifications */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mb: 1.5
              }}
            >
              <VerifiedIcon
                sx={{ color: theme.palette.secondary.light, fontSize: 20 }}
              />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: theme.palette.secondary.light,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Certifications
              </Typography>
            </Box>
            <Box
              sx={{
                height: 2,
                width: 50,
                background: 'linear-gradient(90deg, #4F8EF7, #8B5CF6)',
                borderRadius: 1,
                mx: 'auto'
              }}
            />
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {certifications.map((cert) => (
              <Grid item xs={12} sm={6} md={3} key={cert.name}>
                <Box
                  component="a"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    p: 3,
                    borderRadius: 4,
                    height: '100%',
                    background: isLight ? '#FFFFFF' : '#1A2234',
                    border: `1px solid ${
                      isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)'
                    }`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: `${cert.color}50`,
                      boxShadow: `0 12px 36px ${cert.color}20`,
                      '& .cert-arrow': {
                        opacity: 1,
                        transform: 'translate(0,0)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${cert.color}, ${cert.color}88)`
                    }
                  }}
                >
                  {/* Icon circle */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      fontSize: 22
                    }}
                  >
                    {cert.icon}
                  </Box>

                  {/* Org badge */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignSelf: 'flex-start',
                      px: 1.2,
                      py: 0.3,
                      borderRadius: 1.5,
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}35`,
                      mb: 1.5
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: cert.color,
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: 0.8
                      }}
                    >
                      {cert.org}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: main,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.4,
                      mb: 0.75,
                      flex: 1
                    }}
                  >
                    {cert.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: main,
                      opacity: 0.5,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.5,
                      mb: 2
                    }}
                  >
                    {cert.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: cert.color,
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    <OpenInNewIcon sx={{ fontSize: 13 }} />
                    Voir le certificat
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
