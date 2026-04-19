/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { CardExperiencesInterface } from '../../interfaces/cards/cardsExperiences.interface';

export default function CardExperiences({
  style,
  title,
  subtitle,
  location,
  date,
  company,
  width,
  height,
  color,
  content,
  mission,
  result,
  isCurrent
}: CardExperiencesInterface) {
  const minWidth625 = useMediaQuery('(min-width:625px)');
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const accent = theme.palette.secondary.light;

  return (
    <Card
      sx={{
        maxWidth: width,
        minWidth: 340,
        height: minWidth625 ? height : undefined,
        style,
        borderRadius: 4,
        padding: 0,
        marginBottom: 3,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: isLight
          ? '0 4px 28px rgba(0,0,0,0.07)'
          : '0 4px 28px rgba(0,0,0,0.35)',
        border: `1px solid ${
          isLight ? 'rgba(79,142,247,0.10)' : 'rgba(255,255,255,0.05)'
        }`,
        background: isLight ? '#FFFFFF' : '#1A2234',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: isLight
            ? '0 16px 50px rgba(79,142,247,0.14)'
            : '0 16px 50px rgba(0,0,0,0.45)'
        },
        /* Left accent bar */
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: isCurrent
            ? 'linear-gradient(to bottom, #16A34A, #22C55E)'
            : 'linear-gradient(to bottom, #4F8EF7, #8B5CF6)',
          borderRadius: '4px 0 0 4px'
        }
      }}
    >
      {/* Card header */}
      <Box
        sx={{
          px: 3,
          pt: 3,
          pb: 2,
          background: isLight
            ? 'linear-gradient(135deg, rgba(79,142,247,0.04), rgba(139,92,246,0.02))'
            : 'linear-gradient(135deg, rgba(79,142,247,0.07), rgba(139,92,246,0.04))',
          borderBottom: `1px solid ${
            isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)'
          }`
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 2
          }}
        >
          {/* Left: title + subtitle + date */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                color: accent,
                mb: 0.4,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: 0.3,
                whiteSpace: minWidth625 ? 'nowrap' : 'normal'
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                fontStyle: 'italic',
                color: theme.palette.primary.main,
                opacity: 0.6,
                mb: 0.5
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: theme.palette.primary.main,
                opacity: 0.75,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              {date}
            </Typography>
          </Box>

          {/* Right: company chip + location */}
          <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
            <Chip
              label={company}
              size="small"
              sx={{
                background: isCurrent
                  ? 'linear-gradient(135deg, #16A34A, #22C55E)'
                  : 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 11,
                fontFamily: 'Inter, sans-serif',
                mb: 0.8,
                px: 0.5
              }}
            />
            {isCurrent && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: 0.5,
                  mb: 0.5
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#22C55E'
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 10,
                    color: '#22C55E',
                    fontWeight: 700,
                    letterSpacing: 0.5
                  }}
                >
                  EN POSTE
                </Typography>
              </Box>
            )}
            <Typography
              sx={{
                fontSize: 11,
                color: theme.palette.primary.main,
                opacity: 0.55,
                display: 'block'
              }}
            >
              {location}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Card body */}
      <CardContent sx={{ px: 3, pt: 2.5, pb: 2.5 }}>
        {/* Mission */}
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 12,
              color: accent,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 0.8,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Mission
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: theme.palette.primary.main,
              lineHeight: 1.7,
              opacity: 0.88
            }}
          >
            {mission}
          </Typography>
        </Box>

        <Divider
          sx={{
            mb: 2,
            borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'
          }}
        />

        {/* Tasks */}
        <Box sx={{ mb: result ? 2 : 0 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 12,
              color: accent,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 1,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Tâches réalisées
          </Typography>
          {content?.map((item, key) => (
            <Box
              key={key}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1,
                mb: 0.8
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: isCurrent
                    ? 'linear-gradient(135deg, #16A34A, #22C55E)'
                    : 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                  flexShrink: 0,
                  mt: '7px'
                }}
              />
              <Typography
                sx={{
                  fontSize: 13,
                  color: theme.palette.primary.main,
                  lineHeight: 1.65,
                  opacity: 0.85
                }}
              >
                {item?.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Result */}
        {result && (
          <>
            <Divider
              sx={{
                mb: 2,
                borderColor: isLight
                  ? 'rgba(0,0,0,0.06)'
                  : 'rgba(255,255,255,0.06)'
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 12,
                  color: accent,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  mb: 0.8,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Résultats
              </Typography>
              <Box
                sx={{
                  background: isLight
                    ? 'rgba(79,142,247,0.06)'
                    : 'rgba(79,142,247,0.08)',
                  borderRadius: 2,
                  px: 2,
                  py: 1.2,
                  border: `1px solid ${
                    isLight ? 'rgba(79,142,247,0.15)' : 'rgba(79,142,247,0.15)'
                  }`
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13,
                    color: theme.palette.primary.main,
                    lineHeight: 1.65,
                    opacity: 0.9
                  }}
                >
                  {result}
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}
