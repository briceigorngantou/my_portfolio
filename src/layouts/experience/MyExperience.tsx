import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import CardExperiences from '../../components/cards/CardExperiences';
import Title from '../../components/title/Title';
import {
  contentLinnovLab,
  contentLSU,
  contentOR,
  contentST,
  missionLinnovLab,
  missionLSU,
  missionOr,
  missionST,
  resultLinnovLab,
  resultLSU,
  resultST
} from '../../constants/experiences.data';

export default function MyExperience() {
  const theme = useTheme();
  const { main } = theme.palette.primary;
  return (
    <Grid
      container
      sx={{ width: '100%', justifyContent: 'center' }}
      id="service"
    >
      <Grid
        sx={{ px: { xs: 2, md: 5 }, pb: { xs: 2, md: 3 } }}
        container
        marginTop={15}
        marginBottom={3}
        justifyContent="center"
      >
        <Title title="MES EXPÉRIENCES PROFESSIONNELLES" />
      </Grid>

      {/* Timeline wrapper */}
      <Box
        sx={{
          position: 'relative',
          px: { xs: 2, md: 5 },
          pb: { xs: 4, md: 5 },
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Vertical timeline line */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #4F8EF7, #8B5CF6, #EDB96F)',
            opacity: 0.25,
            transform: 'translateX(-50%)'
          }}
        />

        <Grid container p={2} justifyContent="center" gap={3}>
          <Grid sx={{ margin: 1 }}>
            <CardExperiences
              title={'DÉVELOPPEUR FULL STACK'}
              location={'Île-de-France, France'}
              date={'Février 2024 - Présent'}
              subtitle={'Éditeur de logiciels pour la restauration'}
              company={'LinnovLab'}
              style={undefined}
              width={600}
              height={740}
              mission={missionLinnovLab}
              color={main}
              content={contentLinnovLab}
              result={resultLinnovLab}
              isCurrent
            />
          </Grid>
          <Grid sx={{ margin: 1 }}>
            <CardExperiences
              title={'DÉVELOPPEUR FULL STACK'}
              location={'Douala, Cameroun'}
              date={'Octobre 2022 - Octobre 2023'}
              subtitle={'Société de service numérique'}
              company={'ST DIGITAL'}
              style={undefined}
              width={600}
              height={740}
              mission={missionST}
              color={main}
              content={contentST}
              result={resultST}
            />
          </Grid>
          <Grid sx={{ margin: 1 }}>
            <CardExperiences
              title={'STAGIAIRE DÉVELOPPEUR WEB'}
              location={'Douala, Cameroun'}
              date={'Avril 2022 - Octobre 2022'}
              subtitle={'Entreprise de télécommunication'}
              mission={missionOr}
              company={'Orange Cameroun'}
              style={undefined}
              width={600}
              height={740}
              color={main}
              content={contentOR}
            />
          </Grid>
          <Grid sx={{ margin: 1 }}>
            <CardExperiences
              title={'DÉVELOPPEUR WEB & MOBILE'}
              style={undefined}
              location={'Houston, USA'}
              date={'Janvier 2020 - Mai 2022'}
              subtitle={'Entreprise de transformation digitale'}
              content={contentLSU}
              mission={missionLSU}
              result={resultLSU}
              width={600}
              height={740}
              company={'LSU TECH'}
              color={main}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
