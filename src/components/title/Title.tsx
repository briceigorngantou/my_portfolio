/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Title({ title = '' }) {
  const theme = useTheme();
  const minWidth625 = useMediaQuery('(min-width:625px)');
  const accent = theme.palette.secondary.light;

  return (
    <>
      {title && (
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 30 },
              fontWeight: 800,
              color: theme.palette.primary.main,
              letterSpacing: 2,
              fontFamily: 'Inter, Rubik, sans-serif',
              whiteSpace: minWidth625 ? 'nowrap' : undefined,
              mb: 1.5
            }}
          >
            {title}
          </Typography>
          {/* Gradient underline bar */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.8 }}>
            <Box
              sx={{
                height: 4,
                width: 40,
                background: 'linear-gradient(90deg, #4F8EF7, #8B5CF6)',
                borderRadius: 2
              }}
            />
            <Box
              sx={{
                height: 4,
                width: 10,
                background: accent,
                borderRadius: 2,
                opacity: 0.7
              }}
            />
            <Box
              sx={{
                height: 4,
                width: 6,
                background: accent,
                borderRadius: 2,
                opacity: 0.35
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
