import { Grid, useTheme } from '@mui/material';
import React from 'react';
import CardExperiences from '../../components/cards/CardExperiences';
import Title from '../../components/title/Title';
import {
  contentLSU,
  contentOR,
  contentST,
  missionLSU,
  missionOr,
  missionST
} from '../../constants/experiences.data';

export default function MyExperience() {
  const theme = useTheme();
  const { light, main } = theme.palette.primary;
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
      <Grid
        sx={{ px: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}
        container
        p={2}
        justifyContent="center"
      >
        <Grid sx={{ margin: 1 }}>
          <CardExperiences
            title={'DÉVELOPPEUR FULL STACK'}
            location={'Douala, Cameroun'}
            date={'Octobre 2022 - Octobre 2023'}
            subtitle={'Société de service numérique'}
            company={'ST DIGITAL'}
            style={undefined}
            width={600}
            height={700}
            mission={missionST}
            color={main}
            content={contentST}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardExperiences
            title={'STAGIAIRE DÉVELOPPEUR WEB'}
            location={'Douala, Cameroun'}
            date={'Avril 2022 - Octobre 2022'}
            subtitle={'Entreprise de télécommunication'}
            mission={missionOr}
            company={'Orange'}
            style={undefined}
            width={600}
            height={700}
            color={main}
            content={contentOR}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardExperiences
            title={'DÉVELOPPEUR WEB À TEMPS PARTIEL'}
            style={undefined}
            location={'HOUSTON, USA'}
            date={'Janvier 2020 - Mai 2022'}
            subtitle={'Entreprise de transformation digitale'}
            content={contentLSU}
            mission={missionLSU}
            width={600}
            height={700}
            company={'LSU TECH'}
            bgcolor={light}
            color={main}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
