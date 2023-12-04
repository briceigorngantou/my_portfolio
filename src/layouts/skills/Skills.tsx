/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import Title from '../../components/title/Title';
import {
  frameworks,
  languages,
  environnementDev,
  others,
  certificates
} from '../../constants/skills.data';
import CardSkills from '../../components/cards/CardSkills';

const imageEnv_light = require('../../assets/env_light.png');
const imageEnv_dark = require('../../assets/env_dark.png');
const imageFrameworks_light = require('../../assets/frameworks_light.png');
const imageFrameworks_dark = require('../../assets/frameworks_dark.png');
const imageLanguages_light = require('../../assets/language_light.png');
const imageLanguages_dark = require('../../assets/language_dark.png');
const imageOther_light = require('../../assets/other_light.png');
const imageOther_dark = require('../../assets/other_dark.png');
const imageCertificate_light = require('../../assets/certificate_light.png');
const imageCertificate_dark = require('../../assets/certificate_dark.png');

export default function Skills() {
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
        <Title title="MES COMPÉTENCES" />
      </Grid>
      <Grid
        sx={{ px: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}
        container
        p={2}
        justifyContent="center"
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'LANGAGES DE PROGRAMMATION'}
            style={undefined}
            picture={
              theme.palette.mode === 'light'
                ? imageLanguages_light
                : imageLanguages_dark
            }
            width={550}
            height={500}
            color={main}
            listItems={languages}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'FRAMEWORKS'}
            style={undefined}
            picture={
              theme.palette.mode === 'light'
                ? imageFrameworks_light
                : imageFrameworks_dark
            }
            width={550}
            height={500}
            color={main}
            listItems={frameworks}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'ENVIRONNEMENTS DE DÉVELOPPEMENT'}
            style={undefined}
            picture={
              theme.palette.mode === 'light' ? imageEnv_light : imageEnv_dark
            }
            width={550}
            height={500}
            color={main}
            listItems={environnementDev}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'AUTRES TECHNOLOGIES'}
            style={undefined}
            picture={
              theme.palette.mode === 'light'
                ? imageOther_light
                : imageOther_dark
            }
            width={550}
            height={500}
            bgcolor={light}
            color={main}
            listItems={others}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'MES CERTIFICATIONS'}
            style={undefined}
            picture={
              theme.palette.mode === 'light'
                ? imageCertificate_light
                : imageCertificate_dark
            }
            width={550}
            height={500}
            color={main}
            listItems={certificates}
            certificate={true}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
